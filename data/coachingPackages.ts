export type CoachingPackage = {
  id: string;
  isPublic: boolean;
  showOnLanding: boolean;
  showInForm: boolean;
  groupLabel: string;
  name: string;
  badge?: string;
  price: string;
  positioning: string;
  compactAudience: string;
  compactMeta: string;
  detailAudienceTitle: string;
  detailAudienceIntro?: string;
  fitItems: string[];
  includedTitle: string;
  includedItems: string[];
  toolsTitle?: string;
  toolsIntro?: string;
  toolsItems?: string[];
  expectedResultTitle: string;
  expectedResult: string;
  roleTitle?: string;
  role?: string[];
  costTitle?: string;
  costNote?: string[];
  cta: string;
  accent?: boolean;
};

export const coachingPackages: CoachingPackage[] = [
  {
    id: "goi-kham-pha",
    isPublic: true,
    showOnLanding: true,
    showInForm: true,
    groupLabel: "COACHING CÁ NHÂN",
    name: "Gói Khám Phá",
    price: "499.000đ",
    positioning: "Nhìn rõ vấn đề và hướng đi ban đầu",
    compactAudience:
      "Dành cho người đang rối, bế tắc hoặc cần một góc nhìn mới cho vấn đề hiện tại.",
    compactMeta: "01 phiên Coaching 1-1 · 60–90 phút",
    detailAudienceTitle: "Dành cho ai?",
    detailAudienceIntro:
      "Gói Khám Phá dành cho những người đang gặp khó khăn, bế tắc hoặc cần một góc nhìn mới cho vấn đề hiện tại.",
    fitItems: [
      "Đang rối và chưa biết bắt đầu từ đâu",
      "Cần được lắng nghe và soi chiếu vấn đề hiện tại",
      "Đứng trước một quyết định quan trọng",
      "Muốn thử trải nghiệm Coaching trước khi đi sâu hơn",
      "Cần xác định bước đi đầu tiên phù hợp",
    ],
    includedTitle: "Bạn nhận được gì?",
    includedItems: [
      "01 phiên Coaching 1-1",
      "Thời lượng 60–90 phút",
      "Làm rõ vấn đề đang gặp phải",
      "Xác định điều cần ưu tiên ở thời điểm hiện tại",
      "Nhìn lại cảm xúc, nhu cầu và điểm nghẽn chính",
      "Đề xuất hướng hành động ban đầu",
      "Gợi ý lộ trình phát triển phù hợp nếu cần đi sâu hơn",
    ],
    expectedResultTitle: "Kết quả mong đợi",
    expectedResult:
      "Sau phiên Coaching, bạn có thể nhìn rõ hơn điều đang khiến mình bế tắc và biết bước tiếp theo mình cần làm là gì.",
    roleTitle: "Vai trò của gói này trong hành trình Coaching",
    role: [
      "Đây là điểm chạm đầu tiên để khách hàng bắt đầu với Mr. Thấu Hiểu.",
      "Sau phiên Khám Phá, tùy nhu cầu thực tế, khách có thể được tư vấn thêm File Bản đồ Cá nhân, Gói Thấu Hiểu Chuyên Sâu, Gói Gia Đình Thấu Hiểu hoặc Gói Đồng Hành VIP 1-1.",
    ],
    cta: "Chọn gói này",
  },
  {
    id: "goi-thau-hieu-chuyen-sau",
    isPublic: true,
    showOnLanding: true,
    showInForm: true,
    groupLabel: "COACHING KẾT HỢP BẢN ĐỒ",
    name: "Gói Thấu Hiểu Chuyên Sâu",
    badge: "Được lựa chọn nhiều nhất",
    price: "2.990.000đ",
    positioning: "Coaching kết hợp Bản đồ Thấu hiểu Con người",
    compactAudience:
      "Dành cho người muốn hiểu sâu bản thân, mối quan hệ, sự nghiệp hoặc những vấn đề đang lặp lại.",
    compactMeta:
      "02 phiên Coaching 1-1 · 60–120 phút/phiên · Đồng hành hỏi đáp 03 tháng",
    detailAudienceTitle: "Dành cho ai?",
    detailAudienceIntro:
      "Gói Thấu Hiểu Chuyên Sâu dành cho người muốn hiểu sâu hơn về bản thân, mối quan hệ, sự nghiệp hoặc những vấn đề đang lặp lại trong cuộc sống.",
    fitItems: [
      "Muốn hiểu rõ điểm mạnh, điểm mù và mô thức vận hành của bản thân",
      "Đang gặp vấn đề lặp lại trong cảm xúc, công việc hoặc mối quan hệ",
      "Cần một bản đồ soi chiếu cá nhân hóa",
      "Muốn có kế hoạch hành động rõ ràng hơn sau Coaching",
      "Muốn được đồng hành thêm sau phiên để duy trì tiến trình",
    ],
    includedTitle: "Bạn nhận được gì?",
    includedItems: [
      "02 phiên Coaching 1-1 chuyên sâu",
      "Thời lượng 60–120 phút/phiên",
      "01 Bản đồ Thấu hiểu Con người phù hợp với nhu cầu",
      "Luận giải và soi chiếu bản đồ trong quá trình Coaching",
      "Làm rõ mô thức, điểm mạnh, điểm mù và bài học cá nhân",
      "Xác định vấn đề cốt lõi đang ảnh hưởng đến hiện tại",
      "Xây dựng kế hoạch hành động cá nhân hóa",
      "Đồng hành hỏi đáp trong 03 tháng sau phiên Coaching",
    ],
    toolsTitle: "Công cụ có thể được sử dụng",
    toolsIntro:
      "Tùy theo mục tiêu của khách hàng, Coach có thể sử dụng một trong các công cụ chuyên môn phù hợp:",
    toolsItems: [
      "Map For Success",
      "Relationship Map",
      "Career Map",
      "Kid Talent Map",
    ],
    expectedResultTitle: "Kết quả mong đợi",
    expectedResult:
      "Sau gói Coaching, bạn có thể hiểu sâu hơn cách mình đang vận hành, nhìn rõ nguyên nhân gốc rễ của vấn đề và có một lộ trình hành động phù hợp với chính mình.",
    roleTitle: "Vai trò của gói này trong hành trình Coaching",
    role: [
      "Đây là gói chủ lực của Coaching cá nhân.",
      "Gói này không bán Map riêng lẻ. Gói này bán trải nghiệm Coaching được hỗ trợ bởi bộ công cụ chuyên môn để quá trình thấu hiểu trở nên sâu sắc và cá nhân hóa hơn.",
    ],
    cta: "Chọn gói này",
    accent: true,
  },
  {
    id: "goi-dong-hanh-vip-1-1",
    isPublic: true,
    showOnLanding: true,
    showInForm: true,
    groupLabel: "COACHING CHUYÊN SÂU DÀI HẠN",
    name: "Gói Đồng Hành VIP 1-1",
    price: "Tư vấn theo lộ trình",
    positioning: "Đồng hành cá nhân hóa dài hạn",
    compactAudience:
      "Dành cho khách hàng cần một không gian Coaching riêng tư, sâu và đều đặn trong các giai đoạn quan trọng.",
    compactMeta: "Lộ trình 6–12 tháng · Thiết kế riêng theo mục tiêu đồng hành",
    detailAudienceTitle: "Dành cho ai?",
    detailAudienceIntro:
      "Gói Đồng Hành VIP 1-1 phù hợp với những khách hàng đang ở giai đoạn cần sự đồng hành cá nhân hóa, sâu và dài hạn.",
    fitItems: [
      "Đang đứng trước những quyết định quan trọng trong cuộc sống, công việc hoặc mối quan hệ",
      "Cần một không gian soi chiếu riêng tư, an toàn và có chiều sâu",
      "Muốn được đồng hành đều đặn để giữ nhịp phát triển cá nhân",
      "Đang trong giai đoạn chuyển đổi vai trò, sự nghiệp hoặc định hướng sống",
      "Muốn cải thiện hiệu suất, sự cân bằng và chất lượng các mối quan hệ quan trọng",
      "Cần một Coach đồng hành dài hạn để nhìn rõ vấn đề, hành động nhất quán và theo dõi tiến trình",
    ],
    includedTitle: "Bạn nhận được gì?",
    includedItems: [
      "Lộ trình Coaching thiết kế riêng theo mục tiêu cá nhân",
      "Đồng hành dài hạn 6–12 tháng tùy nhu cầu",
      "Các phiên Coaching 1-1 chuyên sâu",
      "Thời lượng mỗi phiên 60–120 phút",
      "Bộ công cụ chuyên môn cá nhân hóa theo từng giai đoạn",
      "Tài liệu, bài tập hoặc nội dung hỗ trợ sau phiên",
      "Hỗ trợ hỏi đáp giữa các phiên",
      "Review tiến trình định kỳ",
      "Ưu tiên lịch hẹn",
      "Có thể tích hợp thêm khóa học, bản đồ cá nhân hoặc gói đồng hành bổ sung khi phù hợp",
    ],
    expectedResultTitle: "Kết quả mong đợi",
    expectedResult:
      "Sau quá trình đồng hành, bạn có một không gian soi chiếu đều đặn để nhìn rõ vấn đề, ra quyết định tốt hơn, giữ nhịp phát triển cá nhân và tạo thay đổi bền vững trong cuộc sống, công việc hoặc các mối quan hệ quan trọng.",
    costTitle: "Chi phí",
    costNote: [
      "Lộ trình và chi phí được tư vấn riêng theo mục tiêu đồng hành.",
      "Không hiển thị công khai các mức 6 tháng / 12 tháng trên landing page.",
    ],
    cta: "Tư vấn lộ trình VIP",
  },
  {
    id: "combo-gia-dinh-thau-hieu",
    isPublic: true,
    showOnLanding: true,
    showInForm: true,
    groupLabel: "COACHING GIA ĐÌNH & MỐI QUAN HỆ",
    name: "Gói Gia Đình Thấu Hiểu",
    price: "9.990.000đ",
    positioning:
      "Coaching dành cho gia đình và các mối quan hệ quan trọng",
    compactAudience:
      "Dành cho cặp đôi, cha mẹ, con cái hoặc gia đình muốn hiểu nhau sâu hơn, giảm xung đột và xây dựng kết nối bền vững.",
    compactMeta: "03 phiên Coaching · 60–120 phút/phiên · Đồng hành 06 tháng",
    detailAudienceTitle: "Dành cho ai?",
    detailAudienceIntro:
      "Gói Gia Đình Thấu Hiểu dành cho cặp đôi, cha mẹ, con cái hoặc gia đình muốn hiểu nhau sâu hơn, giảm xung đột và xây dựng kết nối bền vững.",
    fitItems: [
      "Vợ chồng thường xuyên bất đồng, khó giao tiếp",
      "Cha mẹ muốn hiểu con nhưng càng nói con càng xa cách",
      "Gia đình muốn cải thiện sự kết nối và đồng cảm",
      "Cặp đôi muốn hiểu nhau trước hoặc trong hôn nhân",
      "Gia đình đang có mâu thuẫn, khoảng cách hoặc áp lực cảm xúc",
      "Cha mẹ muốn đồng hành cùng con đúng cách hơn",
    ],
    includedTitle: "Bạn nhận được gì?",
    includedItems: [
      "03 phiên Coaching / đồng hành gia đình",
      "Thời lượng 60–120 phút/phiên",
      "Phân tích nhu cầu và vấn đề chính trong mối quan hệ",
      "Sử dụng Relationship Map để soi chiếu sự khác biệt giữa các thành viên",
      "Có thể sử dụng Kid Talent Map nếu liên quan đến cha mẹ và con cái",
      "Làm rõ nhu cầu cảm xúc, phong cách giao tiếp và điểm dễ xung đột",
      "Đề xuất cách giao tiếp, thấu hiểu và đồng hành phù hợp",
      "Đồng hành hỏi đáp / theo dõi trong 06 tháng",
    ],
    expectedResultTitle: "Kết quả mong đợi",
    expectedResult:
      "Sau chương trình, các thành viên có thể hiểu nhau sâu hơn, giảm phán xét, cải thiện giao tiếp và xây dựng một cách đồng hành phù hợp hơn trong gia đình.",
    roleTitle: "Vai trò của gói này trong hành trình Coaching",
    role: [
      "Đây là gói riêng cho nhóm nhu cầu gia đình và mối quan hệ. Không đặt ngang hàng hoàn toàn với các gói Coaching cá nhân.",
    ],
    cta: "Chọn gói này",
  },
  {
    id: "phien-coaching-chuyen-sau",
    isPublic: true,
    showOnLanding: true,
    showInForm: true,
    groupLabel: "COACHING CÁ NHÂN THEO PHIÊN",
    name: "Phiên Coaching Chuyên Sâu",
    price: "999.000đ / phiên",
    positioning: "Soi chiếu một vấn đề cụ thể",
    compactAudience:
      "Phù hợp với khách đã có Bản đồ cá nhân, đã được Coaching trước đó hoặc đã hoàn tất thời gian đồng hành của các gói Coaching khác.",
    compactMeta: "01 phiên Coaching 1-1 · 60–120 phút",
    detailAudienceTitle: "Dành cho ai?",
    fitItems: [
      "Khách hàng đã có Bản đồ cá nhân và được Coaching trước đó",
      "Khách hàng đã hoàn tất thời gian đồng hành của các gói Coaching khác",
      "Khách hàng cũ muốn quay lại để soi chiếu thêm một vấn đề mới",
      "Khách hàng cần một phiên chuyên sâu để làm rõ vấn đề, ra quyết định hoặc tái định hướng",
    ],
    includedTitle: "Bạn nhận được gì?",
    includedItems: [
      "01 phiên Coaching 1-1 chuyên sâu",
      "Thời lượng 60–120 phút",
      "Tập trung vào một vấn đề cụ thể",
      "Có thể sử dụng lại Bản đồ đã có để soi chiếu sâu hơn",
      "Làm rõ điểm nghẽn hiện tại",
      "Đề xuất hướng hành động sau phiên",
    ],
    expectedResultTitle: "Kết quả mong đợi",
    expectedResult:
      "Sau phiên Coaching, bạn có thể nhìn rõ hơn vấn đề đang gặp phải, hiểu điều gì đang vận hành bên trong mình và xác định bước hành động phù hợp tiếp theo.",
    roleTitle: "Vai trò của gói này trong hành trình Coaching",
    role: [
      "Đây là lựa chọn linh hoạt cho khách đã có nền tảng hoặc đã từng đồng hành trước đó. Không thay thế Gói Khám Phá dành cho khách mới.",
    ],
    cta: "Đăng ký phiên chuyên sâu",
  },
  {
    id: "tu-van-goi-phu-hop",
    isPublic: true,
    showOnLanding: false,
    showInForm: true,
    groupLabel: "TƯ VẤN",
    name: "Tôi chưa biết chọn gói nào, cần được tư vấn",
    price: "Tư vấn",
    positioning: "Nhận gợi ý gói Coaching phù hợp",
    compactAudience: "Dành cho người cần được tư vấn trước khi chọn gói.",
    compactMeta: "Đội ngũ Mr. Thấu Hiểu sẽ liên hệ tư vấn",
    detailAudienceTitle: "Dành cho ai?",
    fitItems: [],
    includedTitle: "Bạn nhận được gì?",
    includedItems: [],
    expectedResultTitle: "Kết quả mong đợi",
    expectedResult: "",
    cta: "Nhận tư vấn",
  },
];
