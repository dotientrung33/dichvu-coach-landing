import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dịch vụ Coaching cùng Mr. Thấu Hiểu",
  description: "Landing page dịch vụ Coaching 1-1 cùng Mr. Thấu Hiểu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
