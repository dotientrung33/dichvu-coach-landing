"use client";

import { FormEvent, useMemo, useState } from "react";
import { coachingContent } from "@/data/coachingContent";
import { contactInfo } from "@/data/contact";
import { coachingPackages } from "@/data/coachingPackages";

type FormState = {
  name: string;
  contact: string;
  email: string;
  packageId: string;
  currentNeed: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialFormState: FormState = {
  name: "",
  contact: "",
  email: "",
  packageId: "goi-thau-hieu-chuyen-sau",
  currentNeed: "",
};

export default function RegisterForm() {
  const { register } = coachingContent;
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const publicPackages = useMemo(
    () => coachingPackages.filter((pkg) => pkg.isPublic && pkg.showInForm),
    [],
  );

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitError("");
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

    if (!form.packageId.trim()) {
      nextErrors.packageId = "Vui lòng chọn gói quan tâm.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    if (!validate()) {
      return;
    }

    // Google Apps Script Web App often needs no-cors when called directly from a frontend MVP.
    const endpoint = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ENDPOINT;

    if (!endpoint) {
      setSubmitError("Chưa cấu hình endpoint nhận dữ liệu. Vui lòng liên hệ Hotline/Zalo.");
      return;
    }

    const selectedPackage = publicPackages.find((pkg) => pkg.id === form.packageId);
    const payload = {
      fullName: form.name.trim(),
      phone: form.contact.trim(),
      email: form.email.trim(),
      packageInterest: selectedPackage
        ? `${selectedPackage.name} - ${selectedPackage.price}`
        : form.packageId,
      currentNeed: form.currentNeed.trim(),
      source: "Landing Page Coaching",
    };

    try {
      setIsSubmitting(true);

      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
    } catch {
      setSubmitError("Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ Hotline/Zalo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="electric-card rounded-[24px] border-gold-300/25 p-5 sm:p-7">
        <div className="grid gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300">
            Đã ghi nhận thông tin
          </p>
          <h3 className="text-[24px] font-semibold leading-tight text-white sm:text-[28px]">
            Cảm ơn bạn đã gửi thông tin đăng ký.
          </h3>
          <p className="text-[16px] leading-7 text-[#EAF2FF]">
            Đội ngũ Mr. Thấu Hiểu sẽ sớm liên hệ lại với bạn để xác nhận nhu
            cầu và gợi ý hình thức Coaching phù hợp.
          </p>
          <div className="rounded-2xl border border-[rgba(0,163,255,0.18)] bg-[#04122C]/78 p-4">
            <p className="text-sm font-semibold text-[#AFC2E6]">Hotline</p>
            <a
              href={contactInfo.phoneHref}
              className="mt-1 inline-flex text-[22px] font-bold text-gold-300 transition hover:text-gold-200"
            >
              {contactInfo.phone}
            </a>
          </div>
          <div className="mt-1 flex flex-col gap-3 sm:flex-row">
            <a
              href={contactInfo.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(0,163,255,0.22)] bg-[#071B3F]/75 px-4 py-3 text-sm font-bold text-[#EAF2FF] transition hover:border-gold-300/35 hover:bg-gold-300/10"
            >
              <img
                src={contactInfo.icons.zalo}
                alt="Zalo"
                width={22}
                height={22}
                className="h-[22px] w-[22px] object-contain"
              />
              Nhắn Zalo ngay
            </a>
            <a
              href={contactInfo.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(0,163,255,0.22)] bg-[#071B3F]/75 px-4 py-3 text-sm font-bold text-[#EAF2FF] transition hover:border-gold-300/35 hover:bg-gold-300/10"
            >
              <img
                src={contactInfo.icons.facebook}
                alt="Facebook"
                width={22}
                height={22}
                className="h-[22px] w-[22px] object-contain"
              />
              Theo dõi Fanpage
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      id="register-form"
      onSubmit={handleSubmit}
      className="electric-card rounded-[24px] p-5 sm:p-7"
    >
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-semibold text-[#EAF2FF]">
          Họ và tên *
          <input
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="electric-input"
            placeholder={register.placeholders.name}
          />
          {errors.name ? <span className="text-xs text-gold-300">{errors.name}</span> : null}
        </label>

        <label className="grid gap-2 text-sm font-semibold text-[#EAF2FF]">
          Số điện thoại/Zalo *
          <input
            value={form.contact}
            onChange={(event) => updateField("contact", event.target.value)}
            className="electric-input"
            placeholder={register.placeholders.contact}
          />
          {errors.contact ? <span className="text-xs text-gold-300">{errors.contact}</span> : null}
        </label>

        <label className="grid gap-2 text-sm font-semibold text-[#EAF2FF]">
          Email nhận tài liệu nếu có
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="electric-input"
            placeholder="email@example.com"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-[#EAF2FF]">
          Bạn quan tâm gói nào? *
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
          {errors.packageId ? (
            <span className="text-xs text-gold-300">{errors.packageId}</span>
          ) : null}
        </label>

        <label className="grid gap-2 text-sm font-semibold text-[#EAF2FF]">
          Nhu cầu hiện tại của bạn
          <textarea
            value={form.currentNeed}
            onChange={(event) => updateField("currentNeed", event.target.value)}
            className="electric-input min-h-28"
            placeholder={register.placeholders.issue}
          />
        </label>

        {submitError ? (
          <div className="rounded-2xl border border-gold-300/30 bg-gold-300/10 p-4 text-sm leading-6 text-gold-300">
            {submitError}
          </div>
        ) : null}

        <button
          className="gold-button mt-1 rounded-full px-6 py-4 disabled:cursor-not-allowed disabled:opacity-65"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Đang gửi..." : register.submitLabel}
        </button>
      </div>
    </form>
  );
}
