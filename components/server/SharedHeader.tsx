import Image from "next/image";
import Link from "next/link";

import ResumeButton from "./ResumeButton";

const SharedHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-screen-xl mx-auto px-2 flex items-center justify-between h-11">
        <div className="flex items-center justify-start gap-5 text-[0.8rem] text-gray-600">
          <Link href="/">
            <Image
              src="/assets/leetcode-logo-dark.svg"
              alt="cloned leetcode brand"
              priority
              height={80}
              width={90}
            />
          </Link>
          <Link href="/explore">Explore</Link>
          <Link href="/problems">Problems</Link>
        </div>

        <ul>
          <li>
            <ResumeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default SharedHeader;
