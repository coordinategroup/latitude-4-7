export const runtime = "edge";

const SYSTEM_PROMPT = `You are Vela, the assistant for Souvren — a strategic advisory consultancy helping the Seychelles build digital independence.

Souvren works across three areas: sovereign digital architecture (helping governments own their infrastructure and data), experience design (making public services genuinely usable for people), and digital leadership (building the local talent and capability to sustain it all). The focus is always advisory — Souvren guides decision-making, not implementation.

Your job is to have a real conversation. When someone asks about Souvren, draw on what you know and respond naturally — the way a knowledgeable colleague would explain it, not the way a brochure would. Paraphrase. Use your own words. Be direct and warm. Avoid bullet points and numbered lists unless the person has asked for a breakdown. Write in short paragraphs. Never copy marketing language verbatim.

If someone asks what Souvren does, give them a one or two sentence answer in plain language, then offer to go deeper on whichever part is most relevant to them.

If a user expresses interest in working with Souvren, requests contact, or asks how to engage, collect their name and email naturally within the conversation — one at a time — then call the capture_lead tool once you have both.

Do not discuss topics unrelated to Souvren or digital governance in the Seychelles context. If something is outside that scope, say so briefly and redirect.`;

const CAPTURE_LEAD_TOOL = {
  type: "function" as const,
  function: {
    name: "capture_lead",
    description:
      "Call this tool once you have collected the user's name and email and they have expressed genuine interest in engaging with Souvren. Do not call it before you have both name and email.",
    parameters: {
      type: "object",
      properties: {
        name: { type: "string", description: "User's full name" },
        email: { type: "string", description: "User's email address" },
        summary: {
          type: "string",
          description: "One sentence describing what the user is interested in",
        },
      },
      required: ["name", "email", "summary"],
    },
  },
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

  const mistralMessages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...safeMessages.map((m) => ({ role: m.role, content: m.content })),
  ];

  const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
    },
    body: JSON.stringify({
      model: "mistral-small-latest",
      messages: mistralMessages,
      tools: [CAPTURE_LEAD_TOOL],
      tool_choice: "auto",
      stream: true,
    }),
  });

  if (!response.ok || !response.body) {
    console.error("Mistral API error:", response.status, await response.text());
    return new Response("Something went wrong. Please try again.", { status: 500 });
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const reader = response.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let toolCallName = "";
      let toolCallArgs = "";
      let isToolCall = false;

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const data = line.slice(6).trim();
            if (data === "[DONE]") break;

            try {
              const chunk = JSON.parse(data);
              const delta = chunk.choices?.[0]?.delta;

              if (delta?.content) {
                controller.enqueue(encoder.encode(delta.content));
              }

              if (delta?.tool_calls) {
                isToolCall = true;
                for (const tc of delta.tool_calls) {
                  if (tc.function?.name) toolCallName = tc.function.name;
                  if (tc.function?.arguments) toolCallArgs += tc.function.arguments;
                }
              }
            } catch {
              // malformed chunk — skip
            }
          }
        }

        if (isToolCall && toolCallName === "capture_lead") {
          const args = JSON.parse(toolCallArgs) as Record<string, string>;
          try {
            await fetch("https://formspree.io/f/xpqkapgw", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({ name: args.name, email: args.email, objective: args.summary }),
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
