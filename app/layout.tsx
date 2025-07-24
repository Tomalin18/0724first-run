import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TechNavigation } from "@/components/TechNavigation";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tech Future - 科技未來創新平台",
  description: "現代企業官網、設計師作品集、生活風格部落格 - 探索科技未來的無限可能",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="tech-grid min-h-screen">
          <TechNavigation />
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
