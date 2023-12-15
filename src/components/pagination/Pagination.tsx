export default function Pagination() {
  return (
    <div className="flex justify-between">
      <button className="w-[100px] bg-red-500 text-white xs:p-[5px] sm:p-[6px] md:p-[7px] lg:p-[8px] xl:p-[9px]">
        Previous
      </button>
      <button className="w-[100px] bg-red-500 text-white xs:p-[5px] sm:p-[6px] md:p-[7px] lg:p-[8px] xl:p-[9px]">
        Next
      </button>
    </div>
  );
}
