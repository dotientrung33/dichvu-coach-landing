export type ContactInfo = {
  phone: string;
  zaloUrl: string;
  facebookUrl: string;
  email: string;
  address: string;
  bankInfo: {
    bankName: string;
    accountNumber: string;
    accountName: string;
    branch: string;
  };
  paymentNoteTemplate: string;
};

export const contactInfo: ContactInfo = {
  phone: "0900 000 000",
  zaloUrl: "https://zalo.me/0900000000",
  facebookUrl: "https://www.facebook.com/mrthauhieu",
  email: "hello@mrthauhieu.vn",
  address: "Placeholder address, Việt Nam",
  bankInfo: {
    bankName: "Placeholder Bank",
    accountNumber: "0000 0000 0000",
    accountName: "MR THAU HIEU",
    branch: "Placeholder Branch",
  },
  paymentNoteTemplate: "COACHING - Họ tên - Số điện thoại",
};
