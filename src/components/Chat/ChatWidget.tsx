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
      <motion.div
        className="relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4, type: "spring", stiffness: 200 }}
      >
        <button
          onClick={isOpen ? close : open}
          aria-label={isOpen ? "Close Vela" : "Open Vela"}
          className={`relative flex items-center rounded-full bg-[#110F0F] text-white shadow-lg hover:bg-[#1e1c1c] transition-all duration-300 ${
            isOpen ? "w-12 h-12 justify-center" : "h-12 pl-1 pr-5 gap-3"
          }`}
        >
          {/* Icon with pulse rings */}
          <div className="relative shrink-0 w-10 h-10 flex items-center justify-center">
            {!isOpen && (
              <>
                <span className="absolute inset-0 rounded-full bg-[#C48C59]/20 animate-ping" style={{ animationDuration: "2.4s" }} />
                <span className="absolute inset-[-6px] rounded-full bg-[#C48C59]/10 animate-ping" style={{ animationDuration: "2.4s", animationDelay: "0.4s" }} />
              </>
            )}
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
                  key="sparkle"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2 L13.5 9.5 L21 12 L13.5 14.5 L12 22 L10.5 14.5 L3 12 L10.5 9.5 Z"
                    fill="#C48C59"
                  />
                  <path
                    d="M19 2 L19.7 4.3 L22 5 L19.7 5.7 L19 8 L18.3 5.7 L16 5 L18.3 4.3 Z"
                    fill="white"
                    opacity="0.7"
                  />
                  <path
                    d="M5 16 L5.5 17.5 L7 18 L5.5 18.5 L5 20 L4.5 18.5 L3 18 L4.5 17.5 Z"
                    fill="white"
                    opacity="0.5"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>

          {/* Text label — only when closed */}
          {!isOpen && (
            <div className="flex flex-col leading-none">
              <span className="text-[10px] text-white/50 mb-0.5">Speak with</span>
              <span className="text-[13px] font-medium text-white">Vela</span>
            </div>
          )}
        </button>
      </motion.div>
    </div>
  );
}
