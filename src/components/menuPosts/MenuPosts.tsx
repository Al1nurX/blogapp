import Image from "next/image";
import Link from "next/link";

interface MenuPostsProps {
  withImage: boolean;
}

export default function MenuPosts({ withImage }: MenuPostsProps) {
  return (
    <div className="flex flex-col lg:mb-10 lg:mt-5 lg:gap-4 xl:mb-14 xl:mt-[25px] xl:gap-[25px]">
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="relative aspect-square flex-1">
            <Image
              src="/p1.jpeg"
              alt="img"
              fill
              priority
              className="rounded-[50%] border-[3px] border-solid border-gray-300 object-cover"
            />
          </div>
        )}
        <div className="flex flex-[4] flex-col gap-[5px]">
          <span className="w-max rounded-[10px] bg-[#ff7857] px-2 py-[3px] text-xs text-white">
            Travel
          </span>
          <h3 className="text-sm font-medium text-softTextColor">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className="">Alinur Shayakhmet</span>
            <span className="text-gray-400"> - 12.12.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="relative aspect-square flex-1">
            <Image
              src="/p1.jpeg"
              alt="img"
              fill
              priority
              className="rounded-[50%] border-[3px] border-solid border-gray-300 object-cover"
            />
          </div>
        )}
        <div className="flex flex-[4] flex-col gap-[5px]">
          <span className="w-max rounded-[10px] bg-[#ffb14f] px-2 py-[3px] text-xs text-white">
            Culture
          </span>
          <h3 className="text-sm font-medium text-softTextColor">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className="">Alinur Shayakhmet</span>
            <span className="text-gray-400"> - 12.12.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="relative aspect-square flex-1">
            <Image
              src="/p1.jpeg"
              alt="img"
              fill
              priority
              className="rounded-[50%] border-[3px] border-solid border-gray-300 object-cover"
            />
          </div>
        )}
        <div className="flex flex-[4] flex-col gap-[5px]">
          <span className="w-max rounded-[10px] bg-[#7fb881] px-2 py-[3px] text-xs text-white">
            Food
          </span>
          <h3 className="text-sm font-medium text-softTextColor">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className="">Alinur Shayakhmet</span>
            <span className="text-gray-400"> - 12.12.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="relative aspect-square flex-1">
            <Image
              src="/p1.jpeg"
              alt="img"
              fill
              priority
              className="rounded-[50%] border-[3px] border-solid border-gray-300 object-cover"
            />
          </div>
        )}
        <div className="flex flex-[4] flex-col gap-[5px]">
          <span className="w-max rounded-[10px] bg-[#ff7887] px-2 py-[3px] text-xs text-white">
            Fashion
          </span>
          <h3 className="text-sm font-medium text-softTextColor">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className="">Alinur Shayakhmet</span>
            <span className="text-gray-400"> - 12.12.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
