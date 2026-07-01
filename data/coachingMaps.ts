export type CoachingMap = {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  image: string;
  alt: string;
};

export const coachingMaps: CoachingMap[] = [
  {
    title: "Map For Success",
    subtitle: "Thấu hiểu bản thân - Làm chủ cuộc đời",
    description:
      "Map For Success là hệ thống Bản đồ Thấu hiểu Con người giúp bạn khám phá sâu hơn về chính mình thông qua 21 chỉ số quan trọng.",
    bullets: [
      "Hiểu điểm mạnh và tiềm năng nổi bật",
      "Nhìn rõ động lực bên trong",
      "Hiểu phong cách tư duy và hành động",
      "Nhận diện các bài học và thách thức",
      "Xác định định hướng phát triển phù hợp",
      "Xây dựng lộ trình phát triển cá nhân hiệu quả",
    ],
    image: "/images/coaching/maps/map-for-success.jpg",
    alt: "Map For Success",
  },
  {
    title: "Relationship Map",
    subtitle: "Thấu hiểu mối quan hệ - Kết nối đúng cách",
    description:
      "Relationship Map giúp hai người hiểu nhau sâu sắc hơn thông qua góc nhìn về tính cách, nhu cầu cảm xúc, phong cách giao tiếp và các khác biệt trong mối quan hệ.",
    bullets: [
      "Hiểu nhu cầu cảm xúc của nhau",
      "Nhận diện nguyên nhân xung đột",
      "Cải thiện giao tiếp",
      "Gia tăng sự đồng cảm",
      "Xây dựng kết nối bền vững hơn",
      "Đồng hành cùng nhau hiệu quả hơn",
    ],
    image: "/images/coaching/maps/relationship-map.jpg",
    alt: "Relationship Map",
  },
  {
    title: "Career Map",
    subtitle: "Định hướng nghề nghiệp - Nâng tầm hiệu suất",
    description:
      "Career Map giúp bạn nhìn rõ hơn về năng lực nổi trội, môi trường phù hợp và định hướng nghề nghiệp phù hợp với chính mình.",
    bullets: [
      "Hiểu thế mạnh nghề nghiệp",
      "Xác định môi trường phù hợp",
      "Tìm ra hướng phát triển dài hạn",
      "Tăng hiệu suất làm việc",
      "Nâng cao khả năng ra quyết định",
      "Phát huy tối đa tiềm năng cá nhân",
    ],
    image: "/images/coaching/maps/career-map.jpg",
    alt: "Career Map",
  },
  {
    title: "Kid Talent Map",
    subtitle: "Thấu hiểu con - Đồng hành đúng hướng",
    description:
      "Kid Talent Map giúp cha mẹ hiểu cách con đang học tập, phát triển và tiếp nhận thế giới xung quanh.",
    bullets: [
      "Hiểu phong cách học tập của con",
      "Nhận diện năng khiếu nổi bật",
      "Hiểu nhu cầu phát triển theo từng giai đoạn",
      "Đồng hành cùng con hiệu quả hơn",
      "Giảm áp lực trong quá trình nuôi dạy",
      "Tạo môi trường phù hợp để con phát triển",
    ],
    image: "/images/coaching/maps/kid-talent-map.jpg",
    alt: "Kid Talent Map",
  },
];
