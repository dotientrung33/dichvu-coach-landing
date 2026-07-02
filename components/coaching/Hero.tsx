import { coachingContent } from "@/data/coachingContent";
import ImageWithFallback from "./ImageWithFallback";

export default function Hero() {
  const { hero } = coachingContent;

  return (
    <section id="tong-quan" className="dark-section relative overflow-hidden py-14 text-white sm:py-[72px] lg:py-[92px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,163,255,0.24),transparent_30%),radial-gradient(circle_at_18%_82%,rgba(0,75,180,0.32),transparent_34%)]" />
      <div className="section-shell relative grid items-center gap-9 lg:grid-cols-[minmax(0,1.42fr)_minmax(320px,0.9fr)]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-4xl font-[var(--font-playfair-display)] text-[34px] font-bold leading-[1.15] tracking-normal text-white sm:text-[42px] sm:leading-[1.12] lg:text-[50px] lg:leading-[1.1]">
            {hero.title}
          </h1>
          {hero.subheadline ? (
            <p className="mt-5 max-w-3xl text-[19px] font-semibold leading-[1.5] text-gold-300 sm:text-[22px]">
              {hero.subheadline}
            </p>
          ) : null}
          <p className="mt-5 max-w-3xl text-[16px] leading-7 text-[#EAF2FF] sm:text-[18px] sm:leading-8">
            {hero.description}
          </p>
          {hero.trustLine ? (
            <p className="mt-3 max-w-3xl text-[15px] font-semibold leading-7 text-gold-300/85 sm:text-[16px]">
              {hero.trustLine}
            </p>
          ) : null}
          {hero.supportLine ? (
            <p className="mt-3 max-w-3xl text-[15px] leading-7 text-white/62 sm:text-base">
              {hero.supportLine}
            </p>
          ) : null}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#dang-ky"
              className="gold-button rounded-full px-7 py-3.5 text-center"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#goi-coach"
              className="outline-button rounded-full px-7 py-3.5 text-center font-semibold"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[24px] border border-[rgba(0,163,255,0.18)] bg-[#071B3F]/70 p-3 sm:p-4 shadow-premium">
            <ImageWithFallback
              src={hero.image.src}
              alt={hero.image.alt}
              className="h-[320px] w-full rounded-[20px] object-cover object-center sm:h-[360px] lg:h-[390px]"
              fallbackClassName="h-[250px] sm:h-[300px] lg:h-[330px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
