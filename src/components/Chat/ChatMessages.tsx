"use client";

import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import type { Message } from "./ChatContext";

export default function ChatMessages({ messages }: { messages: Message[] }) {
  const bottomRef = useRef<HTMLDivElement>(null);

  const prevCountRef = useRef(messages.length);

  useEffect(() => {
    if (messages.length !== prevCountRef.current) {
      // New message added — smooth scroll
      prevCountRef.current = messages.length;
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Streaming update — instant scroll (no animation jitter)
      bottomRef.current?.scrollIntoView({ behavior: "instant" });
    }
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
            {msg.role === "assistant" ? (
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                  ol: ({ children }) => <ol className="list-decimal pl-4 mb-2 space-y-1">{children}</ol>,
                  ul: ({ children }) => <ul className="list-disc pl-4 mb-2 space-y-1">{children}</ul>,
                  li: ({ children }) => <li>{children}</li>,
                  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                }}
              >
                {msg.content}
              </ReactMarkdown>
            ) : (
              msg.content
            )}
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
