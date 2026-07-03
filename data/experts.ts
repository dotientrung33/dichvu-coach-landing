export type Expert = {
  id: string;
  isActive: boolean;
  name: string;
  alias?: string;
  role: string;
  badge?: string;
  image: string;
  imageAlt: string;
  description: string;
  tags: string[];
  coachingStyle: string;
  specialties: string[];
  credentials: string[];
  bullets: string[];
};

export const experts: Expert[] = [
  {
    id: "do-tien-trung",
    isActive: true,
    name: "Đỗ Tiến Trung",
    alias: "Mr. Thấu Hiểu",
    role: "Trainer | Leadership & Relationship Coach",
    badge: "Lead Coach",
    image: "/images/coaching/expert/trung-profile.jpg",
    imageAlt: "Đỗ Tiến Trung - Mr. Thấu Hiểu",
    description:
      "Người trực tiếp thiết kế hành trình Coaching của Mr. Thấu Hiểu, đồng hành cùng khách hàng trong quá trình thấu hiểu bản thân, chữa lành cảm xúc và cải thiện chất lượng các mối quan hệ.\n\nKết hợp Coaching, Numerology và trải nghiệm đào tạo thực tế để giúp khách hàng nhìn rõ vấn đề, tìm lại sự cân bằng và tạo ra những thay đổi phù hợp trong cuộc sống.",
    tags: [
      "Coaching cá nhân",
      "Relationship Coach",
      "Numerology ứng dụng",
      "Healing Mentor",
    ],
    coachingStyle: "",
    specialties: [],
    credentials: [],
    bullets: [
      "Gần 20 năm kinh nghiệm trong CNTT, tư vấn dịch vụ, đào tạo, huấn luyện và Coaching",
      "Hơn 500 học viên đã tham gia các chương trình đào tạo",
      "Hàng trăm khách hàng cá nhân đã lựa chọn đồng hành",
      "Kết hợp Coaching, NLP, DISC, MBTI, Numerology và Ho'oponopono",
    ],
  },
  {
    id: "tran-quynh-chi",
    isActive: true,
    name: "Trần Quỳnh Chi",
    role: "Personal Coach",
    image: "/images/coaching/expert/tran-quynh-chi.jpg",
    imageAlt: "Trần Quỳnh Chi",
    description:
      "Đồng hành trong các hoạt động Coaching, đào tạo và hỗ trợ khách hàng phát triển bản thân, duy trì năng lượng tích cực trong hệ sinh thái Mr. Thấu Hiểu.\n\nTập trung vào việc lắng nghe, kết nối nội tâm và giúp khách hàng xây dựng sự rõ ràng hơn trong cảm xúc, lựa chọn cá nhân và các mối quan hệ.",
    tags: [
      "Đồng hành Coaching",
      "Phát triển cá nhân",
      "Kết nối nội tâm",
      "Chăm sóc khách hàng",
    ],
    coachingStyle: "",
    specialties: [],
    credentials: [],
    bullets: [
      "Đồng hành trong các phiên Coaching và đào tạo",
      "Hỗ trợ khách hàng trong hành trình phát triển cá nhân",
      "Cùng hệ sinh thái Mr. Thấu Hiểu chăm sóc và hỗ trợ khách hàng",
    ],
  },
  {
    id: "nguyen-thi-phuong-thao",
    isActive: true,
    name: "Nguyễn Thị Phương Thảo",
    role: "Transform Coach",
    image: "/images/coaching/expert/Nguyen-thi-phuong-thao.jpg",
    imageAlt: "Nguyễn Thị Phương Thảo",
    description:
      "Đồng hành cùng khách hàng trong hành trình chuyển hóa tư duy, nâng cao hiệu suất cá nhân và tạo ra những thay đổi thực tế trong công việc, cuộc sống và mục tiêu phát triển.\n\nTập trung hỗ trợ khách hàng nhận diện điểm nghẽn bên trong, xây dựng sự chủ động và duy trì trạng thái hành động bền vững hơn.",
    tags: [
      "Transform Coach",
      "Nâng cao hiệu suất",
      "Chuyển hóa tư duy",
      "Hành động bền vững",
    ],
    coachingStyle: "",
    specialties: [],
    credentials: [],
    bullets: [
      "Đồng hành trong hành trình chuyển hóa tư duy và phát triển cá nhân",
      "Hỗ trợ khách hàng nâng cao hiệu suất trong công việc và cuộc sống",
      "Tập trung vào hành động thực tế và sự bền vững sau Coaching",
    ],
  },
];
