import Image from "next/image";
import Link from "next/link";

import ResumeButton from "./ResumeButton";

const AuthHeader: React.FC = () => {
  return (
    <header className="bg-white">
      <nav className="max-w-screen-xl mx-auto px-2 flex items-center justify-between h-11">
        <Link href="/">
          <Image
            src="/assets/leetcode-logo-dark.svg"
            alt="cloned leetcode brand"
            priority
            height={80}
            width={90}
          />
        </Link>

        <ul>
          <li>
            <ResumeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default AuthHeader;
