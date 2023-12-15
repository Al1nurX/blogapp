import Link from "next/link";

export default function MenuCategories() {
  return (
    <div className="flex flex-wrap lg:mb-10 lg:mt-5 lg:gap-4 xl:mb-14 xl:mt-8 xl:gap-5">
      <Link
        href="/blog?cat=style"
        className="rounded-[10px] bg-sky-100 py-[10px] text-center text-black lg:px-[25px] lg:text-[13px] xl:px-[17px] xl:text-[14px]"
      >
        Style
      </Link>
      <Link
        href="/blog?cat=fashion"
        className="rounded-[10px] bg-pink-100 py-[10px] text-center text-black lg:px-[20px] lg:text-[13px] xl:px-[17px] xl:text-[14px]"
      >
        Fashion
      </Link>
      <Link
        href="/blog?cat=food"
        className="rounded-[10px] bg-lime-100 py-[10px] text-center text-black lg:px-[28px] lg:text-[13px] xl:px-[25px] xl:text-[14px]"
      >
        Food
      </Link>
      <Link
        href="/blog?cat=travel"
        className="rounded-[10px] bg-red-100 py-[10px] text-center text-black lg:px-[23px] lg:text-[13px] xl:px-[17px] xl:text-[14px]"
      >
        Travel
      </Link>
      <Link
        href="/blog?cat=culture"
        className="rounded-[10px] bg-orange-100 py-[10px] text-center text-black lg:px-[22px] lg:text-[13px] xl:px-[17px] xl:text-[14px]"
      >
        Culture
      </Link>
      <Link
        href="/blog?cat=culture"
        className="rounded-[10px] bg-purple-100 py-[10px] text-center text-black lg:px-[20px] lg:text-[13px] xl:px-[17px] xl:text-[14px]"
      >
        Coding
      </Link>
    </div>
  );
}
