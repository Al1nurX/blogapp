"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

export default function ThemeToggle() {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className="relative flex h-5 w-10 cursor-pointer items-center justify-between rounded-[50px]"
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="Moon" width={14} height={14} />
      <div
        className="absolute h-[15px] w-[15px] rounded-[50%]"
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="Sun" width={14} height={14} />
    </div>
  );
}
