import Image from "next/image";
import Link from "next/link";

export default function CategoryList() {
  return (
    <>
      <h1 className="my-[50px] font-semibold xs:text-xl sm:text-lg lg:text-3xl xl:text-4xl">
        Popular Categories
      </h1>
      <div className="flex flex-wrap justify-between gap-5">
        <Link
          href="/blog?cat=style"
          className="flex h-20 items-center justify-center gap-[10px] rounded-[10px] bg-sky-100 text-black xs:w-full sm:w-[45%] md:w-[25%] xl:w-[15%] "
        >
          <Image
            src="/style.png"
            alt="Style"
            width={32}
            height={32}
            className="h-8 rounded-[50%]"
          />
          Style
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex h-20 items-center justify-center gap-[10px] rounded-[10px] bg-pink-100 text-black xs:w-full sm:w-[45%] md:w-[25%] xl:w-[15%]"
        >
          <Image
            src="/fashion.png"
            alt="Fashion"
            width={32}
            height={32}
            className="h-8 rounded-[50%]"
          />
          Fashion
        </Link>
        <Link
          href="/blog"
          className="flex h-20 items-center justify-center gap-[10px] rounded-[10px] bg-lime-100 text-black xs:w-full sm:w-[45%] md:w-[25%] xl:w-[15%]"
        >
          <Image
            src="/food.png"
            alt="Food"
            width={32}
            height={32}
            className="h-8 rounded-[50%]"
          />
          Food
        </Link>
        <Link
          href="/blog"
          className="flex h-20 items-center justify-center gap-[10px] rounded-[10px] bg-red-100 text-black xs:w-full sm:w-[45%] md:w-[25%] xl:w-[15%]"
        >
          <Image
            src="/travel.png"
            alt="Travel"
            width={32}
            height={32}
            className="h-8 rounded-[50%]"
          />
          Travel
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex h-20 items-center justify-center gap-[10px] rounded-[10px] bg-orange-100 text-black xs:w-full sm:w-[45%] md:w-[25%] xl:w-[15%]"
        >
          <Image
            src="/culture.png"
            alt="Culture"
            width={32}
            height={32}
            className="h-8 rounded-[50%]"
          />
          Culture
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex h-20 items-center justify-center gap-[10px] rounded-[10px] bg-purple-100 text-black xs:w-full sm:w-[45%] md:w-[25%] xl:w-[15%]"
        >
          <Image
            src="/coding.png"
            alt="Coding"
            width={32}
            height={32}
            className="h-8 rounded-[50%]"
          />
          Coding
        </Link>
      </div>
    </>
  );
}
