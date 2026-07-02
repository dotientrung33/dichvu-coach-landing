export type CoachingPackage = {
  id: string;
  isPublic: boolean;
  showOnLanding: boolean;
  showInForm: boolean;
  groupLabel: string;
  name: string;
  badge?: string;
  price: string;
  originalPrice?: string;
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
    compactMeta: "01 phiên Coaching 1-1 · 60-90 phút",
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
      "Thời lượng 60-90 phút",
      "Làm rõ vấn đề đang gặp phải",
      "Xác định điều cần ưu tiên ở thời điểm hiện tại",
      "Nhìn lại cảm xúc, nhu cầu và điểm nghẽn chính",
      "Đề xuất hướng hành động ban đầu",
      "Gợi ý lộ trình phát triển phù hợp nếu cần đi sâu hơn",
    ],
    expectedResultTitle: "Kết quả mong đợi",
    expectedResult:
      "Sau phiên Coaching, bạn có thể nhìn rõ hơn điều đang khiến mình bế tắc và biết bước tiếp theo mình cần làm là gì.",
    cta: "Chọn gói này",
  },
  {
    id: "goi-dinh-huong-ve-lo-trinh",
    isPublic: true,
    showOnLanding: true,
    showInForm: true,
    groupLabel: "COACHING ĐỊNH HƯỚNG",
    name: "Gói Định Hướng & Vẽ Lộ Trình",
    price: "1.499.000đ",
    positioning: "Làm rõ vấn đề và xác định hướng đi phù hợp",
    compactAudience:
      "Dành cho người đang có nhiều lựa chọn, nhiều băn khoăn hoặc chưa biết nên bắt đầu từ đâu.",
    compactMeta: "01 phiên Coaching chuyên sâu · 90-120 phút",
    detailAudienceTitle: "Dành cho ai?",
    fitItems: [
      "Bạn đang đứng trước một quyết định quan trọng",
      "Bạn có nhiều lựa chọn nhưng chưa biết đâu là hướng phù hợp",
      "Bạn thấy mình đang lặp lại một vấn đề nhưng chưa rõ nguyên nhân",
      "Bạn muốn có một lộ trình hành động rõ ràng hơn sau phiên Coaching",
    ],
    includedTitle: "Bạn nhận được gì?",
    includedItems: [
      "01 phiên Coaching chuyên sâu 90-120 phút",
      "Làm rõ vấn đề trọng tâm đang cần tháo gỡ",
      "Phân tích bối cảnh hiện tại và các lựa chọn đang có",
      "Gợi ý hướng đi phù hợp với nhu cầu, nguồn lực và trạng thái hiện tại",
      "Xây dựng lộ trình hành động bước đầu sau phiên Coaching",
    ],
    expectedResultTitle: "Kết quả mong đợi",
    expectedResult:
      "Sau phiên Coaching, bạn có thể nhìn rõ vấn đề chính, hiểu đâu là hướng đi phù hợp hơn và có một lộ trình hành động cụ thể để bắt đầu.",
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
      "02 phiên Coaching 1-1 · 60-120 phút/phiên · Đồng hành hỏi đáp 03 tháng",
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
      "Thời lượng 60-120 phút/phiên",
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
    cta: "Chọn gói này",
    accent: true,
  },
  {
    id: "goi-vung-vang-ben-bi-6-thang",
    isPublic: true,
    showOnLanding: true,
    showInForm: true,
    groupLabel: "COACHING ĐỒNG HÀNH 6 THÁNG",
    name: "Gói Vững Vàng & Bền Bỉ - 6 Tháng",
    price: "4.999.000đ",
    positioning: "Đồng hành dài hơn để chuyển hóa bền vững hơn",
    compactAudience:
      "Dành cho người cần một lộ trình đồng hành dài hơn để duy trì sự rõ ràng, ổn định cảm xúc và hành động nhất quán.",
    compactMeta: "03 phiên Coaching · Đồng hành 06 tháng",
    detailAudienceTitle: "Dành cho ai?",
    fitItems: [
      "Bạn đang trong giai đoạn chuyển đổi cá nhân, công việc hoặc mối quan hệ",
      "Bạn cần người đồng hành để giữ sự rõ ràng và cam kết hành động",
      "Bạn muốn thay đổi một mô thức cũ nhưng dễ quay lại thói quen quen thuộc",
      "Bạn cần một lộ trình có theo dõi, phản hồi và điều chỉnh theo thời gian",
    ],
    includedTitle: "Bạn nhận được gì?",
    includedItems: [
      "03 phiên Coaching theo lộ trình",
      "Làm rõ mục tiêu và vấn đề cốt lõi",
      "Theo dõi tiến trình thay đổi trong 06 tháng",
      "Hỗ trợ điều chỉnh góc nhìn và hành động khi gặp vướng mắc",
      "Đồng hành hỏi đáp trong thời gian triển khai",
    ],
    expectedResultTitle: "Kết quả mong đợi",
    expectedResult:
      "Sau chương trình, bạn có thể duy trì sự rõ ràng, ổn định hơn trong hành động và từng bước xây dựng thay đổi bền vững trong cuộc sống hoặc công việc.",
    cta: "Chọn gói này",
  },
  {
    id: "combo-gia-dinh-thau-hieu",
    isPublic: true,
    showOnLanding: true,
    showInForm: true,
    groupLabel: "COACHING GIA ĐÌNH & MỐI QUAN HỆ",
    name: "Gói Gia Đình Thấu Hiểu",
    originalPrice: "12.990.000đ",
    price: "9.990.000đ",
    positioning:
      "Coaching dành cho gia đình và các mối quan hệ quan trọng",
    compactAudience:
      "Dành cho cặp đôi, cha mẹ, con cái hoặc gia đình muốn hiểu nhau sâu hơn, giảm xung đột và xây dựng kết nối bền vững.",
    compactMeta: "03 phiên Coaching · 60-120 phút/phiên · Đồng hành 06 tháng",
    detailAudienceTitle: "Dành cho ai?",
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
      "03 phiên Coaching / đồng hành gia đình, 60-120 phút/phiên",
      "Phân tích nhu cầu và vấn đề chính trong mối quan hệ",
      "Sử dụng Relationship Map để soi chiếu sự khác biệt giữa các thành viên",
      "04 bản đồ cá nhân hóa riêng cho các thành viên chính trong gia đình, gồm bố/mẹ và tối đa 2 con",
      "Từ thành viên thứ 5 trở đi: phụ phí 1.000.000đ/người",
      "Có thể sử dụng Kid Talent Map nếu liên quan đến cha mẹ và con cái",
      "Làm rõ nhu cầu cảm xúc, phong cách giao tiếp và điểm dễ xung đột",
      "Đề xuất cách giao tiếp, thấu hiểu và đồng hành phù hợp",
      "Đồng hành hỏi đáp / theo dõi trong 06 tháng",
    ],
    expectedResultTitle: "Kết quả mong đợi",
    expectedResult:
      "Sau chương trình, các thành viên có thể hiểu nhau sâu hơn, giảm phán xét, cải thiện giao tiếp và xây dựng một cách đồng hành phù hợp hơn trong gia đình.",
    cta: "Chọn gói này",
  },
  {
    id: "goi-dong-hanh-vip-1-1",
    isPublic: true,
    showOnLanding: true,
    showInForm: true,
    groupLabel: "COACHING CHUYÊN SÂU THEO LỘ TRÌNH",
    name: "Đồng Hành VIP 1:1",
    price: "Tư vấn theo lộ trình",
    positioning: "Đồng hành chuyên sâu theo lộ trình",
    compactAudience:
      "Dành cho cá nhân, gia đình hoặc doanh nghiệp cần một lộ trình đồng hành chuyên sâu, linh hoạt và được thiết kế riêng theo nhu cầu thực tế.",
    compactMeta: "Lộ trình cá nhân hóa · Tư vấn riêng theo mục tiêu đồng hành",
    detailAudienceTitle: "Dành cho ai?",
    fitItems: [],
    includedTitle: "Bạn nhận được gì?",
    includedItems: [],
    expectedResultTitle: "Kết quả mong đợi",
    expectedResult: "",
    cta: "Trao đổi qua Zalo",
  },
  {
    id: "phien-coaching-chuyen-sau",
    isPublic: true,
    showOnLanding: false,
    showInForm: true,
    groupLabel: "COACHING CÁ NHÂN THEO PHIÊN",
    name: "Phiên Coaching Chuyên Sâu",
    price: "999.000đ / buổi",
    positioning: "Soi chiếu một vấn đề cụ thể",
    compactAudience:
      "Khách hàng đã từng Coaching hoặc đã có Bản đồ có thể đăng ký phiên Coaching lẻ.",
    compactMeta: "01 phiên Coaching 1-1 · 60-120 phút",
    detailAudienceTitle: "Dành cho ai?",
    fitItems: [],
    includedTitle: "Bạn nhận được gì?",
    includedItems: [],
    expectedResultTitle: "Kết quả mong đợi",
    expectedResult: "",
    cta: "Đăng ký phiên lẻ",
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
