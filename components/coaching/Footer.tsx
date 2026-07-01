import { coachingContent } from "@/data/coachingContent";
import { contactInfo } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,163,255,0.18)] bg-[#020817] pb-24 pt-10 md:pb-10">
      <div className="section-shell flex flex-col justify-between gap-5 text-sm text-[#AFC2E6] lg:flex-row lg:items-center">
        <p>{coachingContent.footer.copyright}</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
          <a href={`tel:${contactInfo.phone}`} className="transition hover:text-gold-300">
            {contactInfo.phone}
          </a>
          <a href={`mailto:${contactInfo.email}`} className="transition hover:text-gold-300">
            {contactInfo.email}
          </a>
          <span>{contactInfo.address}</span>
        </div>
      </div>
    </footer>
  );
}
