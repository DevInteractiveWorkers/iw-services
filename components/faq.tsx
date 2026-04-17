"use client";

import React, { useState } from "react";
import { Icon } from "./icon/icon";

interface FAQProps {
  children: React.ReactNode;
}

interface FAQQuestionProps {
  question: string;
  children: React.ReactNode;
  onToggle?: () => void;
  isOpen?: boolean;
}

export function Question({
  question,
  children,
  onToggle,
  isOpen,
}: FAQQuestionProps) {
  return (
    <div>
      <span
        className="font-medium text-lg text-[#191919] flex border-t py-4 cursor-pointer"
        onClick={onToggle}
      >
        <div
          className={`transition-all duration-150 ${isOpen ? "" : "rotate-180"}`}
        >
          <Icon icon="chevron-up" size={25} stroke={2} />
        </div>
        {question}
      </span>
      <div
        className={`mt-2 text-[#191919] transition-all duration-150 ${isOpen ? "mb-4" : "mb-0 h-0 line-clamp-1"}`}
      >
        {children}
      </div>
    </div>
  );
}

export default function FAQ({ children }: FAQProps) {
  const items = React.Children.toArray(children);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-10 flex flex-col items-center">
      <h3 className="text-5xl font-medium py-4 grid md:grid-cols-2">
        <span className="md:text-right text-left md:pr-3">
          Have more
          <br className="max-md:hidden" /> questions?
        </span>
        <span className="md:text-left text-right md:border-l md:pl-3">
          We've
          <br className="max-md:hidden" /> got you!
        </span>
      </h3>

      <div className="mt-6 lg:w-10/12 md:w-11/12">
        {items.map((child, i) => {
          if (React.isValidElement<FAQQuestionProps>(child)) {
            return React.cloneElement(child, {
              isOpen: openIndex === i,
              onToggle: () => setOpenIndex(openIndex === i ? null : i),
            });
          }
        })}
      </div>
    </section>
  );
}
