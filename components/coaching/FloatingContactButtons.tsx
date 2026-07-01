import { coachingContent } from "@/data/coachingContent";
import { contactInfo } from "@/data/contact";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-24 right-4 z-40 hidden flex-col gap-3 md:flex">
      <a
        href={contactInfo.zaloUrl}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-gold-400/30 bg-[#020817]/88 px-5 py-3 text-sm font-bold text-gold-400 shadow-glow backdrop-blur-xl transition hover:scale-[1.03]"
      >
        {coachingContent.contactButtons.zalo}
      </a>
      <a
        href={contactInfo.facebookUrl}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-[rgba(0,163,255,0.22)] bg-[#071B3F]/85 px-5 py-3 text-sm font-bold text-white shadow-blueGlow backdrop-blur-xl transition hover:scale-[1.03] hover:border-gold-400/35"
      >
        {coachingContent.contactButtons.facebook}
      </a>
    </div>
  );
}
