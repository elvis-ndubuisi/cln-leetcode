import Image from "next/image";
import ResumeButton from "@/components/server/ResumeButton";
import ProblemSkeleton from "@/components/server/Skeletons/ProblemSkeleton";
import ProblemTable from "@/components/client/ProblemTable";

export default function Problems() {
  return (
    <main>
      {/* <header className=" bg-dark-layer-1 py-3">
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
      </header> */}
      <table className="text-sm text-left text-gray-400 sm:w-7/12 w-full wrapper">
        <thead className="border-b uppercase">
          <tr>
            <th scope="col" className="px-1 py-3 w-0">
              Status
            </th>
            <th scope="col" className="px-1 py-3 w-0">
              Title
            </th>
            <th scope="col" className="px-1 py-3 w-0">
              Difficulty
            </th>
            <th scope="col" className="px-1 py-3 w-0">
              Category
            </th>
            <th scope="col" className="px-1 py-3 w-0">
              Solution
            </th>
          </tr>
        </thead>
        <tbody>
          <ProblemTable />
        </tbody>
      </table>
      <section className="wrapper sm:w-7/12 w-full">
        <ProblemSkeleton />
        <ProblemSkeleton />
        <ProblemSkeleton />
        <ProblemSkeleton />
        <ProblemSkeleton />
        <ProblemSkeleton />
        <ProblemSkeleton />
        <ProblemSkeleton />
        <ProblemSkeleton />
        <ProblemSkeleton />
      </section>
    </main>
  );
}
