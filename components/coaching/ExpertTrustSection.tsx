import { coachingContent } from "@/data/coachingContent";
import { experts } from "@/data/experts";
import ImageWithFallback from "./ImageWithFallback";

function ExpertBullets({ items }: { items: string[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className="mt-4 space-y-3 text-[16px] leading-7 text-[#EAF2FF] sm:text-[17px]">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ExpertTrustSection() {
  const { experts: expertContent } = coachingContent;
  const activeExperts = experts.filter((expert) => expert.isActive);

  return (
    <section
      id="chuyen-gia"
      className="py-12 text-white sm:py-16 lg:py-20"
      style={{
        background:
          "radial-gradient(circle at 82% 16%, rgba(0,163,255,0.18), transparent 30%), linear-gradient(135deg, #04122C 0%, #072A63 45%, #04122C 100%)",
      }}
    >
      <div className="section-shell">
        <div className="mb-9 w-full">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold-400">
            {expertContent.eyebrow}
          </p>
          <h2 className="mt-4 text-[30px] font-semibold leading-tight text-white sm:text-[38px]">
            {expertContent.title}
          </h2>
          <p className="mt-4 w-full text-[17px] leading-8 text-[#DCE8FF] sm:text-[18px]">
            {expertContent.description}
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2 lg:gap-10">
          {activeExperts.map((expert) => (
            <article
              key={expert.id}
              className="relative rounded-[28px] border border-[rgba(0,163,255,0.18)] bg-[linear-gradient(180deg,#071B3F_0%,#04122C_100%)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition duration-200 hover:-translate-y-1 hover:border-[rgba(245,199,106,0.35)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.30),0_0_20px_rgba(0,163,255,0.10)] sm:p-7"
            >
              <div className="grid min-h-[132px] grid-cols-[minmax(0,1fr)_112px] gap-4 sm:min-h-[146px] sm:grid-cols-[minmax(0,1fr)_140px] sm:gap-5">
                <div className="min-w-0 self-start pr-1">
                  <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-[24px] font-semibold leading-[1.08] text-white sm:text-[30px] lg:text-[25px] xl:text-[27px]">
                    {expert.name}
                  </h3>
                  <p className="mt-3 overflow-hidden text-ellipsis whitespace-nowrap text-[15px] font-semibold leading-6 text-gold-400 sm:text-[18px] lg:text-[15px] xl:text-[16px]">
                    {expert.role}
                  </p>
                </div>

                <div
                  className="relative -mt-7 justify-self-end overflow-hidden rounded-[22px] border border-white/10 bg-[#04122C] p-2 shadow-[0_12px_30px_rgba(0,0,0,0.25)] sm:-mt-9"
                >
                  <ImageWithFallback
                    src={expert.image}
                    alt={expert.imageAlt}
                    className="h-[144px] w-[112px] rounded-[18px] object-cover object-center sm:h-[176px] sm:w-[140px]"
                    fallbackClassName="h-[144px] w-[112px] sm:h-[176px] sm:w-[140px]"
                  />
                </div>
              </div>

              <div className="mt-5 rounded-[20px] border border-[rgba(0,163,255,0.14)] bg-[rgba(0,163,255,0.06)] p-5">
                <p className="text-[16px] leading-7 text-[#EAF2FF] sm:text-[17px]">
                  {expert.description}
                </p>
              </div>

              <div className="mt-4 rounded-[20px] border border-[rgba(0,163,255,0.14)] bg-[rgba(255,255,255,0.035)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-300">
                  {expertContent.credentialsLabel}
                </p>
                <ExpertBullets items={expert.bullets} />
                {expert.coachingStyle ? (
                  <p className="mt-5 text-[17px] leading-8 text-[#EAF2FF]">
                    {expert.coachingStyle}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
