import { FAQSectionKey, FAQSections } from "@/app/faq";
import FAQ, { Question } from "./faq";

interface FAQRendererProps {
  section: FAQSectionKey;
}

export function FAQRenderer({ section }: FAQRendererProps) {
  const faqs = FAQSections[section];

  if (!faqs) return null;

  return (
    <FAQ>
      {faqs.map((faq: any, index: number) => (
        <Question key={index} question={faq.question}>
          {faq.answer}
        </Question>
      ))}
    </FAQ>
  );
}
