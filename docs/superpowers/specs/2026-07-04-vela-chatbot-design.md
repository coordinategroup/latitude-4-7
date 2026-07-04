# Vela Chatbot — Design Spec
**Date:** 2026-07-04
**Status:** Approved

---

## Overview

A floating AI chat widget named **Vela** powered by the Anthropic Claude API. Vela answers questions about Souvren's services, frameworks, research, and intentions, and contextually captures leads by integrating with the existing Formspree endpoint used by the Contact modal.

---

## Architecture

### New files
| Path | Purpose |
|------|---------|
| `src/components/Chat/ChatContext.tsx` | React context — holds message history, open/close state, streaming flag |
| `src/components/Chat/ChatWidget.tsx` | Floating trigger button + animated panel shell |
| `src/components/Chat/ChatMessages.tsx` | Scrollable message list, streaming token render |
| `src/components/Chat/ChatInput.tsx` | Text input bar, send on Enter or button click |
| `src/app/api/chat/route.ts` | Edge API route — streams Claude responses, handles tool calls |

### Modified files
| Path | Change |
|------|--------|
| `src/app/layout.tsx` | Wrap with `ChatProvider`, mount `<ChatWidget />` globally |

---

## API Route — `/api/chat`

- **Runtime:** Edge (`export const runtime = "edge"`)
- **Method:** POST
- **Request body:** `{ messages: { role: "user" | "assistant", content: string }[] }`
- **Response:** `ReadableStream` (text/event-stream)

### Flow
1. Receive message history from client
2. Call `anthropic.messages.stream()` with system prompt + `capture_lead` tool
3. Pipe text deltas back to client as they arrive
4. If Claude emits a `tool_use` block for `capture_lead`:
   - POST `{ name, email, objective: summary }` to `https://formspree.io/f/xpqkapgw`
   - Stream a confirmation message back to the client
5. Close the stream

### System prompt
```
You are Vela, the Souvren assistant. Souvren is a strategic advisory
consultancy helping the Seychelles build digital independence through three
frameworks: Souvren Architecture (sovereign digital ecosystems), Experience
Design (human-centred services), and Digital Leadership (local capability
building).

Answer questions about Souvren's services, research, perspectives, case
studies, team, and intentions. Be concise, authoritative, and warm — never
salesy or generic. If a user expresses interest in working with Souvren,
requests contact, or asks how to engage, use the capture_lead tool to
collect their name and email naturally within the conversation.

Do not discuss topics unrelated to Souvren or digital governance in the
Seychelles context.
```

### `capture_lead` tool definition
```json
{
  "name": "capture_lead",
  "description": "Call when the user shows genuine interest in engaging with Souvren — e.g. asks to be contacted, requests a meeting, or expresses intent to work together. Collect name and email naturally in conversation before calling this tool.",
  "input_schema": {
    "type": "object",
    "properties": {
      "name":    { "type": "string", "description": "User's full name" },
      "email":   { "type": "string", "description": "User's email address" },
      "summary": { "type": "string", "description": "One sentence describing what the user is interested in" }
    },
    "required": ["name", "email", "summary"]
  }
}
```

---

## ChatContext

Stored in React state, mounted in `layout.tsx` so it survives page navigation.

```ts
type Message = {
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
```

Session persists in memory only — cleared on tab close. No localStorage.

---

## UI Design

### Trigger button
- Fixed position: `bottom-6 right-6`, `z-50`
- Size: `w-12 h-12`, fully rounded
- Style: `bg-[#110F0F]` with white chat bubble SVG icon
- Animates to `×` icon when panel is open (rotate transition)
- Subtle scale-up animation on first mount to draw attention

### Chat panel
- Slides up from the button via Framer Motion (`y: 20 → 0, opacity: 0 → 1`)
- Desktop: `w-[380px]`, anchored bottom-right above the trigger button
- Mobile: `w-full`, anchored to the bottom of the viewport
- Max height: `70vh`, message area scrollable

### Panel layout
```
┌─────────────────────────────┐
│ VELA                   [×]  │  ← JetBrains Mono, 11px, tracking-widest
├─────────────────────────────┤  ← border-[#292929]/10
│                             │
│  [Assistant bubble]         │  ← bg-[#F0F0EE], #292929 text, rounded-lg
│               [User bubble] │  ← bg-[#110F0F], white text, rounded-lg
│  [▌ streaming cursor]       │  ← animated gold #C48C59 cursor
│                             │
├─────────────────────────────┤
│ [ Ask anything...    ]  [→] │  ← input, send button gold on active
└─────────────────────────────┘
```

### Opening message
On first open, Vela greets with:
> "Hi, I'm Vela — your guide to everything Souvren. Ask me about our work, our frameworks, or how we might be able to help you."

### Colours
| Element | Value |
|---------|-------|
| Panel background | `#FAFAFA` |
| Panel border | `#292929/10` |
| Assistant bubble bg | `#F0F0EE` |
| Assistant text | `#292929` |
| User bubble bg | `#110F0F` |
| User text | `#FFFFFF` |
| Streaming cursor | `#C48C59` |
| Send button (active) | `#C48C59` |
| Header label | `#0A0A0B`, JetBrains Mono |

---

## Lead Capture Flow

Lead capture is entirely conversational — no separate form appears.

1. Claude detects genuine engagement intent in the conversation
2. Claude asks for name inline: *"I'd love to connect you with the team — what's your name?"*
3. Claude asks for email: *"And the best email to reach you on?"*
4. Claude calls `capture_lead` tool with collected data + summary
5. API route POSTs to Formspree `xpqkapgw` with fields: `name`, `email`, `objective`
6. Claude streams confirmation: *"Done — the team will be in touch shortly."*

---

## Error Handling

- **Network error on `/api/chat`:** Display inline error bubble — *"Something went wrong. Please try again."*
- **Formspree failure:** Claude still confirms receipt; failure is logged server-side (console.error) but not surfaced to user — the conversation data is not lost as it remains in view
- **Empty input:** Send button disabled, Enter blocked

---

## Environment Variables

| Variable | Where set |
|----------|-----------|
| `ANTHROPIC_API_KEY` | Vercel environment variables |

---

## Out of Scope

- Chat history persistence across sessions (localStorage / DB)
- Multi-language support
- Typing indicators from user side
- Admin dashboard for conversation logs
