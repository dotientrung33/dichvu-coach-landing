export type Testimonial = {
  name: string;
  role: string;
  tag: string;
  avatar: string;
  rating: number;
  before: string;
  after: string;
  feeling: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Chị Nguyễn Thu Hà",
    role: "Quản lý Dự án Giáo dục, Viettel Solutions",
    tag: "Coaching đội nhóm",
    avatar: "/images/coaching/testimonials/nguyen-thu-ha.jpg",
    rating: 5,
    before:
      "Gặp nhiều khó khăn trong việc quản lý đội nhóm và cân bằng công việc – cuộc sống.",
    after:
      "Thấu hiểu bản thân hơn, sắp xếp đội nhóm phù hợp và phát huy năng lực từng thành viên.",
    feeling:
      "Nhờ sự đồng hành và khai vấn của Coach Đỗ Tiến Trung, tôi đã có cách nhìn rõ hơn về mình và đội nhóm.",
  },
  {
    name: "Chị Khách Chi",
    role: "Trưởng phòng kinh doanh Manulife Đắk Lắk",
    tag: "Leadership Coaching",
    avatar: "/images/coaching/testimonials/khach-chi.jpg",
    rating: 5,
    before:
      "Khó khăn trong lãnh đạo đội nhóm và mất cân bằng trong cuộc sống.",
    after:
      "Xây dựng được đội nhóm 50 nhân sự và phát triển sự nghiệp bền vững hơn.",
    feeling:
      "sau khi được Coaching và đồng hành tôi đã giáo tiếp với đội ngũ của mình tốt hơn trên nền tảng của sự thấu hiểu!",
  },
  {
    name: "Chị Ngọc Lan",
    role: "Khách hàng cá nhân tại Hà Nội",
    tag: "Coaching cá nhân",
    avatar: "/images/coaching/testimonials/ngoc-lan.jpg",
    rating: 5,
    before:
      "Mang theo những tổn thương cũ và gặp khó khăn trong mối quan hệ với chồng con.",
    after:
      "Hiểu mình hơn, chữa lành được những tổn thương cũ và mối quan hệ gia đình thay đổi tích cực.",
    feeling:
      "Sự đồng hành của thầy Trung giúp tôi thực sự nhìn lại mình và kết nối với gia đình theo cách khác.",
  },
  {
    name: "Anh Phạm Quang",
    role: "Chủ doanh nghiệp SME",
    tag: "Coaching cá nhân và đội nhóm",
    avatar: "/images/coaching/testimonials/pham-quang.jpg",
    rating: 5,
    before:
      "Đội nhóm còn thiếu sự kết nối và phối hợp chưa hiệu quả.",
    after:
      "Nhân sự chủ động hơn, cách phối hợp rõ hơn và doanh số cải thiện rõ rệt.",
    feeling:
      "Buổi coaching đội nhóm cùng anh Trung thực sự thay đổi cách chúng tôi kết nối với nhau.",
  },
  {
    name: "Chị Thanh Mai",
    role: "Leader ngành Bảo hiểm",
    tag: "Relationship Coaching",
    avatar: "/images/coaching/testimonials/thanh-mai.jpg",
    rating: 5,
    before:
      "Có nút thắt cảm xúc bên trong và chưa thật sự tự tin khi dẫn dắt đội nhóm.",
    after:
      "Nhìn ra nút thắt của chính mình và biết cách truyền cảm hứng cho đội nhóm.",
    feeling:
      "Tôi cảm thấy mình mạnh mẽ và tự tin hơn nhiều sau quá trình đồng hành.",
  },
];
