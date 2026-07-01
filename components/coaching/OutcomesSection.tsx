import { coachingContent } from "@/data/coachingContent";
import ImageWithFallback from "./ImageWithFallback";

const outcomesImage = {
  src: "/images/coaching/expert/coaching-benefits.jpg",
  alt: "Coaching giúp bạn nhìn rõ vấn đề và hướng đi",
};

export default function OutcomesSection() {
  const { outcomes } = coachingContent;

  return (
    <section className="dark-section py-12 text-white sm:py-16 lg:py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
        <div className="electric-card overflow-hidden rounded-[24px] p-3">
          <ImageWithFallback
            src={outcomesImage.src}
            alt={outcomesImage.alt}
            className="aspect-[5/4] w-full rounded-[20px] object-cover object-center"
            fallbackClassName="aspect-[5/4] w-full"
          />
        </div>

        <div>
          <h2 className="text-[28px] font-semibold leading-tight text-white sm:text-[36px]">
            {outcomes.title}
          </h2>
          <p className="mt-4 w-full text-[17px] leading-8 text-[#EAF2FF] sm:text-[19px]">
            {outcomes.description}
          </p>
          <ul className="mt-6 space-y-3.5 text-[16px] leading-7 text-[#EAF2FF] sm:text-[17px]">
            {outcomes.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold-400/35 bg-gold-400/10 text-[11px] font-bold text-gold-400">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
