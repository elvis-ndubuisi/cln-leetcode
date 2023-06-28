import { Metadata } from "next";
import Image from "next/image";
import ActionSideBar from "@/components/client/ActionSideBar";
import ResumeButton from "@/components/server/ResumeButton";

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
    <main className="bg-dark-layer-2 min-h-screen text-white">
      <header className=" bg-dark-layer-1 py-3">
        <section className="wrapper flex items-center justify-between">
          <Image
            src="/assets/logo-full.png"
            alt="logo"
            width={90}
            height={90}
            role="button"
          />
          <ResumeButton />
        </section>
      </header>
      {children}
      <ActionSideBar />
    </main>
  );
}
