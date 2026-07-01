import { coachingContent } from "@/data/coachingContent";

export default function UnderstandingJourneySection() {
  const { understandingJourney } = coachingContent;
  const options = understandingJourney.options ?? understandingJourney.stages.map((stage) => stage.title);

  return (
    <section className="dark-section py-11 text-white sm:py-14 lg:py-[56px]">
      <div className="section-shell">
        <div className="w-full">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold-400">
            {understandingJourney.eyebrow}
          </p>
          <h2 className="mt-3 text-[28px] font-semibold leading-tight text-white sm:text-[36px] lg:text-[38px]">
            {understandingJourney.title}
          </h2>
          <p className="mt-4 w-full text-[17px] leading-8 text-[#EAF2FF] sm:text-[18px]">
            {understandingJourney.subheading}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {options.map((option) => (
            <span
              key={option}
              className="rounded-full border border-[rgba(0,163,255,0.22)] bg-[#04122C]/70 px-4 py-2 text-sm font-semibold text-[#EAF2FF] transition hover:border-gold-400/45 hover:text-gold-400"
            >
              {option}
            </span>
          ))}
        </div>

        <a
          href="#goi-coach"
          className="gold-button mt-6 inline-flex rounded-full px-6 py-3 text-sm font-bold"
        >
          {understandingJourney.cta}
        </a>
      </div>
    </section>
  );
}
