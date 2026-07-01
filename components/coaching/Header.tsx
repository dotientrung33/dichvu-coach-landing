"use client";

import { useEffect, useState } from "react";
import { coachingContent } from "@/data/coachingContent";

export default function Header() {
  const { header, mobileCta, navigation } = coachingContent;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[9999] w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-[rgba(0,163,255,0.18)] bg-[#020817]/88 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "border-[rgba(0,163,255,0.12)] bg-[#020817]/58 backdrop-blur-xl"
        }`}
      >
        <div className="section-shell flex h-[72px] items-center justify-between gap-4">
          <a href="#tong-quan" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/35 bg-gold-400/10 text-sm font-bold text-gold-400 shadow-glow">
              {header.logoText}
            </span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.24em] text-[#AFC2E6]">
                {header.brandEyebrow}
              </span>
              <span className="block text-base font-semibold text-white">
                {header.brandName}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-2 rounded-full border border-[rgba(0,163,255,0.18)] bg-[#071B3F]/55 p-1 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-5 py-2 text-sm font-medium text-white/72 transition hover:bg-gold-300/10 hover:text-gold-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#dang-ky"
            className="gold-button inline-flex rounded-full px-4 py-2.5 text-sm sm:px-5"
          >
            {header.cta}
          </a>
        </div>
      </header>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[rgba(0,163,255,0.18)] bg-[#020817]/92 px-4 py-3 backdrop-blur-2xl md:hidden">
        <div className="mx-auto grid max-w-sm grid-cols-2 gap-3">
          <a
            href="#goi-coach"
            className="rounded-full border border-gold-300/35 px-4 py-3 text-center text-sm font-semibold text-gold-300"
          >
            {mobileCta.packages}
          </a>
          <a
            href="#dang-ky"
            className="gold-button rounded-full px-4 py-3 text-center text-sm"
          >
            {mobileCta.register}
          </a>
        </div>
      </div>
    </>
  );
}
