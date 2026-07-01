import { certificates } from "@/data/certificates";
import { coachingContent } from "@/data/coachingContent";
import ImageWithFallback from "./ImageWithFallback";

export default function CertificatesSection() {
  const { certificates: certificateContent } = coachingContent;
  const featuredCertificates = certificates.slice(0, 4);

  return (
    <section
      className="py-12 text-white sm:py-16 lg:py-[76px]"
      style={{
        background:
          "radial-gradient(circle at 16% 18%, rgba(0,163,255,0.16), transparent 28%), linear-gradient(135deg, #04122C 0%, #072A63 45%, #04122C 100%)",
      }}
    >
      <div className="section-shell">
        <div className="mb-8 w-full">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold-400">
            {certificateContent.eyebrow}
          </p>
          <h2 className="mt-4 text-[28px] font-semibold leading-tight text-white sm:text-[36px]">
            {certificateContent.title}
          </h2>
          <p className="mt-4 w-full text-[17px] leading-8 text-[#EAF2FF] sm:text-[18px]">
            {certificateContent.description}
          </p>
        </div>

        <div className="certificates-grid">
          {featuredCertificates.map((certificate) => (
            <article
              key={certificate.title}
              className="flex h-full flex-col rounded-[20px] border border-[rgba(0,163,255,0.18)] bg-[linear-gradient(180deg,#071B3F_0%,#04122C_100%)] p-4 text-center shadow-[0_16px_40px_rgba(0,0,0,0.22)] transition duration-200 ease-out hover:-translate-y-[3px] hover:border-[rgba(245,199,106,0.38)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.30),0_0_20px_rgba(0,163,255,0.12)] sm:p-5"
            >
              <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-[#F8FAFC] p-2.5 sm:p-3">
                <ImageWithFallback
                  src={certificate.image}
                  alt={certificate.alt}
                  className="h-full w-full rounded-lg object-contain"
                  fallbackClassName="h-full w-full"
                />
              </div>
              <h3 className="mt-4 text-center text-[16px] font-bold leading-6 text-[#EAF2FF] sm:text-[17px]">
                {certificate.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
