import { coachingContent } from "@/data/coachingContent";
import { faqs } from "@/data/faqs";
import RegisterForm from "./RegisterForm";

export default function FAQRegisterSection() {
  const { register } = coachingContent;

  return (
    <section id="dang-ky" className="dark-section py-12 text-white sm:py-16 lg:py-20">
      <div className="section-shell">
        <div className="mb-8 w-full">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold-300">
            {register.eyebrow}
          </p>
          <h2 className="mt-4 text-[28px] font-semibold leading-tight text-white sm:text-[36px]">
            {register.title}
          </h2>
          <p className="mt-4 w-full text-[17px] leading-8 text-[#EAF2FF] sm:text-[18px]">
            {register.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
          <div id="faq" className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[rgba(0,163,255,0.18)] bg-[#071B3F]/72 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition duration-200 ease-out hover:border-[rgba(245,199,106,0.38)] hover:bg-[rgba(245,199,106,0.06)] sm:p-5"
              >
                <summary className="cursor-pointer list-none text-[17px] font-semibold leading-7 text-white transition group-hover:text-gold-400">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}
                    <span className="mt-1 text-gold-400 transition duration-200 group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-[15px] leading-7 text-[#EAF2FF] sm:text-[16px]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="lg:sticky lg:top-24">
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
