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
