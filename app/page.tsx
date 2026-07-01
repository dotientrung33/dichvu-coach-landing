import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-navy-950 px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.28em] text-gold-300">
          Mr. Thấu Hiểu
        </p>
        <h1 className="text-4xl font-semibold sm:text-5xl">
          Dịch vụ Coaching
        </h1>
        <p className="mt-5 text-white/70">
          Trang chủ tạm thời. Truy cập landing page coaching để xem layout mới.
        </p>
        <Link
          href="/dich-vu-coaching"
          className="mt-8 inline-flex rounded-full bg-gold-400 px-6 py-3 font-semibold text-navy-950 transition hover:bg-gold-300"
        >
          Xem landing page
        </Link>
      </div>
    </main>
  );
}
