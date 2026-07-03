import ExpertTrustSection from "@/components/coaching/ExpertTrustSection";
import CertificatesSection from "@/components/coaching/CertificatesSection";
import ClosingMessageSection from "@/components/coaching/ClosingMessageSection";
import CommunityGallerySection from "@/components/coaching/CommunityGallerySection";
import FAQRegisterSection from "@/components/coaching/FAQRegisterSection";
import FloatingContactButtons from "@/components/coaching/FloatingContactButtons";
import Footer from "@/components/coaching/Footer";
import Header from "@/components/coaching/Header";
import Hero from "@/components/coaching/Hero";
import MapTools from "@/components/coaching/MapTools";
import OutcomesSection from "@/components/coaching/OutcomesSection";
import PackageSummary from "@/components/coaching/PackageSummary";

export const metadata = {
  title: "Dịch vụ Coaching cùng Mr. Thấu Hiểu",
  description:
    "Landing page bán dịch vụ Coaching 1-1 cùng Mr. Thấu Hiểu, kết hợp Bản đồ Thấu hiểu Con người và các gói đồng hành cá nhân hóa.",
};

export default function CoachingLandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020817] pt-[72px] text-[#EAF2FF]">
      <Header />
      <Hero />
      <OutcomesSection />
      <PackageSummary />
      <MapTools />
      <ExpertTrustSection />
      <CertificatesSection />
      <CommunityGallerySection />
      <FAQRegisterSection />
      <ClosingMessageSection />
      <FloatingContactButtons />
      <Footer />
    </main>
  );
}
