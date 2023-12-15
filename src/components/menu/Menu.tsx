import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

export default function Menu() {
  return (
    <div className="flex-[2] xs:hidden lg:my-[20px] lg:block xl:my-[50px]">
      <h2 className="text-base font-normal text-gray-500 lg:mt-[45px] xl:m-0">
        {"What's hot?"}
      </h2>
      <h1 className="font-semibold lg:text-[22px] xl:text-[25px]">
        Most Popular
      </h1>
      <MenuPosts withImage={false} />
      <h2 className="text-base font-normal text-gray-500">Discover by topic</h2>
      <h1 className="font-semibold lg:text-[22px] xl:text-[25px]">
        Categories
      </h1>
      <MenuCategories />
      <h2 className="text-base font-normal text-gray-500">
        Chosen by the editor
      </h2>
      <h1 className="font-semibold lg:text-[22px] xl:text-[25px]">
        Editors Pick
      </h1>
      <MenuPosts withImage={true} />
    </div>
  );
}
