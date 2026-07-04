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
