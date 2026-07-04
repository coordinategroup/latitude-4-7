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
