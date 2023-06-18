import AuthHeader from "@/components/server/AuthHeader";
import Footer from "@/components/server/Footer";

export const metadata = {
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
      <body className="bg-gray-100 h-screen flex flex-col gap-4 relative">
        <AuthHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
