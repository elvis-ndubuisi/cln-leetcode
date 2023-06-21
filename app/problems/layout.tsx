import { Metadata } from "next";
import ActionSideBar from "@/components/client/ActionSideBar";

export const metadata: Metadata = {
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
    <body className="bg-dark-layer-2 relative">
      {children}
      <ActionSideBar />
    </body>
  );
}
