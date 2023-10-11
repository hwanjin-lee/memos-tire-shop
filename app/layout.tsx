import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Providers from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Memos Tire Shop",
  description:
    "Your Trusted Shop for New and Used Tires with Expert Auto Repairs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script
          src="https://kit.fontawesome.com/d7f1fe0b4e.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
