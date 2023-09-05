import "./global.css";

import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

import { Providers } from "./providers";
import MainLayout from "@/components/Layout/MainLayout";

const notoSans = Noto_Sans({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Chatopia",
  description: "A fun project created by Indra & Arjun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
