import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Fresh Dent | Premium Dental Care in Kakinada",
  description: "Redefining your dental care experience with advanced digital treatments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans mx-auto w-full relative`}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
