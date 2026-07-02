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
  note?: string;
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
    positioning: "Vẽ con đường rõ ràng — Tự tin bước đi và biến ước mơ thành hiện thực",
    compactAudience:
      "Người đã sẵn sàng phát triển nhưng chưa biết cách đặt mục tiêu và xây dựng kế hoạch cụ thể.",
    compactMeta: "01 buổi coaching 1:1 · 90–120 phút · Đồng hành hỏi đáp 03 tháng",
    detailAudienceTitle: "Dành cho ai?",
    detailAudienceIntro:
      "Người đã sẵn sàng phát triển nhưng chưa biết cách đặt mục tiêu và xây dựng kế hoạch cụ thể.",
    fitItems: [],
    includedTitle: "Bạn nhận được gì?",
    includedItems: [
      "01 buổi coaching 1:1, 90–120 phút",
      "Phân tích chuyên sâu 6 chỉ số Ngôi Sao May Mắn: Đường đời, Sứ mệnh, Linh hồn, Liên kết, Chặng và Năm cá nhân",
      "Hỗ trợ hỏi đáp xuyên suốt 3 tháng sau buổi coaching",
      "Tặng Ebook cá nhân hóa (PDF) về 6 chỉ số Ngôi Sao May Mắn — tra cứu lại bất cứ lúc nào",
      "Hỗ trợ thiết lập mục tiêu và xây dựng kế hoạch phát triển bản thân/mối quan hệ rõ ràng",
      "Hình thức: ONLINE hoặc OFFLINE — linh hoạt theo nhu cầu",
    ],
    expectedResultTitle: "Kết quả mong đợi",
    expectedResult:
      "Sau buổi coaching, bạn xác định rõ mục tiêu ngắn hạn — dài hạn, hiểu rõ điểm mạnh và thách thức của bản thân, biết cách tận dụng thời điểm phù hợp, có kế hoạch hành động cụ thể và niềm tin để bắt đầu thực hiện.",
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
    name: "Gói Vững Vàng & Bền Bỉ – Hành Trình 6 Tháng",
    price: "4.999.000đ",
    positioning: "Không chỉ là khởi đầu — mà là sự đồng hành bền vững để bạn chuyển hóa thực sự",
    compactAudience:
      "Người mong muốn có lộ trình phát triển dài hạn với sự đồng hành và hỗ trợ sâu sát từ coach, để đảm bảo kết quả không chỉ nhất thời mà duy trì lâu dài.",
    compactMeta: "03 buổi coaching 1:1 · 60–90 phút/buổi · Đồng hành hỏi đáp 06 tháng",
    detailAudienceTitle: "Dành cho ai?",
    detailAudienceIntro:
      "Người mong muốn có lộ trình phát triển dài hạn với sự đồng hành và hỗ trợ sâu sát từ coach, để đảm bảo kết quả không chỉ nhất thời mà duy trì lâu dài.",
    fitItems: [],
    includedTitle: "Bạn nhận được gì?",
    includedItems: [
      "3 buổi coaching 1:1, mỗi buổi 60–90 phút",
      "Coaching chuyên sâu dựa trên bản đồ Map For Success 21 chỉ số, tặng kèm bản đồ giấy/file in màu",
      "Tài khoản khóa học \"Change for Success\" — 4 bước phát triển bản thân + 2 bài test năng lực",
      "Hỗ trợ hỏi đáp xuyên suốt 6 tháng",
      "Tham gia workshop/lớp học cộng đồng Thấu Hiểu Bản Thân",
      "Hình thức: ONLINE & OFFLINE — tùy theo nhu cầu",
    ],
    expectedResultTitle: "Kết quả mong đợi",
    expectedResult:
      "Sau 6 tháng đồng hành, bạn xây dựng được mục tiêu dài hạn rõ ràng, được điều chỉnh lộ trình khi gặp khó khăn, biết cách đo lường tiến trình, duy trì động lực và thói quen phát triển bản thân, không bị bỏ rơi khi tinh thần đi xuống.",
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
    fitItems: [
      "Cá nhân đang ở giai đoạn chuyển đổi lớn trong cuộc sống, sự nghiệp hoặc các mối quan hệ",
      "Gia đình cần đồng hành sâu để tháo gỡ vấn đề phức tạp và cải thiện kết nối",
      "Chủ doanh nghiệp, quản lý hoặc đội nhóm cần nâng cao hiệu suất từ sự thấu hiểu con người",
      "Khách hàng cần một lộ trình riêng, không phù hợp với các gói Coaching cố định",
    ],
    includedTitle: "Quyền lợi cơ bản",
    includedItems: [
      "Lộ trình Coaching được thiết kế riêng theo nhu cầu thực tế",
      "Kết hợp Coaching, bản đồ thấu hiểu con người và các công cụ phù hợp",
      "Đồng hành linh hoạt theo từng giai đoạn",
      "Hỗ trợ làm rõ vấn đề, mục tiêu, mối quan hệ và hướng hành động",
      "Ưu tiên trao đổi trực tiếp qua Zalo hoặc Messenger",
    ],
    note:
      "Gói VIP không công khai giá vì lộ trình, thời lượng và phạm vi đồng hành sẽ được cá nhân hóa sau buổi trao đổi ban đầu.",
    expectedResultTitle: "Kết quả mong đợi",
    expectedResult:
      "Sau quá trình đồng hành, bạn có một không gian soi chiếu đều đặn để nhìn rõ vấn đề, ra quyết định tốt hơn, giữ nhịp phát triển cá nhân và tạo thay đổi bền vững trong cuộc sống, công việc hoặc các mối quan hệ quan trọng.",
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
