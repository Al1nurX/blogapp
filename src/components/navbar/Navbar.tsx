"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const status = "notAuthenticated";
  return (
    <div className="flex h-[100px] items-center justify-between">
      <div className="hidden flex-1 gap-[10px] lg:visible lg:flex">
        <a href="">
          <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        </a>
        <a href="">
          <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        </a>
        <a href="">
          <Image src="/tiktok.png" alt="Tiktok" width={24} height={24} />
        </a>
        <a href="">
          <Image src="/youtube.png" alt="Youtube" width={24} height={24} />
        </a>
      </div>
      <div className="min-w-[375px]:text-left flex-1 font-bold sm:text-left md:text-left md:text-lg lg:text-center lg:text-[20px] xl:text-2xl">
        Al1nurXBlog
      </div>
      <div className="flex items-center">
        <ThemeToggle />
        <div className="hidden flex-1 items-center md:ml-3 md:flex md:gap-3 md:text-base lg:ml-4 lg:gap-[15px] lg:text-lg xl:ml-5 xl:gap-[20px] xl:text-xl">
          <Link href="/">Homepage</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <AuthLinks />
        </div>
        <div
          className="ml-3 flex h-4 w-5 cursor-pointer flex-col justify-between md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className="h-[2px] w-full bg-textColor"></div>
          <div className="h-[2px] w-full bg-textColor"></div>
          <div className="h-[2px] w-full bg-textColor"></div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-bg z-10 absolute left-0 top-[100px] flex h-screen w-full flex-col items-center justify-center gap-12 text-3xl">
          <Link href="/">Homepage</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          {status === "notAuthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className="cursor-pointer">LogOut</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
