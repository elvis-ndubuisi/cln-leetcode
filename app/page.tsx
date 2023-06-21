import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/server/Footer";
import HomeBg from "@/components/server/HomeBg";
import DevIcon from "@/components/server/DevIcon";
import HomeSectionBg from "@/components/server/HomeSectionBg";
import { FaGraduationCap } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="relative h-[760px] z-0 text-white select-none">
        <HomeBg />
        <header className="px-2 wrapper flex items-center justify-between pt-5">
          <Image
            src="/assets/logo-full.png"
            alt="cln-leetcode brand"
            height={20}
            width={150}
          />
          <nav className="flex items-center gap-4 font-medium">
            <Link href="accounts/signin">Sign In</Link>
          </nav>
        </header>
        <section className="px-2 wrapper min-h-[400px] flex items-center justify-between">
          <div className="flex-1"></div>
          <section className="flex-1 text-center p-2">
            <h1 className="font-bold text-3xl mb-2">A New Way To Learn</h1>
            <p className="max-w-[600px] font-semibold mt-6 mb-5 text-gray-400 leading-7">
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

      <section className="px-2 wrapper relative -top-20 flex items-center justify-between gap-4 flex-wrap">
        <section className="flex-1 text-right flex flex-col items-end gap-6 min-w-[300px]">
          <div className="flex justify-end items-center">
            <h2 className="font-semibold text-2xl text-teal-500">
              Start Exploring
            </h2>
            <DevIcon xCss="mx-7" />
          </div>
          <p className="leading-7 font-medium text-dark-gray-6">
            Start Exploring Explore is a well-organized tool that helps you get
            the most out of LeetCode by providing structure to guide your
            progress towards the next step in your programming career
          </p>
          <Link href="/accounts/signup" className="text-blue-400">
            Get Started
          </Link>
        </section>
        <aside className="flex-1 grid place-items-center place-content-center">
          image
        </aside>
      </section>

      <section className="wrapper relative -top-10 flex items-stretch justify-between gap-4 px-1 flex-wrap">
        <section className="w-full max-w-xl p-3">
          <div className="flex items-center">
            <DevIcon xCss="-m-1 z-[3]" />
            <DevIcon xCss="-m-1 z-[2]" />
            <DevIcon xCss="-m-1 z-[1]" />
          </div>
          <h3 className="font-semibold text-xl text-blue-400 mb-6">
            Questions, Community & Contest
          </h3>
          <p className="leading-7 text-gray-400">
            Over 2750 questions for you to practice. Come and join one of the
            largest tech communities with hundreds of thousands of active users
            and participate in our contests to challenge yourself and earn
            rewards.
          </p>
          <Link href="#">View Questions</Link>
        </section>
        <div className="bg-white w-full max-w-[2px]"></div>
        <section className="w-full max-w-xl p-3">
          <div className="flex items-center">
            <DevIcon xCss="-m-1 z-[2]" />
            <DevIcon xCss="-m-1 z-[1]" />
          </div>
          <h3 className="font-semibold text-xl text-orange-400 mb-6">
            Companies & Candidates
          </h3>
          <p>
            Not only does LeetCode prepare candidates for technical interviews,
            we also help companies identify top technical talent. From
            sponsoring contests to providing online assessments and training, we
            offer numerous services to businesses.
          </p>
          <Link href="#">Business Opportunities</Link>
        </section>
      </section>

      <section className="wrapper grid place-items-center">
        <DevIcon xCss="from-blue-500 to-blue-200 text-blue-400">
          <FaGraduationCap size={33} />
        </DevIcon>
        <h3 className="font-semibold text-xl text-blue-400 mb-6">Developer</h3>
        <p className="leading-7 text-gray-400 max-w-2xl text-center">
          We now support 14 popular coding languages. At our core, LeetCode is
          about developers. Our powerful development tools such as Playground
          help you test, debug and even write your own projects online.
        </p>
      </section>

      <section className="wrapper grid place-items-center">
        <DevIcon xCss="from-red-700 to-red-400" />
        <h3 className="font-semibold text-xl text-red-700 mb-6">
          Cloned with `thinking....`
        </h3>
        <p className="leading-7 text-gray-400 max-w-2xl text-center">
          At LeetCode, our mission is to help you improve yourself and land your
          dream job. We have a sizable repository of interview resources for
          many companies. In the past few years, our users have landed jobs at
          top companies around the world.
        </p>
        <hr className="w-full max-w-lg mx-auto px-4 border-gray-6 my-8" />
        <p className="text-center text-gray-400 leading-7 max-w-lg mx-aut">
          If you are passionate about tackling some of the most interesting
          problems around, we would love to hear from you.
        </p>
      </section>
      <Footer />
      <HomeSectionBg />
    </>
  );
}
