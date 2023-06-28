import SharedHeader from "@/components/server/SharedHeader";
import Footer from "@/components/server/Footer";

export const metadata = {
  title: "Tricky LeetCode",
  description:
    "Cloned copy - Web application that contains leetcode problems and video solutions",
};

export default function AccountsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col">
      <SharedHeader />
      {children}
      <Footer />
    </main>
  );
}
