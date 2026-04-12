"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "@formspree/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type Stage = 1 | 2 | 3;

const monoStyle = { fontFamily: "var(--font-jetbrains-mono)" };

const stageVariants = {
  enter: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function SecureBriefingModal({ isOpen, onClose }: Props) {
  const [formState, handleFormspreeSubmit, resetForm] = useForm("xpqkapgw");
  const [stage, setStage] = useState<Stage>(1);
  const [name, setName] = useState("");
  const [objective, setObjective] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [emailError, setEmailError] = useState("");
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setStage(1);
      setName("");
      setObjective("");
      setEmail("");
      setHoneypot("");
      setEmailError("");
      resetForm();
    }
  }, [isOpen]);

  // Focus first input when stage changes
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 350);
      return () => clearTimeout(t);
    }
  }, [stage, isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const validateEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    if (honeypot) return;
    handleFormspreeSubmit({ name, objective, email });
  };

  const progress = formState.succeeded ? 100 : Math.round(((stage - 1) / 3) * 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="relative z-10 w-full max-w-lg bg-[#08090A] border border-white/[0.08] flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-white/[0.06]">
              <span
                className="text-[11px] tracking-[0.22em] text-[#A28E73]/70 uppercase"
                style={monoStyle}
              >
                Secure Briefing
              </span>
              <button
                onClick={onClose}
                className="text-[#F8FAFC]/30 hover:text-[#F8FAFC]/60 transition-colors duration-200"
                aria-label="Close"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Progress bar */}
            <div className="h-px bg-white/[0.04] relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-[#A28E73]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>

            {/* Content */}
            <div className="px-8 py-10 min-h-[280px] flex flex-col justify-between">
              <AnimatePresence mode="wait">

                {formState.succeeded ? (
                  <motion.div
                    key="success"
                    variants={stageVariants}
                    initial="enter"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col items-center text-center gap-6 py-4"
                  >
                    {/* Tick */}
                    <div className="w-14 h-14 rounded-full border border-[#A28E73]/40 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l5 5L19 7" stroke="#A28E73" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-[20px] font-medium text-[#F8FAFC] tracking-[-0.02em]">
                        We have received your details
                      </h3>
                      <p className="text-[14px] text-[#C2C7D0] leading-[1.85] max-w-sm mx-auto">
                        To maintain the integrity of our conversation, we will review these requirements and reach out via email within 4 business hours to coordinate our session.
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="mt-2 px-8 py-3 text-[11px] tracking-widest text-[#A28E73] border border-[#A28E73]/40 hover:border-[#A28E73] hover:bg-[#A28E73]/10 transition-all duration-300"
                      style={monoStyle}
                    >
                      CLOSE
                    </button>
                  </motion.div>

                ) : stage === 1 ? (
                  <motion.div key="stage1" variants={stageVariants} initial="enter" animate="visible" exit="exit" className="flex flex-col gap-8">
                    <div>
                      <StageLabel>01 / 03</StageLabel>
                      <h3 className="text-[22px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-snug mt-3">
                        Who are we briefing?
                      </h3>
                    </div>
                    <input
                      ref={inputRef as React.RefObject<HTMLInputElement>}
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      onKeyDown={e => { if (e.key === "Enter" && name.trim()) setStage(2); }}
                      placeholder="Enter your name"
                      className="w-full bg-transparent border-b border-white/[0.12] focus:border-[#A28E73] outline-none text-[16px] text-[#F8FAFC] placeholder-white/20 pb-3 transition-colors duration-200"
                    />
                    <div className="flex justify-end">
                      <NextButton disabled={!name.trim()} onClick={() => setStage(2)} />
                    </div>
                  </motion.div>

                ) : stage === 2 ? (
                  <motion.div key="stage2" variants={stageVariants} initial="enter" animate="visible" exit="exit" className="flex flex-col gap-8">
                    <div>
                      <StageLabel>02 / 03</StageLabel>
                      <h3 className="text-[22px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-snug mt-3">
                        What is the primary objective of this briefing?
                      </h3>
                    </div>
                    <textarea
                      ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                      value={objective}
                      onChange={e => setObjective(e.target.value)}
                      placeholder="Describe your strategic goals..."
                      rows={4}
                      className="w-full bg-transparent border-b border-white/[0.12] focus:border-[#A28E73] outline-none text-[16px] text-[#F8FAFC] placeholder-white/20 pb-3 resize-none transition-colors duration-200"
                    />
                    <div className="flex justify-end">
                      <NextButton disabled={!objective.trim()} onClick={() => setStage(3)} />
                    </div>
                  </motion.div>

                ) : (
                  <motion.div key="stage3" variants={stageVariants} initial="enter" animate="visible" exit="exit" className="flex flex-col gap-8">
                    <div>
                      <StageLabel>03 / 03</StageLabel>
                      <h3 className="text-[22px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-snug mt-3">
                        Where should we send the initial response?
                      </h3>
                    </div>
                    <div className="flex flex-col gap-2">
                      <input
                        ref={inputRef as React.RefObject<HTMLInputElement>}
                        type="email"
                        value={email}
                        onChange={e => { setEmail(e.target.value); setEmailError(""); }}
                        onKeyDown={e => { if (e.key === "Enter") handleSubmit(); }}
                        placeholder="Enter your corporate email"
                        className="w-full bg-transparent border-b border-white/[0.12] focus:border-[#A28E73] outline-none text-[16px] text-[#F8FAFC] placeholder-white/20 pb-3 transition-colors duration-200"
                      />
                      {emailError && (
                        <span className="text-[12px] text-red-400">{emailError}</span>
                      )}
                    </div>
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="_gotcha"
                      value={honeypot}
                      onChange={e => setHoneypot(e.target.value)}
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    {formState.errors && formState.errors.length > 0 && (
                      <p className="text-[13px] text-red-400">Something went wrong. Please try again or email us directly.</p>
                    )}
                    <div className="flex justify-end">
                      <button
                        disabled={!email.trim() || formState.submitting}
                        onClick={handleSubmit}
                        className="px-8 py-3 text-[11px] tracking-widest text-[#A28E73] border border-[#A28E73]/50 hover:border-[#A28E73] hover:bg-[#A28E73]/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                        style={monoStyle}
                      >
                        {formState.submitting ? "SUBMITTING..." : "SUBMIT BRIEFING"}
                      </button>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function StageLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[11px] tracking-[0.22em] text-[#A28E73]/50 uppercase"
      style={monoStyle}
    >
      {children}
    </span>
  );
}

function NextButton({ disabled, onClick }: { disabled: boolean; onClick: () => void }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="px-8 py-3 text-[11px] tracking-widest text-[#A28E73] border border-[#A28E73]/50 hover:border-[#A28E73] hover:bg-[#A28E73]/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
      style={monoStyle}
    >
      NEXT
    </button>
  );
}
