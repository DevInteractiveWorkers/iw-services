"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import NewsletterForm from "./newsletter-form";

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
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90svh] overflow-y-auto rounded-2xl bg-white p-6 md:p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-4 text-xl font-bold cursor-pointer text-[#191919]"
        >
          ✕
        </button>

        <NewsletterForm />
      </div>
    </div>
  );
}
