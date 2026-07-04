import { GoogleGenerativeAI, SchemaType, type Tool } from "@google/generative-ai";

export const runtime = "edge";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

const SYSTEM_PROMPT = `You are Vela, the Souvren assistant. Souvren is a strategic advisory consultancy helping the Seychelles build digital independence through three frameworks: Souvren Architecture (sovereign digital ecosystems), Experience Design (human-centred services), and Digital Leadership (local capability building).

Answer questions about Souvren's services, research, perspectives, case studies, team, and intentions. Be concise, authoritative, and warm — never salesy or generic.

If a user expresses interest in working with Souvren, requests contact, or asks how to engage, first collect their name and email naturally within the conversation (ask for one at a time), then call the capture_lead tool once you have both.

Do not discuss topics unrelated to Souvren or digital governance in the Seychelles context.`;

const CAPTURE_LEAD_TOOL: Tool = {
  functionDeclarations: [
    {
      name: "capture_lead",
      description:
        "Call this tool once you have collected the user's name and email and they have expressed genuine interest in engaging with Souvren. Do not call it before you have both name and email.",
      parameters: {
        type: SchemaType.OBJECT,
        properties: {
          name: { type: SchemaType.STRING, description: "User's full name" },
          email: { type: SchemaType.STRING, description: "User's email address" },
          summary: {
            type: SchemaType.STRING,
            description: "One sentence describing what the user is interested in",
          },
        },
        required: ["name", "email", "summary"],
      },
    },
  ],
};

type SimpleMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  const { messages } = (await req.json()) as { messages: SimpleMessage[] };

  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response("Invalid request", { status: 400 });
  }

  const safeMessages = messages
    .slice(-50)
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string"
    );

  if (safeMessages.length === 0) {
    return new Response("Invalid request", { status: 400 });
  }

  // Gemini: history = all but last message; current = last message
  const lastMsg = safeMessages[safeMessages.length - 1];
  const historyMsgs = safeMessages.slice(0, -1);

  const history = historyMsgs.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: SYSTEM_PROMPT,
    tools: [CAPTURE_LEAD_TOOL],
  });

  const chat = model.startChat({ history });
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const result = await chat.sendMessageStream(lastMsg.content);

        let functionCall: { name: string; args: Record<string, string> } | null = null;

        for await (const chunk of result.stream) {
          const candidate = chunk.candidates?.[0];
          if (!candidate?.content?.parts) continue;

          for (const part of candidate.content.parts) {
            if ("text" in part && part.text) {
              controller.enqueue(encoder.encode(part.text));
            } else if ("functionCall" in part && part.functionCall) {
              functionCall = {
                name: part.functionCall.name,
                args: part.functionCall.args as Record<string, string>,
              };
            }
          }
        }

        if (functionCall?.name === "capture_lead") {
          const { name, email, summary } = functionCall.args;
          try {
            await fetch("https://formspree.io/f/xpqkapgw", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({ name, email, objective: summary }),
            });
          } catch {
            console.error("Formspree submission failed");
          }
          controller.enqueue(
            encoder.encode("Done — the team will be in touch with you shortly.")
          );
        }
      } catch (err) {
        console.error("Chat API error:", err);
        controller.enqueue(
          encoder.encode("Something went wrong. Please try again.")
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
