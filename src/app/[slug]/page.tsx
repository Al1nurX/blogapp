import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";
import Image from "next/image";

export default function SinglePage() {
  return (
    <div className="mb-[20px] mt-[30px]">
      <div className="flex items-center gap-[50px]">
        <div className="flex-1">
          <h1 className="mb-[50px] font-semibold xs:text-xl md:text-[23px] lg:text-3xl xl:text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-[20px]">
            <div className="relative h-[55px] w-[55px]">
              <Image
                src="/p1.jpeg"
                alt="Image"
                fill
                priority
                className="rounded-[50%] object-cover"
              />
            </div>
            <div className="flex flex-col gap-[5px] text-softTextColor">
              <span className="text-[16px] font-medium">Alinur Shayakhmet</span>
              <span className="text-[14px]">13.12.2023</span>
            </div>
          </div>
        </div>
        <div className="relative flex-1 xs:hidden md:block md:h-[250px] lg:h-[310px] xl:h-[340px]">
          <Image
            src="/p1.jpeg"
            alt="Image"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex gap-[50px]">
        <div className="mt-[60px] flex-[5]">
          <div className="">
            <p className="mb-5 font-light lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis
              vero beatae, quos voluptas eligendi nam. Consectetur ad natus
              inventore repudiandae, recusandae porro, sequi amet dolorum iste
              blanditiis harum quas.
            </p>
            <h2 className="font-semibold md:text-lg lg:text-[21px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h2>
            <p className="mb-5 font-light lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis
              vero beatae, quos voluptas eligendi nam. Consectetur ad natus
              inventore repudiandae, recusandae porro, sequi amet dolorum iste
              blanditiis harum quas.
            </p>
            <p className="mb-5 font-light lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis
              vero beatae, quos voluptas eligendi nam. Consectetur ad natus
              inventore repudiandae, recusandae porro, sequi amet dolorum iste
              blanditiis harum quas.
            </p>
          </div>
          <div className="">
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
