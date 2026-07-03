export default function ClosingMessageSection() {
  return (
    <section
      className="border-t border-[rgba(0,163,255,0.16)] py-10 text-white sm:py-12 lg:py-14"
      style={{
        background:
          "radial-gradient(circle at 78% 18%, rgba(0,163,255,0.14), transparent 28%), linear-gradient(180deg, #04122C 0%, #020817 100%)",
      }}
    >
      <div className="section-shell">
        <div className="max-w-4xl">
          <h2 className="text-[28px] font-semibold leading-tight text-white md:text-[32px] lg:text-[36px]">
            Bạn không cần phải tự xoay xở một mình
          </h2>
          <p className="mt-4 text-[16px] leading-8 text-[#EAF2FF] sm:text-[18px]">
            Khi bạn sẵn sàng nhìn lại điều đang diễn ra bên trong mình, một cuộc trò chuyện đúng lúc có thể giúp bạn rõ ràng hơn, nhẹ lòng hơn và biết mình nên bắt đầu từ đâu.
          </p>
          <p className="mt-4 text-[16px] font-semibold leading-8 text-gold-300/85 sm:text-[17px]">
            Mr. Thấu Hiểu và đội ngũ chuyên gia đồng hành luôn sẵn sàng lắng nghe khi bạn cần một không gian đủ an toàn để bắt đầu.
          </p>
        </div>
      </div>
    </section>
  );
}
