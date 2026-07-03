import { experts } from "@/data/experts";
import ImageWithFallback from "./ImageWithFallback";

const sectionContent = {
  eyebrow: "CHUYÊN GIA ĐỒNG HÀNH",
  title: "Đội ngũ chuyên gia đồng hành",
  description:
    "Mỗi khách hàng có một vấn đề và trạng thái khác nhau. Vì vậy, quá trình Coaching không chỉ dựa vào một góc nhìn duy nhất, mà được hỗ trợ bởi đội ngũ chuyên gia phù hợp trong các lĩnh vực thấu hiểu bản thân, mối quan hệ, cảm xúc và phát triển cá nhân.",
  methodCard: {
    title: "Một đội ngũ, nhiều góc nhìn, cùng một mục tiêu",
    description: [
      "Chúng tôi đồng hành để giúp bạn hiểu rõ hơn điều đang diễn ra bên trong mình, nhìn lại các mô thức trong mối quan hệ, nhận diện cảm xúc và tìm ra hướng đi phù hợp hơn.",
      "Mục tiêu của Coaching không phải là khiến bạn phụ thuộc vào chuyên gia, mà giúp bạn rõ ràng hơn, vững vàng hơn và có khả năng tự lựa chọn tốt hơn.",
    ],
    trustPoints: [
      "Lắng nghe không phán xét",
      "Soi chiếu bằng nhiều góc nhìn",
      "Tập trung vào thay đổi thực tế",
    ],
  },
};

function MethodCard() {
  return (
    <article className="order-1 flex h-full flex-col rounded-[28px] border border-[rgba(0,163,255,0.18)] bg-[rgba(4,18,44,0.62)] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] sm:p-7 lg:order-1">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-300">
        Phương pháp đồng hành
      </p>
      <h3 className="mt-4 text-[22px] font-semibold leading-tight text-white md:text-[24px] lg:text-[28px]">
        {sectionContent.methodCard.title}
      </h3>

      <div className="mt-5 space-y-4 text-[16px] leading-8 text-[#EAF2FF] sm:text-[17px]">
        {sectionContent.methodCard.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <div className="grid gap-3">
          {sectionContent.methodCard.trustPoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 rounded-2xl border border-[rgba(245,199,106,0.20)] bg-[rgba(255,255,255,0.045)] px-4 py-3 text-[15px] font-semibold leading-6 text-[#EAF2FF]"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-gold-400" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function ExpertCard({
  expert,
  featured = false,
  className = "",
}: {
  expert: (typeof experts)[number];
  featured?: boolean;
  className?: string;
}) {
  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-[28px] border bg-[linear-gradient(180deg,#071B3F_0%,#04122C_100%)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.30),0_0_20px_rgba(0,163,255,0.10)] sm:p-7 ${
        featured
          ? "border-[rgba(245,199,106,0.42)]"
          : "border-[rgba(0,163,255,0.18)] hover:border-[rgba(245,199,106,0.35)]"
      } ${className}`}
    >
      <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_132px] sm:items-start lg:grid-cols-[minmax(0,1fr)_144px]">
        <div className="min-w-0">
          {expert.badge ? (
            <span className="inline-flex rounded-full border border-gold-300/30 bg-gold-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-gold-300">
              {expert.badge}
            </span>
          ) : null}

          <h3 className="mt-4 text-[22px] font-semibold leading-tight text-white md:text-[24px] lg:text-[28px]">
            {expert.name}
          </h3>
          {expert.alias ? (
            <p className="mt-1 text-[18px] font-semibold leading-7 text-gold-300">
              {expert.alias}
            </p>
          ) : null}
          <p className="mt-3 text-[15px] font-semibold leading-6 text-gold-400 sm:text-[16px]">
            {expert.role}
          </p>
        </div>

        <div className="justify-self-start overflow-hidden rounded-[22px] border border-white/10 bg-[#04122C] p-2 shadow-[0_12px_30px_rgba(0,0,0,0.25)] sm:justify-self-end">
          <ImageWithFallback
            src={expert.image}
            alt={expert.imageAlt}
            className={`rounded-[18px] object-cover object-center ${
              featured
                ? "h-[176px] w-[140px] sm:h-[190px] sm:w-[150px]"
                : "h-[164px] w-[132px] sm:h-[176px] sm:w-[140px]"
            }`}
            fallbackClassName={
              featured
                ? "h-[176px] w-[140px] sm:h-[190px] sm:w-[150px]"
                : "h-[164px] w-[132px] sm:h-[176px] sm:w-[140px]"
            }
          />
        </div>
      </div>

      <p className="mt-5 text-[16px] leading-7 text-[#EAF2FF] sm:text-[17px]">
        {expert.description}
      </p>

      {expert.tags.length > 0 ? (
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {expert.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[rgba(0,163,255,0.20)] bg-[rgba(0,163,255,0.08)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#DCE8FF]"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function ExpertTrustSection() {
  const activeExperts = experts.filter((expert) => expert.isActive);
  const leadExpert = activeExperts.find((expert) => expert.id === "do-tien-trung") ?? activeExperts[0];
  const supportingExperts = activeExperts.filter((expert) => expert.id !== leadExpert?.id);

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
            {sectionContent.eyebrow}
          </p>
          <h2 className="mt-4 text-[28px] font-semibold leading-tight text-white md:text-[32px] lg:text-[36px]">
            {sectionContent.title}
          </h2>
          <p className="mt-4 w-full text-[17px] leading-8 text-[#DCE8FF] sm:text-[18px]">
            {sectionContent.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-7">
          {leadExpert ? (
            <ExpertCard
              expert={leadExpert}
              featured
              className="order-2 lg:order-2"
            />
          ) : null}
          <MethodCard />
          {supportingExperts.slice(0, 2).map((expert, index) => (
            <ExpertCard
              key={expert.id}
              expert={expert}
              className={index === 0 ? "order-3" : "order-4"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
