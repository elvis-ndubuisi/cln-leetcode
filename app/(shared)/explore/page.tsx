import { FaRegClock } from "react-icons/fa";
import { BsStar } from "react-icons/bs";
import Card from "@/components/server/Card";

export default function ExplorePage() {
  return (
    <section className="flex-1 bg-white/70">
      <main className="wrapper">
        <header className="max-w-5xl mx-auto h-44 flex items-center justify-between">
          <section className="">
            <p className="text-gray-400 font-medium">Welcome to</p>
            <h1 className="font-semibold text-gray-700 text-3xl leading-10 mt-3">
              LeetCode Explore
            </h1>
          </section>
          <div className="flex items-center gap-4 text-gray-400">
            <BsStar
              size={28}
              className="cursor-pointer hover:text-blue-600 transition-colors duration-300 ease-out"
            />
            <FaRegClock
              size={28}
              className="cursor-pointer hover:text-blue-600 transition-colors duration-300 ease-out"
            />
          </div>
        </header>

        <ExploreSeg />
        <ExploreSeg />
        <ExploreSeg />
      </main>
    </section>
  );
}

function ExploreSeg() {
  return (
    <section className="max-w-5xl mx-auto my-8">
      <header className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-600 text-3xl font-gray-700">
          Featured
        </h2>

        <button className="py-[2px] px-3 card rounded-full font-light text-sm bg-white transition-all duration-300">
          More
        </button>
      </header>
      <section className="w-full flex items-center gap-6 overflow-x-scroll snap-x snap-mandatory py-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </section>
  );
}
