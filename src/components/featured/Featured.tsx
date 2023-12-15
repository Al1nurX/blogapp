import Image from "next/image";

export default function Featured() {
  return (
    <div className="mt-[30px]">
      <h1 className="xs:text-lg sm:text-xlƒ md:text-3xl lg:text-[40px] lg:leading-none xl:text-[55px]">
        <strong>Hey, Alinur dev here!</strong> Discover my stories and creative
        ideas.
      </h1>
      <div className="flex items-center gap-[50px] xs:mt-7 xs:flex-col xs:text-left sm:mt-9 md:mt-[60px] md:flex-row">
        <div className="relative xs:h-[190px] xs:w-full sm:h-[250px] md:h-[280px] md:flex-1 lg:h-[400px] xl:h-[430px]">
          <Image
            className="object-cover"
            src="/p1.jpeg"
            alt="Image"
            fill
            priority
          />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <h1 className="font-semibold sm:text-lg md:text-xl lg:text-3xl xl:text-[36px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className="font-light text-softTextColor md:text-xs lg:text-sm xl:text-[16px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            exercitationem quaerat harum voluptas sunt nemo, facere autem?
            Laboriosam non debitis dolores dicta a sunt eligendi minima
            inventore. Itaque, officia hic!
          </p>
          <button className="w-max rounded-[5px] border xs:px-1 xs:py-1 md:px-2 md:py-1 xl:px-4 xl:py-3">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
