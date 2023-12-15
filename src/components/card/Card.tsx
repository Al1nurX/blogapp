import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <div className="mb-[50px] flex items-center gap-[50px]">
      <div className="relative flex-1 xs:hidden lg:block lg:h-[270px] xl:h-[300px]">
        <Image
          src="/p1.jpeg"
          alt="Image"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col xs:gap-[10px] xl:gap-[15px]">
        <div className="lg:text-sm xl:text-base">
          <span className="text-gray-400">11.02.2023 - </span>
          <span className="font-medium text-red-500">CULTURE</span>
        </div>
        <Link href="/">
          <h1 className="font-semibold sm:text-lg md:text-[20px] lg:text-[19px] xl:text-[23px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </Link>
        <p className="font-light text-softTextColor xs:text-[14px] md:text-xs lg:text-sm xl:text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
          explicabo dolorum facilis porro! Iusto quaerat deleniti accusamus
          quae. Inventore, quasi iure. Quia, optio ea? Accusamus sit recusandae
          repellendus soluta voluptate.
        </p>
        <Link href="/" className="w-max border-b border-red-300 py-[2px]">
          Read More
        </Link>
      </div>
    </div>
  );
}
