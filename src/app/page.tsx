import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className="">
      <Featured />
      <CategoryList />
      <div className="flex gap-[50px]">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
