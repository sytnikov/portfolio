import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alexey Sytnikov | Personal Portfolio",
  description:
    "Alexey is a full-stack developer with 4 years of experience in IT.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 h-[3000px] pt-28 sm:pt-36`}
      >
        <div className="left-circle"></div>
        <div className="right-circle"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
