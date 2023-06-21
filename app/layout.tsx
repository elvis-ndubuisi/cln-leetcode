import "./globals.css";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tricky LeetCode",
  description:
    "Cloned copy - Web application that contains leetcode problems and video solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className="relative h-full">{children}</body>
    </html>
  );
}
