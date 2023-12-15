"use client";

import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

export default function WritePage() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="">
      <input
        type="text"
        placeholder="Title"
        className="border-none bg-transparent p-[50px] text-[64px] outline-none placeholder:text-[#b3b3b1]"
      />
      <div className="relative flex h-[700px] gap-5">
        <button
          className="border-custom flex h-9 w-9 items-center justify-center rounded-[50%] border-2 border-solid bg-transparent"
          onClick={() => setOpen(!open)}
        >
          <Image src="/plus.png" alt="Add" width={16} height={16} />
        </button>
        {open && (
          <div className="absolute left-[50px] z-30 flex w-full gap-5 bg-bg">
            <button className="flex h-9 w-9 items-center justify-center rounded-[50%] border-2 border-solid border-[#1a8917] bg-transparent">
              <Image src="/image.png" alt="img" width={16} height={16} />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-[50%] border-2 border-solid border-[#1a8917] bg-transparent">
              <Image src="/external.png" alt="img" width={16} height={16} />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-[50%] border-2 border-solid border-[#1a8917] bg-transparent">
              <Image src="/video.png" alt="img" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className="w-full"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className="absolute right-5 top-[30px] rounded-[20px] border-none bg-[#1a8917] px-5 py-[10px] text-sm text-white">
        Publish
      </button>
    </div>
  );
}
