"use client";

import { FormEvent, useMemo, useState } from "react";
import { coachingContent } from "@/data/coachingContent";
import { coachingPackages } from "@/data/coachingPackages";

type FormState = {
  name: string;
  contact: string;
  packageId: string;
  issue: string;
  need: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialFormState: FormState = {
  name: "",
  contact: "",
  packageId: "goi-thau-hieu-chuyen-sau",
  issue: "",
  need: coachingContent.register.needs[0],
};

export default function RegisterForm() {
  const { register } = coachingContent;
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const publicPackages = useMemo(
    () => coachingPackages.filter((pkg) => pkg.isPublic && pkg.showInForm),
    [],
  );

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = register.validation.name;
    }

    if (!form.contact.trim()) {
      nextErrors.contact = register.validation.contact;
    }

    if (!form.issue.trim()) {
      nextErrors.issue = register.validation.issue;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    // Submission integration point for Google Sheet API or a backend endpoint.
    setSubmitted(true);
  };

  return (
    <form
      id="register-form"
      onSubmit={handleSubmit}
      className="electric-card rounded-[24px] p-5 sm:p-7"
    >
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-semibold text-[#EAF2FF]">
          {register.labels.name}
          <input
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="electric-input"
            placeholder={register.placeholders.name}
          />
          {errors.name ? <span className="text-xs text-gold-300">{errors.name}</span> : null}
        </label>

        <label className="grid gap-2 text-sm font-semibold text-[#EAF2FF]">
          {register.labels.contact}
          <input
            value={form.contact}
            onChange={(event) => updateField("contact", event.target.value)}
            className="electric-input"
            placeholder={register.placeholders.contact}
          />
          {errors.contact ? <span className="text-xs text-gold-300">{errors.contact}</span> : null}
        </label>

        <label className="grid gap-2 text-sm font-semibold text-[#EAF2FF]">
          {register.labels.package}
          <select
            value={form.packageId}
            onChange={(event) => updateField("packageId", event.target.value)}
            className="electric-input"
          >
            {publicPackages.map((pkg) => (
              <option key={pkg.id} value={pkg.id}>
                {pkg.name} - {pkg.price}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-semibold text-[#EAF2FF]">
          {register.labels.issue}
          <textarea
            value={form.issue}
            onChange={(event) => updateField("issue", event.target.value)}
            className="electric-input min-h-28"
            placeholder={register.placeholders.issue}
          />
          {errors.issue ? <span className="text-xs text-gold-300">{errors.issue}</span> : null}
        </label>

        <fieldset className="grid gap-2 text-sm font-semibold text-[#EAF2FF]">
          <legend>{register.labels.need}</legend>
          <div className="grid gap-3 sm:grid-cols-3">
            {register.needs.map((need) => (
              <label
                key={need}
                className={`cursor-pointer rounded-xl border px-4 py-3 text-center text-sm font-semibold transition ${
                  form.need === need
                    ? "border-gold-400/45 bg-gold-400/12 text-gold-400"
                    : "border-[rgba(0,163,255,0.18)] bg-[#04122C] text-[#EAF2FF] hover:border-gold-400/35"
                }`}
              >
                <input
                  type="radio"
                  name="need"
                  value={need}
                  checked={form.need === need}
                  onChange={(event) => updateField("need", event.target.value)}
                  className="sr-only"
                />
                {need}
              </label>
            ))}
          </div>
        </fieldset>

        {submitted ? (
          <div className="rounded-2xl border border-gold-300/30 bg-gold-300/10 p-4 text-sm leading-6 text-gold-300">
            {register.successMessage}
          </div>
        ) : null}

        <button className="gold-button mt-1 rounded-full px-6 py-4" type="submit">
          {register.submitLabel}
        </button>
      </div>
    </form>
  );
}
