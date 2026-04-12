"use client";

import { useState } from "react";
import SecureBriefingModal from "./SecureBriefingModal";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function SecureBriefingButton({ className, style, children, onClick }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => { onClick?.(); setOpen(true); }}
        className={className}
        style={style}
      >
        {children ?? "SECURE BRIEFING"}
      </button>
      <SecureBriefingModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
