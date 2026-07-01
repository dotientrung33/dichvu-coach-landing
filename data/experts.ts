export type Expert = {
  id: string;
  isActive: boolean;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  description: string;
  coachingStyle: string;
  specialties: string[];
  credentials: string[];
  bullets: string[];
};

export const experts: Expert[] = [
  {
    id: "do-tien-trung",
    isActive: true,
    name: "Đỗ Tiến Trung – Mr. Thấu Hiểu",
    role: "Trainer | Leadership & Relationship Coach",
    image: "/images/coaching/expert/trung-profile.jpg",
    imageAlt: "Đỗ Tiến Trung – Mr. Thấu Hiểu",
    description:
      "Đồng hành cùng cá nhân, gia đình và đội nhóm trong hành trình thấu hiểu bản thân, phát triển mối quan hệ và nâng cao hiệu suất từ sự thấu hiểu.",
    coachingStyle: "",
    specialties: [],
    credentials: [],
    bullets: [
      "Gần 20 năm kinh nghiệm trong CNTT, tư vấn dịch vụ, đào tạo, huấn luyện và Coaching",
      "Hơn 500 học viên đã tham gia các chương trình đào tạo",
      "Hàng trăm khách hàng cá nhân đã lựa chọn đồng hành",
      "Kết hợp Coaching, NLP, DISC, MBTI, Numerology và Ho’oponopono",
    ],
  },
  {
    id: "tran-quynh-chi",
    isActive: true,
    name: "Trần Quỳnh Chi",
    role: "Chuyên gia đồng hành",
    image: "/images/coaching/expert/tran-quynh-chi.jpg",
    imageAlt: "Trần Quỳnh Chi",
    description:
      "Đồng hành trong các hoạt động Coaching, đào tạo và hỗ trợ khách hàng phát triển bản thân trong hệ sinh thái Mr. Thấu Hiểu.",
    coachingStyle: "",
    specialties: [],
    credentials: [],
    bullets: [
      "Đồng hành trong các phiên Coaching và đào tạo",
      "Hỗ trợ khách hàng trong hành trình phát triển cá nhân",
      "Cùng hệ sinh thái Mr. Thấu Hiểu chăm sóc và hỗ trợ khách hàng",
    ],
  },
];
