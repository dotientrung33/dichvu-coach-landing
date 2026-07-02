"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      router.push("/dich-vu-coaching");
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [router]);

  return (
    <main className="dark-section flex min-h-screen items-center justify-center overflow-hidden px-6 py-10 text-white">
      <section className="w-full max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-gold-300">
          MR. THẤU HIỂU
        </p>
        <h1 className="mt-5 text-[38px] font-semibold leading-tight text-white sm:text-[54px]">
          Dịch vụ Coaching
        </h1>
        <p className="mt-5 text-[18px] leading-8 text-[#EAF2FF] sm:text-[20px]">
          Chào mừng bạn đến với hệ sinh thái Mr. Thấu Hiểu.
        </p>
        <p className="mt-4 text-[20px] font-semibold leading-8 text-gold-300 sm:text-[24px]">
          Hiểu mình để kiến tạo hạnh phúc & nâng tầm hiệu suất.
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-8 text-[#AFC2E6] sm:text-[18px]">
          Tôi đồng hành cùng cá nhân, gia đình và đội nhóm thông qua Coaching,
          đào tạo và các công cụ thấu hiểu con người.
        </p>
        <p className="mt-7 text-sm font-semibold text-[#AFC2E6]">
          Bạn sẽ được chuyển đến trang Dịch vụ Coaching sau vài giây.
        </p>
        <button
          type="button"
          onClick={() => router.push("/dich-vu-coaching")}
          className="gold-button mt-8 rounded-full px-7 py-3.5 text-sm sm:text-base"
        >
          Xem dịch vụ Coaching
        </button>
      </section>
    </main>
  );
}
