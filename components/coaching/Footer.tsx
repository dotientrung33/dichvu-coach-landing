import { coachingContent } from "@/data/coachingContent";
import { contactInfo } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,163,255,0.18)] bg-[#020817] pb-24 pt-10 md:pb-10">
      <div className="section-shell flex flex-col justify-between gap-5 text-sm text-[#AFC2E6] lg:flex-row lg:items-center">
        <p>{coachingContent.footer.copyright}</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
          <a href={contactInfo.phoneHref} className="inline-flex items-center gap-2 transition hover:text-gold-300">
            <img
              src={contactInfo.icons.phone}
              alt="Phone"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
            {contactInfo.phone}
          </a>
          <a href={contactInfo.emailHref} className="inline-flex items-center gap-2 transition hover:text-gold-300">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
            </svg>
            {contactInfo.email}
          </a>
          <a
            href={contactInfo.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-gold-300"
          >
            <img
              src={contactInfo.icons.zalo}
              alt="Zalo"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
            Zalo
          </a>
          <a
            href={contactInfo.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-gold-300"
          >
            <img
              src={contactInfo.icons.facebook}
              alt="Facebook"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
            Fanpage
          </a>
          <a
            href={contactInfo.messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-gold-300"
          >
            <img
              src={contactInfo.icons.messenger}
              alt="Messenger"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
            Messenger
          </a>
          <span>{contactInfo.address}</span>
        </div>
      </div>
    </footer>
  );
}
