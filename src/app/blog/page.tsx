import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export default function BlogPage() {
  return (
    <div className="lg:my-[20px]">
      <h1 className="bg-orange-400 px-[10px] text-center text-white xs:py-[6px] xs:text-base sm:text-lg md:py-[9px] md:text-xl lg:mb-[20px] lg:text-2xl xl:m-0 xl:text-3xl">
        Style Blog
      </h1>
      <div className="flex gap-[50px]">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
