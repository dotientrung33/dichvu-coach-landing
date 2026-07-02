import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["vietnamese"],
  weight: ["700"],
  variable: "--font-playfair-display",
  display: "swap",
});

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
      <body className={`${beVietnamPro.variable} ${playfairDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
