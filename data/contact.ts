export type ContactInfo = {
  phone: string;
  phoneHref: string;
  zaloUrl: string;
  facebookUrl: string;
  messengerUrl: string;
  email: string;
  emailHref: string;
  icons: {
    zalo: string;
    facebook: string;
    messenger: string;
    phone: string;
  };
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
  phone: "0819 382 313",
  phoneHref: "tel:0819382313",
  zaloUrl: "https://zalo.me/0819382313",
  facebookUrl: "https://www.fb.com/Mrthauhieu33",
  messengerUrl: "https://m.me/mrthauhieu33",
  email: "mrthauhieu@gmail.com",
  emailHref: "mailto:mrthauhieu@gmail.com",
  icons: {
    zalo: "/icons/contact/zalo.png",
    facebook: "/icons/contact/facebook.png",
    messenger: "/icons/contact/messenger.png",
    phone: "/icons/contact/phone.png",
  },
  address: "Ha Noi, Viet Nam",
  bankInfo: {
    bankName: "Placeholder Bank",
    accountNumber: "0000 0000 0000",
    accountName: "MR THAU HIEU",
    branch: "Placeholder Branch",
  },
  paymentNoteTemplate: "COACHING - Ho ten - So dien thoai",
};
