"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className="">Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="my-[90px] flex items-center justify-center">
      <div className="flex flex-col rounded-[10px] bg-softBg xs:gap-[25px] xs:px-[60px] xs:py-[40px] sm:gap-[35px] sm:px-[90px] sm:py-[60px] md:gap-[45px] md:px-[130px] md:py-[100px] lg:gap-[50px] xl:px-[180px] xl:py-[130px]">
        <div
          className="flex cursor-pointer items-center justify-center rounded-[5px] border-none bg-[#ff5555] text-white xs:p-[12px] xs:text-[13px] xs:font-medium sm:px-[20px] sm:py-[12px] sm:text-[15px] md:px-[40px] md:py-[15px] md:text-[16px] md:font-bold lg:px-[60px] lg:py-[20px]"
          onClick={() => signIn("google")}
        >
          Sign In with Google
        </div>
        <div className="flex cursor-pointer items-center justify-center rounded-[5px] border-none bg-[#111] text-white xs:p-[12px] xs:text-[13px] xs:font-medium sm:px-[20px] sm:py-[12px] sm:text-[15px] md:px-[40px] md:py-[15px] md:text-[16px] md:font-bold lg:px-[60px] lg:py-[20px]">
          Sign In with GitHub
        </div>
        <div className="flex cursor-pointer items-center justify-center rounded-[5px] border-none bg-[#087BEA] text-white xs:p-[12px] xs:text-[13px] xs:font-medium sm:px-[20px] sm:py-[12px] sm:text-[15px] md:px-[40px] md:py-[15px] md:text-[16px] md:font-bold lg:px-[60px] lg:py-[20px]">
          Sign In with Facebook
        </div>
      </div>
    </div>
  );
}
