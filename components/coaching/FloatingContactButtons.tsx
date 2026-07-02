import { coachingContent } from "@/data/coachingContent";
import { contactInfo } from "@/data/contact";

const contactButtons = [
  {
    label: coachingContent.contactButtons.zalo,
    href: contactInfo.zaloUrl,
    icon: contactInfo.icons.zalo,
    alt: "Zalo",
    ariaLabel: "Chat Zalo",
    className: "border-gold-400/30 bg-[#020817]/88 text-gold-400 shadow-glow",
  },
  {
    label: coachingContent.contactButtons.messenger,
    href: contactInfo.messengerUrl,
    icon: contactInfo.icons.messenger,
    alt: "Messenger",
    ariaLabel: "Nhắn Messenger",
    className: "border-[rgba(0,163,255,0.22)] bg-[#071B3F]/85 text-white shadow-blueGlow",
  },
  {
    label: coachingContent.contactButtons.facebook,
    href: contactInfo.facebookUrl,
    icon: contactInfo.icons.facebook,
    alt: "Facebook",
    ariaLabel: "Theo dõi Fanpage Mr. Thấu Hiểu",
    className: "border-[rgba(245,199,106,0.24)] bg-[#04122C]/90 text-white shadow-blueGlow",
  },
];

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-24 right-4 z-40 flex flex-col gap-3">
      {contactButtons.map((button) => (
        <a
          key={button.href}
          href={button.href}
          aria-label={button.ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex h-12 w-12 items-center justify-center rounded-full border text-sm font-bold backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-gold-400/45 hover:bg-gold-300/10 md:h-auto md:w-[190px] md:justify-start md:gap-2.5 md:px-5 md:py-3 ${button.className}`}
        >
          <img
            src={button.icon}
            alt={button.alt}
            width={22}
            height={22}
            className="h-[22px] w-[22px] shrink-0 object-contain"
          />
          <span className="sr-only md:not-sr-only md:whitespace-nowrap">{button.label}</span>
        </a>
      ))}
    </div>
  );
}
