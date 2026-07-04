# Vela Chatbot Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a floating AI chat widget named Vela to the Souvren site, powered by Claude, with contextual lead capture via the existing Formspree endpoint.

**Architecture:** A React context (`ChatContext`) mounted in `layout.tsx` holds session messages and persists them across page navigation. A client-side widget (`ChatWidget`) renders a floating trigger button and animated panel. An Edge API route streams Claude responses and fires the `capture_lead` tool to Formspree when the user shows engagement intent.

**Tech Stack:** `@anthropic-ai/sdk`, Next.js 15 Edge runtime, Framer Motion (already installed), Tailwind CSS v4, Formspree (existing endpoint `xpqkapgw`)

---

## File Map

| Action | Path | Responsibility |
|--------|------|---------------|
| Create | `src/components/Chat/ChatContext.tsx` | Message state, open/close state, sendMessage, streaming logic |
| Create | `src/components/Chat/ChatWidget.tsx` | Floating button + animated panel shell |
| Create | `src/components/Chat/ChatMessages.tsx` | Scrollable message list with streaming cursor |
| Create | `src/components/Chat/ChatInput.tsx` | Textarea input + send button |
| Create | `src/app/api/chat/route.ts` | Edge route — streams Claude, handles capture_lead tool |
| Modify | `src/app/layout.tsx` | Add ChatProvider wrapper + ChatWidget mount |

---

## Task 1: Install dependency and create .env.local

**Files:**
- Modify: `package.json` (via npm install)
- Create: `.env.local`

- [ ] **Step 1: Install the Anthropic SDK**

```bash
cd "C:\Users\lukea\Documents\The Coordinate Group\Souvren\nextjs-app"
npm install @anthropic-ai/sdk
```

Expected output: `added 1 package` (or similar — no errors)

- [ ] **Step 2: Create .env.local with the API key**

Create the file `C:\Users\lukea\Documents\The Coordinate Group\Souvren\nextjs-app\.env.local`:

```
ANTHROPIC_API_KEY=sk-ant-YOUR_KEY_HERE
```

Replace `sk-ant-YOUR_KEY_HERE` with the real key from console.anthropic.com. This file is gitignored by default in Next.js — do not commit it.

- [ ] **Step 3: Confirm .env.local is gitignored**

```bash
cat "C:\Users\lukea\Documents\The Coordinate Group\Souvren\nextjs-app\.gitignore" | grep env
```

Expected output includes: `.env*.local`

- [ ] **Step 4: Commit the SDK installation**

```bash
cd "C:\Users\lukea\Documents\The Coordinate Group\Souvren\nextjs-app"
git add package.json package-lock.json
git commit -m "feat: install @anthropic-ai/sdk for Vela chatbot"
```

---

## Task 2: Create ChatContext

**Files:**
- Create: `src/components/Chat/ChatContext.tsx`

- [ ] **Step 1: Create the directory**

```bash
mkdir -p "C:\Users\lukea\Documents\The Coordinate Group\Souvren\nextjs-app\src\components\Chat"
```

- [ ] **Step 2: Write ChatContext.tsx**

Create `src/components/Chat/ChatContext.tsx`:

```tsx
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
};

type ChatContextValue = {
  messages: Message[];
  isOpen: boolean;
  isStreaming: boolean;
  open: () => void;
  close: () => void;
  sendMessage: (text: string) => void;
};

const ChatContext = createContext<ChatContextValue | null>(null);

const GREETING_ID = "vela-greeting";

const GREETING: Message = {
  id: GREETING_ID,
  role: "assistant",
  content:
    "Hi, I'm Vela — your guide to everything Souvren. Ask me about our work, our frameworks, or how we might be able to help you.",
};

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [isOpen, setIsOpen] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const isStreamingRef = useRef(false);

  const sendMessage = useCallback(
    async (text: string) => {
      if (isStreamingRef.current) return;

      const userMsg: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: text,
      };
      const assistantId = crypto.randomUUID();

      // Build history before state update — exclude the static greeting
      const history = [
        ...messages
          .filter((m) => m.id !== GREETING_ID && !m.isStreaming)
          .map((m) => ({ role: m.role, content: m.content })),
        { role: "user" as const, content: text },
      ];

      setMessages((prev) => [
        ...prev,
        userMsg,
        { id: assistantId, role: "assistant", content: "", isStreaming: true },
      ]);
      setIsStreaming(true);
      isStreamingRef.current = true;

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history }),
        });

        if (!res.ok || !res.body) throw new Error("Request failed");

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let accumulated = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          accumulated += decoder.decode(value, { stream: true });
          const snap = accumulated;
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, content: snap } : m
            )
          );
        }

        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, isStreaming: false } : m
          )
        );
      } catch {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? {
                  ...m,
                  content: "Something went wrong. Please try again.",
                  isStreaming: false,
                }
              : m
          )
        );
      } finally {
        setIsStreaming(false);
        isStreamingRef.current = false;
      }
    },
    [messages]
  );

  return (
    <ChatContext.Provider
      value={{
        messages,
        isOpen,
        isStreaming,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
}
```

- [ ] **Step 3: Verify the file was created**

```bash
ls "C:\Users\lukea\Documents\The Coordinate Group\Souvren\nextjs-app\src\components\Chat"
```

Expected: `ChatContext.tsx`

- [ ] **Step 4: Commit**

```bash
cd "C:\Users\lukea\Documents\The Coordinate Group\Souvren\nextjs-app"
git add src/components/Chat/ChatContext.tsx
git commit -m "feat: add ChatContext for Vela session state and streaming"
```

---

## Task 3: Create the Edge API route

**Files:**
- Create: `src/app/api/chat/route.ts`

- [ ] **Step 1: Create the directory**

```bash
mkdir -p "C:\Users\lukea\Documents\The Coordinate Group\Souvren\nextjs-app\src\app\api\chat"
```

- [ ] **Step 2: Write route.ts**

Create `src/app/api/chat/route.ts`:

```ts
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
          messages,
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
```

- [ ] **Step 3: Verify**

```bash
ls "C:\Users\lukea\Documents\The Coordinate Group\Souvren\nextjs-app\src\app\api\chat"
```

Expected: `route.ts`

- [ ] **Step 4: Smoke-test the route with curl**

Start the dev server first (`npm run dev`), then in a separate terminal:

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"What is Souvren?"}]}' \
  --no-buffer
```

Expected: a streaming plain-text response describing Souvren (tokens arrive progressively).

- [ ] **Step 5: Commit**

```bash
cd "C:\Users\lukea\Documents\The Coordinate Group\Souvren\nextjs-app"
git add src/app/api/chat/route.ts
git commit -m "feat: add /api/chat Edge route with Claude streaming and capture_lead tool"
```

---

## Task 4: Create ChatMessages

**Files:**
- Create: `src/components/Chat/ChatMessages.tsx`

- [ ] **Step 1: Write ChatMessages.tsx**

Create `src/components/Chat/ChatMessages.tsx`:

```tsx
"use client";

import { useEffect, useRef } from "react";
import type { Message } from "./ChatContext";

export default function ChatMessages({ messages }: { messages: Message[] }) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 min-h-0">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[85%] px-4 py-3 text-[15px] leading-[1.55] ${
              msg.role === "user"
                ? "bg-[#110F0F] text-white rounded-2xl rounded-br-sm"
                : "bg-[#F0F0EE] text-[#292929] rounded-2xl rounded-bl-sm"
            }`}
          >
            {msg.content}
            {msg.isStreaming && msg.content === "" && (
              <span className="inline-block w-[6px] h-[14px] bg-[#C48C59] animate-pulse align-middle" />
            )}
            {msg.isStreaming && msg.content !== "" && (
              <span className="inline-block w-[6px] h-[14px] ml-0.5 bg-[#C48C59] animate-pulse align-middle" />
            )}
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd "C:\Users\lukea\Documents\The Coordinate Group\Souvren\nextjs-app"
git add src/components/Chat/ChatMessages.tsx
git commit -m "feat: add ChatMessages with streaming cursor"
```

---

## Task 5: Create ChatInput

**Files:**
- Create: `src/components/Chat/ChatInput.tsx`

- [ ] **Step 1: Write ChatInput.tsx**

Create `src/components/Chat/ChatInput.tsx`:

```tsx
"use client";

import { useState, type KeyboardEvent } from "react";

export default function ChatInput({
  onSend,
  disabled,
}: {
  onSend: (text: string) => void;
  disabled: boolean;
}) {
  const [value, setValue] = useState("");

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div className="border-t border-[#292929]/10 px-4 py-3 flex items-end gap-2 shrink-0">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask anything..."
        rows={1}
        disabled={disabled}
        className="flex-1 resize-none bg-transparent text-[14px] text-[#292929] placeholder-[#292929]/30 outline-none leading-[1.5] max-h-[120px] overflow-y-auto disabled:opacity-40"
      />
      <button
        onClick={submit}
        disabled={!value.trim() || disabled}
        className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 disabled:opacity-30 text-[#292929]/30 enabled:text-[#C48C59] enabled:hover:bg-[#C48C59]/10"
        aria-label="Send"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M2 8h12M9 3l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd "C:\Users\lukea\Documents\The Coordinate Group\Souvren\nextjs-app"
git add src/components/Chat/ChatInput.tsx
git commit -m "feat: add ChatInput with Enter-to-send and disabled state"
```

---

## Task 6: Create ChatWidget

**Files:**
- Create: `src/components/Chat/ChatWidget.tsx`

- [ ] **Step 1: Write ChatWidget.tsx**

Create `src/components/Chat/ChatWidget.tsx`:

```tsx
"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useChat } from "./ChatContext";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const monoStyle = { fontFamily: "var(--font-jetbrains-mono)" };

export default function ChatWidget() {
  const { messages, isOpen, isStreaming, open, close, sendMessage } = useChat();
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, close]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        isOpen &&
        panelRef.current &&
        !panelRef.current.contains(e.target as Node)
      ) {
        close();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, close]);

  return (
    <div
      ref={panelRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
    >
      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-[380px] max-[440px]:w-[calc(100vw-48px)] flex flex-col bg-[#FAFAFA] border border-[#292929]/10 shadow-xl rounded-2xl overflow-hidden"
            style={{ maxHeight: "70vh" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#292929]/10 shrink-0">
              <span
                className="text-[11px] tracking-[0.22em] uppercase text-[#0A0A0B]"
                style={monoStyle}
              >
                Vela
              </span>
              <button
                onClick={close}
                className="text-[#292929]/40 hover:text-[#292929]/70 transition-colors duration-200"
                aria-label="Close Vela"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 2l10 10M12 2L2 12"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <ChatMessages messages={messages} />

            {/* Input */}
            <ChatInput onSend={sendMessage} disabled={isStreaming} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        onClick={isOpen ? close : open}
        aria-label={isOpen ? "Close Vela" : "Open Vela"}
        className="w-12 h-12 rounded-full bg-[#110F0F] text-white flex items-center justify-center shadow-lg hover:bg-[#2a2828] transition-colors duration-200"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4, type: "spring", stiffness: 200 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 3l10 10M13 3L3 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd "C:\Users\lukea\Documents\The Coordinate Group\Souvren\nextjs-app"
git add src/components/Chat/ChatWidget.tsx
git commit -m "feat: add ChatWidget floating button and animated panel"
```

---

## Task 7: Wire into layout.tsx

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update layout.tsx**

Replace the contents of `src/app/layout.tsx` with:

```tsx
import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans, JetBrains_Mono, Cormorant_Garamond, Instrument_Sans } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import { ChatProvider } from "@/components/Chat/ChatContext";
import ChatWidget from "@/components/Chat/ChatWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Souvren | Digital Consultancy",
  description:
    "Independent technical governance and oversight to secure the Seychelles' digital infrastructure.",
  robots: "index, follow",
  openGraph: {
    title: "Souvren | Digital Consultancy",
    description:
      "Technical oversight and governance for the Seychelles' digital mission.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${cormorantGaramond.variable} ${instrumentSans.variable} font-sans antialiased`}
      >
        <ChatProvider>
          {children}
          <CookieBanner />
          <ChatWidget />
        </ChatProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Start the dev server and verify the widget appears**

```bash
cd "C:\Users\lukea\Documents\The Coordinate Group\Souvren\nextjs-app"
npm run dev
```

Open `http://localhost:3000` in a browser. After ~1 second you should see a dark circular button appear bottom-right. Click it — the Vela panel should slide up showing the greeting message.

- [ ] **Step 3: Test a conversation**

In the chat panel, type: `What is Souvren?` and press Enter.

Expected: Claude streams a response describing Souvren. The gold cursor blinks while streaming.

- [ ] **Step 4: Test lead capture**

Type: `I'm interested in working with Souvren` and follow Vela's prompts for name and email.

Expected: Vela asks for your name, then your email. After providing both, Vela responds with `"Done — the team will be in touch with you shortly."` Check the Formspree dashboard at `formspree.io` to confirm the submission arrived.

- [ ] **Step 5: Test session persistence**

While the chat panel is open with some messages, navigate to `/who-we-are`. The messages should still be present when you return.

- [ ] **Step 6: Commit**

```bash
cd "C:\Users\lukea\Documents\The Coordinate Group\Souvren\nextjs-app"
git add src/app/layout.tsx
git commit -m "feat: mount ChatProvider and ChatWidget globally in layout"
```

---

## Task 8: Add ANTHROPIC_API_KEY to Vercel and deploy

**Files:** None — Vercel dashboard configuration

- [ ] **Step 1: Add the environment variable in Vercel**

Go to the Vercel project dashboard → Settings → Environment Variables.

Add:
- **Key:** `ANTHROPIC_API_KEY`
- **Value:** your key from console.anthropic.com
- **Environments:** Production, Preview, Development

- [ ] **Step 2: Push to production**

```bash
cd "C:\Users\lukea\Documents\The Coordinate Group\Souvren\nextjs-app"
git push origin master
```

- [ ] **Step 3: Verify on production**

Once Vercel deploys, open the live site and repeat the conversation test from Task 7 Step 3. Confirm streaming works and a lead capture submits to Formspree.
