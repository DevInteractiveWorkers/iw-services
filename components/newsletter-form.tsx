"use client";

import { FormEvent, useState } from "react";

const ENDPOINT = "/api/contact";

const CONSENT_TEXT =
  "By checking this box, I consent to receive marketing and promotional messages, including special offers, discounts, new product updates among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.";

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  inquiry: string;
  marketingConsent: boolean;
  privacyAgreement: boolean;
}

type Errors = Partial<Record<keyof FormValues, string>>;
type Status = "idle" | "loading" | "success" | "error";

const INITIAL: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  inquiry: "",
  marketingConsent: false,
  privacyAgreement: false,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v: FormValues): Errors {
  const e: Errors = {};
  if (!v.fullName.trim()) e.fullName = "Full name is required.";
  if (!v.email.trim()) e.email = "Email is required.";
  else if (!EMAIL_RE.test(v.email.trim()))
    e.email = "Enter a valid email address.";
  if (!v.phone.trim()) e.phone = "Phone is required.";
  else if (v.phone.replace(/\D/g, "").length < 7)
    e.phone = "Enter a valid phone number.";
  if (!v.inquiry.trim()) e.inquiry = "Please tell us what you need help with.";
  if (!v.privacyAgreement)
    e.privacyAgreement = "You must agree with the Privacy Policy.";
  return e;
}

export default function NewsletterForm({
  onSuccess,
}: {
  onSuccess?: () => void;
}) {
  const [values, setValues] = useState<FormValues>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (status === "loading") return;

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values.fullName.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          company: values.company.trim(),
          message: values.inquiry.trim(),
          marketingConsent: values.marketingConsent,
          privacyAgreement: values.privacyAgreement,
        }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setValues(INITIAL);
      setErrors({});
      setStatus("success");
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (hasError?: string) =>
    `w-full rounded-md border px-3 py-2 text-base text-[#191919] bg-white placeholder:text-gray-400 outline-none transition-colors focus:border-[#DD272D] ${
      hasError ? "border-[#DD272D]" : "border-gray-300"
    }`;

  const labelClass = "mb-1 block text-sm font-medium text-[#191919]";
  const errorClass = "mt-1 text-sm text-[#DD272D]";
  const star = <span className="text-[#DD272D]"> *</span>;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex w-full flex-col gap-4 text-left"
    >
      <h2 className="text-2xl font-bold text-[#191919]">
        Sign up for our Newsletter
      </h2>

      <div>
        <label htmlFor="nl-fullName" className={labelClass}>
          Full Name{star}
        </label>
        <input
          id="nl-fullName"
          type="text"
          autoComplete="name"
          value={values.fullName}
          placeholder="John Doe"
          onChange={(e) => set("fullName", e.target.value)}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "nl-fullName-err" : undefined}
          className={inputClass(errors.fullName)}
        />
        {errors.fullName && (
          <p id="nl-fullName-err" className={errorClass}>
            {errors.fullName}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="nl-email" className={labelClass}>
          Email{star}
        </label>
        <input
          id="nl-email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={values.email}
          onChange={(e) => set("email", e.target.value)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "nl-email-err" : undefined}
          className={inputClass(errors.email)}
        />
        {errors.email && (
          <p id="nl-email-err" className={errorClass}>
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="nl-phone" className={labelClass}>
          Phone{star}
        </label>
        <input
          id="nl-phone"
          type="tel"
          autoComplete="tel"
          placeholder="+1 (555) 123-4567"
          value={values.phone}
          onChange={(e) => set("phone", e.target.value)}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "nl-phone-err" : undefined}
          className={inputClass(errors.phone)}
        />
        {errors.phone && (
          <p id="nl-phone-err" className={errorClass}>
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="nl-company" className={labelClass}>
          Company Name
        </label>
        <input
          id="nl-company"
          type="text"
          autoComplete="organization"
          placeholder="Your company or business name."
          value={values.company}
          onChange={(e) => set("company", e.target.value)}
          className={inputClass()}
        />
      </div>

      <div>
        <label htmlFor="nl-inquiry" className={labelClass}>
          Inquiry{star}
        </label>
        <textarea
          id="nl-inquiry"
          rows={4}
          placeholder="What would you like help with? (e.g. admin tasks, customer support)"
          value={values.inquiry}
          onChange={(e) => set("inquiry", e.target.value)}
          aria-invalid={!!errors.inquiry}
          aria-describedby={errors.inquiry ? "nl-inquiry-err" : undefined}
          className={inputClass(errors.inquiry)}
        />
        {errors.inquiry && (
          <p id="nl-inquiry-err" className={errorClass}>
            {errors.inquiry}
          </p>
        )}
      </div>

      <label className="flex cursor-pointer items-start gap-2 text-sm text-[#191919]">
        <input
          type="checkbox"
          checked={values.marketingConsent}
          onChange={(e) => set("marketingConsent", e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-[#DD272D]"
        />
        <span>{CONSENT_TEXT}</span>
      </label>

      <div>
        <label className="flex cursor-pointer items-start gap-2 text-sm text-[#191919]">
          <input
            type="checkbox"
            checked={values.privacyAgreement}
            onChange={(e) => set("privacyAgreement", e.target.checked)}
            aria-invalid={!!errors.privacyAgreement}
            aria-describedby={
              errors.privacyAgreement ? "nl-privacy-err" : undefined
            }
            className="mt-1 h-4 w-4 shrink-0 accent-[#DD272D]"
          />
          {/* No privacy page exists in the codebase yet; link "Privacy Policy" once one does. */}
          <span>I agree with the Privacy Policy{star}</span>
        </label>
        {errors.privacyAgreement && (
          <p id="nl-privacy-err" className={errorClass}>
            {errors.privacyAgreement}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="cursor-pointer rounded-2xl bg-[#DD272D] px-6 py-3 text-lg text-white transition-all duration-300 hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "loading" ? "Signing up..." : "Sign up"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="text-sm font-medium text-green-700">
            Thank you! You&apos;re signed up. We&apos;ll be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-[#DD272D]">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}
