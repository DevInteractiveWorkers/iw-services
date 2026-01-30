"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function SignUp({
  dark,
  className,
}: {
  dark?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent SSR issues
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <button
        className={
          className ??
          `cursor-pointer text-white active:bg-white hover:scale-105 active:scale-95 transition-all duration-300
          ${
            dark
              ? "bg-[#191919] px-4 py-1 rounded-md max-md:hidden active:text-[#191919]"
              : "bg-[#DD272D] px-6 py-3 md:text-2xl rounded-2xl active:text-[#DD272D]"
          }`
        }
        onClick={() => setOpen(true)}
      >
        Sign up for our Newsletter
      </button>

      {mounted &&
        open &&
        createPortal(<Modal onClose={() => setOpen(false)} />, document.body)}
    </>
  );
}

function Modal({ onClose }: { onClose: () => void }) {
  // Load external script once
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-2xl z-10 overflow-hidden flex justify-center items-center">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-6 text-xl font-bold cursor-pointer"
        >
          ✕
        </button>

        <iframe
          src="https://api.leadconnectorhq.com/widget/form/ZEseYSVkwkB9sjZqhqZR"
          className="w-full h-full min-h-[70svh] flex justify-center items-center"
          title="Newsletter contact form"
          data-form-id="ZEseYSVkwkB9sjZqhqZR"
        />
      </div>
    </div>
  );
}
