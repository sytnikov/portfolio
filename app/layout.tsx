import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import Footer from "@/components/Footer";

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
        className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36`}
      >
        <div className="left-circle"></div>
        <div className="right-circle"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right"/>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
