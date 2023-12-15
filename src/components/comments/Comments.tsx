import Image from "next/image";
import Link from "next/link";

export default function Comments() {
  const status = "authenticated";
  return (
    <div className="mt-[50px]">
      <h1 className="mb-[30px] text-softTextColor md:text-[22px] lg:text-2xl xl:text-3xl">
        Comments
      </h1>
      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-[30px]">
          <textarea
            placeholder="write a comment..."
            className="w-full xs:p-3 md:p-5"
          />
          <button className="rounded-[5px] bg-green-800 font-bold text-white xs:px-4 xs:py-3 md:px-5 md:py-4">
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className="mt-[50px]">
        <div className="mb-[50px]">
          <div className="mb-5 flex items-center gap-5">
            <Image
              src="/p1.jpeg"
              alt="img"
              width={50}
              height={50}
              className="h-[50px] rounded-[50%] object-cover"
            />
            <div className="flex flex-col gap-[5px] text-softTextColor">
              <span className="text-[16px] font-medium">Alinur Shayakhmet</span>
              <span className="text-[14px]">13.12.2023</span>
            </div>
          </div>
          <p className="font-light xs:text-[15px] sm:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            expedita voluptatibus reiciendis quisquam modi, autem reprehenderit
            fuga exercitationem omnis aliquid soluta beatae quam amet at eaque
            nesciunt quod culpa ad!
          </p>
        </div>
      </div>
      <div className="mt-[50px]">
        <div className="mb-[50px]">
          <div className="mb-5 flex items-center gap-5">
            <Image
              src="/p1.jpeg"
              alt="img"
              width={50}
              height={50}
              className="h-[50px] rounded-[50%] object-cover"
            />
            <div className="flex flex-col gap-[5px] text-softTextColor">
              <span className="text-[16px] font-medium">Alinur Shayakhmet</span>
              <span className="text-[14px]">13.12.2023</span>
            </div>
          </div>
          <p className="font-light xs:text-[15px] sm:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            expedita voluptatibus reiciendis quisquam modi, autem reprehenderit
            fuga exercitationem omnis aliquid soluta beatae quam amet at eaque
            nesciunt quod culpa ad!
          </p>
        </div>
      </div>
      <div className="mt-[50px]">
        <div className="mb-[50px]">
          <div className="mb-5 flex items-center gap-5">
            <Image
              src="/p1.jpeg"
              alt="img"
              width={50}
              height={50}
              className="h-[50px] rounded-[50%] object-cover"
            />
            <div className="flex flex-col gap-[5px] text-softTextColor">
              <span className="text-[16px] font-medium">Alinur Shayakhmet</span>
              <span className="text-[14px]">13.12.2023</span>
            </div>
          </div>
          <p className="font-light xs:text-[15px] sm:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            expedita voluptatibus reiciendis quisquam modi, autem reprehenderit
            fuga exercitationem omnis aliquid soluta beatae quam amet at eaque
            nesciunt quod culpa ad!
          </p>
        </div>
      </div>
      <div className="mt-[50px]">
        <div className="mb-[50px]">
          <div className="mb-5 flex items-center gap-5">
            <Image
              src="/p1.jpeg"
              alt="img"
              width={50}
              height={50}
              className="h-[50px] rounded-[50%] object-cover"
            />
            <div className="flex flex-col gap-[5px] text-softTextColor">
              <span className="text-[16px] font-medium">Alinur Shayakhmet</span>
              <span className="text-[14px]">13.12.2023</span>
            </div>
          </div>
          <p className="font-light xs:text-[15px] sm:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            expedita voluptatibus reiciendis quisquam modi, autem reprehenderit
            fuga exercitationem omnis aliquid soluta beatae quam amet at eaque
            nesciunt quod culpa ad!
          </p>
        </div>
      </div>
    </div>
  );
}
