import Anthropic from "@anthropic-ai/sdk";

export const runtime = "edge";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are Vela, the Souvren assistant. Souvren is a strategic advisory consultancy helping the Seychelles build digital independence through three frameworks: Souvren Architecture (sovereign digital ecosystems), Experience Design (human-centred services), and Digital Leadership (local capability building).

Answer questions about Souvren's services, research, perspectives, case studies, team, and intentions. Be concise, authoritative, and warm — never salesy or generic.

If a user expresses interest in working with Souvren, requests contact, or asks how to engage, first collect their name and email naturally within the conversation (ask for one at a time), then call the capture_lead tool once you have both.

Do not discuss topics unrelated to Souvren or digital governance in the Seychelles context.`;

const CAPTURE_LEAD_TOOL: Anthropic.Tool = {
  name: "capture_lead",
  description:
    "Call this tool once you have collected the user's name and email and they have expressed genuine interest in engaging with Souvren. Do not call it before you have both name and email.",
  input_schema: {
    type: "object" as const,
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
};

export async function POST(req: Request) {
  const { messages } = (await req.json()) as {
    messages: Anthropic.MessageParam[];
  };

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
    ) as Anthropic.MessageParam[];
  if (safeMessages.length === 0) {
    return new Response("Invalid request", { status: 400 });
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        let inToolUse = false;
        let toolName = "";
        let toolInputJson = "";

        const response = anthropic.messages.stream({
          model: "claude-sonnet-4-6",
          max_tokens: 1024,
          system: SYSTEM_PROMPT,
          tools: [CAPTURE_LEAD_TOOL],
          messages: safeMessages,
        });

        for await (const event of response) {
          if (event.type === "content_block_start") {
            if (event.content_block.type === "tool_use") {
              inToolUse = true;
              toolName = event.content_block.name;
              toolInputJson = "";
            }
          } else if (event.type === "content_block_delta") {
            if (event.delta.type === "text_delta") {
              controller.enqueue(encoder.encode(event.delta.text));
            } else if (
              event.delta.type === "input_json_delta" &&
              inToolUse
            ) {
              toolInputJson += event.delta.partial_json;
            }
          } else if (event.type === "content_block_stop") {
            inToolUse = false;
          } else if (
            event.type === "message_stop" &&
            toolName === "capture_lead"
          ) {
            try {
              const input = JSON.parse(toolInputJson) as {
                name: string;
                email: string;
                summary: string;
              };
              await fetch("https://formspree.io/f/xpqkapgw", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({
                  name: input.name,
                  email: input.email,
                  objective: input.summary,
                }),
              });
            } catch {
              console.error("Formspree submission failed");
            }
            controller.enqueue(
              encoder.encode(
                "Done — the team will be in touch with you shortly."
              )
            );
          }
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
