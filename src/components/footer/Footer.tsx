import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex items-center justify-between gap-[50px] py-5 pb-[35px] text-softTextColor xs:mt-[65px] xs:flex-col md:flex-row  xl:mt-[65px]">
      <div className="flex flex-1 flex-col gap-[14px]">
        <div className="flex items-center gap-[10px]">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="Logo"
            className="rounded-[50%]"
          />
          <h1 className="font-semibold xs:text-base sm:text-lg md:text-xl lg:text-2xl">
            Al1nurX
          </h1>
        </div>
        <p className="font-light xs:text-xs sm:text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          repellendus consequatur architecto delectus dolorum omnis consectetur
          ipsa excepturi velit distinctio ratione officia id natus.
        </p>
        <div className="mt-[10px] flex gap-[10px]">
          <Image src="/facebook.png" alt="Facebook" width={18} height={18} />
          <Image src="/instagram.png" alt="Instagram" width={18} height={18} />
          <Image src="/tiktok.png" alt="Tiktok" width={18} height={18} />
          <Image src="/youtube.png" alt="YouTube" width={18} height={18} />
        </div>
      </div>
      <div className="flex flex-1 xs:w-full xs:justify-between md:justify-end md:gap-[50px] lg:gap-[75px] xl:gap-[100px]">
        <div className="flex flex-col gap-[10px] font-light xs:text-xs sm:text-sm lg:text-base">
          <span className="font-semibold">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex flex-col gap-[10px] font-light xs:text-xs sm:text-sm lg:text-base">
          <span className="font-semibold">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/blog">Fashion</Link>
          <Link href="/about">Coding</Link>
          <Link href="/contact">Travel</Link>
        </div>
        <div className="flex flex-col gap-[10px] font-light xs:text-xs sm:text-sm lg:text-base">
          <span className="font-semibold">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/blog">Instagram</Link>
          <Link href="/about">TikTok</Link>
          <Link href="/contact">YouTube</Link>
        </div>
      </div>
    </div>
  );
}
