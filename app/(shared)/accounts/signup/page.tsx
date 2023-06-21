import Image from "next/image";
import Link from "next/link";

import Input from "@/components/client/Input";
import SocialAuths from "@/components/server/SocialAuths";

export default function AuthSignUp() {
  return (
    <section className="flex-1 flex items-center justify-center px-2">
      <section className="drop-shadow-sm bg-white rounded px-6 py-8 w-full max-w-sm flex flex-col items-center">
        <Image
          src="/assets/leetcode-logo.svg"
          alt="cloned leetcode alt brand"
          height={90}
          width={90}
          priority
          className="mb-4"
        />
        <form className="w-full flex flex-col gap-4">
          <Input name="username" placeholder="Username" />
          <Input name="password" placeholder="Password" />
          <Input name="c-password" placeholder="Confirm password" />
          <Input name="email" type="email" placeholder="Email address" />
          <button
            type="submit"
            className="font-light text-sm text-white bg-gradient-to-r from-gray-700 to-gray-600 px-3 py-2 rounded-sm hover:bg-gradient-to-l hover:from-gray-500 hover:to-gray-400"
          >
            Sign Up
          </button>
        </form>

        <section className="font-light text-sm text-gray-8 w-full my-5 flex items-center justify-between">
          Have an account? <Link href="signin">Sign In</Link>
        </section>

        <section className="flex flex-col items-center justify-center gap-2">
          <small className="text-[0.8rem] text-gray-400">
            or you can sign in with
          </small>
          <SocialAuths />
        </section>
      </section>
    </section>
  );
}
