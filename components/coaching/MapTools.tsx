import { coachingContent } from "@/data/coachingContent";
import { coachingMaps } from "@/data/coachingMaps";
import ImageWithFallback from "./ImageWithFallback";

export default function MapTools() {
  const { maps } = coachingContent;

  return (
    <section className="dark-section py-12 text-white sm:py-16 lg:py-20">
      <div className="section-shell">
        <div className="mb-8 w-full">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold-400">
            {maps.eyebrow}
          </p>
          <h2 className="mt-4 text-[28px] font-semibold leading-tight text-white sm:text-[36px]">
            {maps.title}
          </h2>
          {maps.subheading ? (
            <p className="mt-4 w-full text-[18px] font-semibold leading-8 text-gold-300 sm:text-[19px]">
              {maps.subheading}
            </p>
          ) : null}
          <p className="mt-4 w-full text-[18px] font-semibold leading-8 text-[#EAF2FF] sm:text-[19px]">
            {maps.intro}
          </p>
          <p className="mt-4 w-full text-[17px] leading-8 text-[#EAF2FF] sm:text-[18px]">
            {maps.description}
          </p>
          <p className="mt-3 w-full text-[17px] leading-8 text-[#EAF2FF] sm:text-[18px]">
            {maps.note}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {coachingMaps.map((map) => (
            <article key={map.title} className="electric-card rounded-[22px] p-5 lg:p-6">
              <ImageWithFallback
                src={map.image}
                alt={map.alt}
                className="mb-5 aspect-[4/3] w-full rounded-xl border border-[rgba(0,163,255,0.18)] bg-[#04122C] object-contain"
                fallbackClassName="mb-5 aspect-[4/3] w-full"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
                {map.subtitle}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">{map.title}</h3>
              <p className="mt-4 text-[15px] leading-6 text-[#EAF2FF]">{map.description}</p>
              <p className="mt-5 text-sm font-semibold text-gold-300">
                {maps.labels.help}
              </p>
              <ul className="mt-3 space-y-2.5 text-[15px] leading-6 text-[#EAF2FF]">
                {map.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
