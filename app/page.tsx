import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/server/Footer";
import HomeBg from "@/components/server/HomeBg";

export default function Home() {
  return (
    <>
      <section className="relative h-[760px] z-0 text-white select-none">
        <HomeBg />
        <header className="wrapper flex items-center justify-between pt-5">
          <Image
            src="/assets/logo-full.png"
            alt="cln-leetcode brand"
            height={20}
            width={150}
          />
          <nav className="flex items-center gap-4">
            <Link href="/">lk 1</Link>
            <Link href="/">lk 1</Link>
            <Link href="/">lk 1</Link>
            <Link href="accounts">sign in</Link>
          </nav>
        </header>
        <section className="wrapper min-h-[400px] flex items-center justify-between">
          <div className="flex-1"></div>
          <section className="flex-1 text-center p-2">
            <h1 className="font-bold text-3xl mb-2">A New Way To Learn</h1>
            <p className="max-w-[600px] font-semibold mt-6 mb-5 text-gray-300">
              LeetCode is the best platform to help you enhance your skills,
              expand your knowledge and prepare for technical interviews.
            </p>
            <Link
              href="accounts/signup"
              className="bg-olive text-white py-2 px-3 rounded-full"
            >
              Create Account
            </Link>
          </section>
        </section>
      </section>
      <section className="wrapper relative -top-20 bg-red-400">
        <section>
          <h2>Start Exploring</h2>
          <p>
            Start Exploring Explore is a well-organized tool that helps you get
            the most out of LeetCode by providing structure to guide your
            progress towards the next step in your programming career
          </p>
          <Link href="/accounts/signup">Get Started</Link>
        </section>
        <aside>image</aside>
      </section>
      <Footer />
    </>
  );
}
