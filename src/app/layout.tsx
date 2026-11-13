import type { Metadata } from "next";
import { Vazirmatn, Amiri } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-vazirmatn",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg" },
  title: {
    default: "گروه حقوقی راهگشا | وکالت و مشاوره تخصصی املاک، ساختمان و انبوه‌سازی",
    template: "%s | گروه حقوقی راهگشا",
  },
  description:
    "گروه حقوقی راهگشا؛ ارائه خدمات وکالت، مشاوره حقوقی، تنظیم قرارداد و رسیدگی تخصصی به پرونده‌های ملکی، قراردادهای ساختمانی و انبوه‌سازی مسکن با ۲۴ سال تجربه و پشتیبانی آنلاین ۲۴ ساعته.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${amiri.variable}`}>
      <body>
        <FloatingActions />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
