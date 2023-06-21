import Image from "next/image";
import Link from "next/link";

import { FaPlay } from "react-icons/fa";

export default function Card() {
  return (
    <section className="w-full min-w-[300px] rounded-2xl overflow-hidden bg-gradient-to-r from-[#f5f5f5] to-[#ffffff] cursor-grab transition-all duration-500 select-none card">
      <div className="h-[200px] bg-[url('https://assets.leetcode.com/explore/cards/introduction-to-the-beginners-guide/img-1652222288.png')] bg-no-repeat bg-center bg-cover">
        <div className="p-4 text-white capitalize">
          <p>leetcode interview code samples</p>
          <h3 className="font-semibold text-3xl break-words">
            the leetcode beginner problems
          </h3>
        </div>
      </div>
      <section className="w-full grid grid-cols-3 items-end p-2 relative">
        <span className="inline-flex flex-col items-center p-2">
          <p className="text-2xl">4</p>
          <small className="text-gray-500 capitalize text-[0.9rem]">
            Chapters
          </small>
        </span>
        <span className="inline-flex flex-col items-center p-2">
          <p className="text-2xl">434</p>
          <small className="text-gray-500 capitalize text-[0.9rem]">
            Items
          </small>
        </span>
        <span className="inline-flex flex-col items-center p-1">
          <p className="text-xl text-gray-500">%</p>
        </span>

        <Link
          href=""
          className="absolute right-4 -top-[25%] -translate-y-1/4 z-10 rounded-full h-16 aspect-square bg-white border-4 border-gray-300 grid place-content-center place-items-center"
        >
          <FaPlay size={16} />
        </Link>
      </section>
    </section>
  );
}
