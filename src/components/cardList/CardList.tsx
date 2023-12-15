import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

export default function CardList() {
  return (
    <div className="flex-[5]">
      <h1 className="my-[50px] font-semibold xs:text-xl lg:text-3xl xl:text-4xl">
        Recent Posts
      </h1>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
}
