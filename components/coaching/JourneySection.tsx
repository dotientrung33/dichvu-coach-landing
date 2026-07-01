import { coachingContent } from "@/data/coachingContent";

export default function JourneySection() {
  const { journey } = coachingContent;

  return (
    <section id="hanh-trinh" className="dark-section py-10 text-white sm:py-12 lg:py-14">
      <div className="section-shell">
        <div className="mb-6 w-full">
          <h2 className="text-[26px] font-semibold leading-tight text-white sm:text-[32px]">
            {journey.title}
          </h2>
        </div>

        <div className="rounded-[24px] border border-[rgba(0,163,255,0.18)] bg-[#071B3F]/64 px-5 py-5 shadow-[0_16px_42px_rgba(0,0,0,0.20)] sm:px-6">
          <div className="hidden items-center justify-between gap-3 lg:flex">
            {journey.steps.map((step, index) => (
              <div key={step.title} className="flex min-w-0 flex-1 items-center gap-3">
                <span className="text-sm font-bold text-gold-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="truncate text-[15px] font-semibold leading-6 text-[#EAF2FF] xl:text-[16px]">
                  {step.title}
                </span>
                {index < journey.steps.length - 1 ? (
                  <span className="ml-auto shrink-0 text-xl leading-none text-gold-400">→</span>
                ) : null}
              </div>
            ))}
          </div>

          <div className="space-y-3 lg:hidden">
            {journey.steps.map((step, index) => (
              <div key={step.title}>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-400/35 bg-[#04122C] text-xs font-bold text-gold-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[16px] font-semibold leading-6 text-[#EAF2FF]">
                    {step.title}
                  </p>
                </div>
                {index < journey.steps.length - 1 ? (
                  <div className="ml-4 mt-2 h-4 w-px bg-gold-400/35" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
