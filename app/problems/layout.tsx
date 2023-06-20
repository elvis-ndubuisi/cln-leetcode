// import { Inter } from 'next/font/google'
import ActionSideBar from "@/components/client/ActionSideBar";

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Tricky Problems - LeetCode",
  description:
    "Cloned copy - Web application that contains leetcode problems and video solutions",
};

export default function ProblemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className="bg-dark-layer-2 relative">
        {children}
        <ActionSideBar />
      </body>
    </html>
  );
}
