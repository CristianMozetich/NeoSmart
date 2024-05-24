import MegafonoIcon from "../icons/Megafono";
import { typeCategory } from "@/app/lib/fetch";

export default function Cards({ category }: { category: typeCategory }) {
  const { category_id, name, cost, slug, image_path, subname } = category;

  return (
    <div className="bg-tertiarySlate rounded-xl h-full">
      <img src={image_path} alt="neosmart card" width={250} height={200}></img>
      <div className="p-4">
        <div className="flex justify-between items-center m-2 mb-6">
          <h1 className="text-subcategory">{name}</h1>
          <MegafonoIcon />
        </div>
        <div className="max-w-[200px]">
          <p className="text-subcategory border-b pb-1">{subname}</p>
          <p className="text-subcategory border-b pb-1">{slug}</p>
          <p className="text-subcategory border-b pb-1">{cost}a</p>
        </div>
      </div>
      <div className="flex justify-center p-2 m-2">
        <button className="bg-neoBrandTertiary rounded-sm text-white m-2 px-2">
          SEE MORE CATEGORIES
        </button>
      </div>
    </div>
  );
}
