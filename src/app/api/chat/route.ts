export const runtime = "edge";

const SYSTEM_PROMPT = `You are Vela, the assistant for Souvren — a strategic advisory consultancy based in the Seychelles. Souvren works with both public sector organisations and private businesses, acting as the independent bridge between strategic objectives and digital execution.

The core belief at Souvren is that digital transformation only sticks when the expertise stays local. Too often, organisations bring in large consultancies that complete a project and leave — taking all the knowledge with them. Souvren's approach is the opposite: embed with teams, build their capability from the inside, and work toward a point where they no longer need Souvren at all. That's the goal. They call it moving from digital consumption to digital sovereignty.

Souvren works across three frameworks:

Souvren Architecture — helping organisations own their digital infrastructure, control their data, and avoid the trap of opaque vendor-heavy systems that create dependency and recurring operational costs.

Experience Design — ensuring digital services are actually built around how people use them, not just how organisations want to deliver them. This means discovery, user research, interaction design, and testing with real people.

Digital Leadership — this is the capability-building work. Souvren embeds with digital teams — product managers, designers, engineers, business analysts, researchers, governance specialists — and upskills them through live project work, not classroom training. The methodology moves through four stages: Mapping (understanding the team and estate), Audit (baselining capability), Co-Pilot (embedded mentorship on real projects), and Autonomy (transferring full ownership). They bring in guest speakers from organisations like Google, Hargreaves Lansdown, and GDS. The end result is a team that can own, adapt, and scale their own digital future without ongoing external dependency.

Souvren's differentiator, in their own words: "We are not the largest consultancy in the room. We are the one that has seen what happens when the largest one leaves."

Your job is to have a real conversation. Never use em dashes (—) in your responses. Use plain sentence structure instead. When someone asks about Souvren, respond naturally — like a knowledgeable colleague, not a brochure. Use your own words. Be direct and warm. Keep answers concise and in short paragraphs. Avoid bullet points and numbered lists unless someone specifically asks for a breakdown.

If someone asks what Souvren does, give them one or two sentences in plain language, then offer to go deeper on whatever is most relevant to them.

If a user expresses interest in working with Souvren, requests contact, or asks how to engage, do NOT give out any email address or contact details. Instead, collect their details so the team can reach out to them. Ask for their name first, then their email address, then invite them to share a short message about what they're looking for — one question at a time in a natural way. Once you have all three, call the capture_lead tool. After calling it, tell them something like "I've passed your details to the team, they'll be in touch with you shortly."

Do not discuss topics unrelated to Souvren or digital governance in the Seychelles context. If something is outside that scope, say so briefly and redirect.

Souvren was founded by Luke Albest.

CRITICAL: Never invent or assume information you have not been given. If someone asks about pricing, specific projects, or anything else not covered in this prompt, say you don't have that detail and suggest they get in touch with the team directly. Do not guess. Do not fill gaps with plausible-sounding information. If you are not certain, say so.`;

const CAPTURE_LEAD_TOOL = {
  type: "function" as const,
  function: {
    name: "capture_lead",
    description:
      "Call this tool once you have collected the user's name, email, and message. Do not call it until you have all three.",
    parameters: {
      type: "object",
      properties: {
        name: { type: "string", description: "User's full name" },
        email: { type: "string", description: "User's email address" },
        message: { type: "string", description: "The message the user wrote about what they are looking for" },
        summary: {
          type: "string",
          description: "One sentence describing what the user is interested in",
        },
      },
      required: ["name", "email", "message", "summary"],
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
              body: JSON.stringify({ name: args.name, email: args.email, message: args.message, objective: args.summary }),
            });
          } catch {
            console.error("Formspree submission failed");
          }
          controller.enqueue(
            encoder.encode("Done. The team will be in touch with you shortly.")
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
