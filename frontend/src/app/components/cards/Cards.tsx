import MegafonoIcon from "../icons/Megafono";
import { typeCategory } from "@/app/page";

export default function Cards({ category }: { category: typeCategory }) {
  const { category_id, name, cost, slug, image_path } = category;

  return (
    <div className="bg-tertiarySlate rounded-xl">
      <img src={image_path} alt="neosmart card" width={250} height={200}></img>
      <div className="p-4">
        <div className="flex justify-between items-center m-2 mb-6">
          <h1 className="text-subcategory">{name}</h1>
          <MegafonoIcon />
        </div>
        <div className="m-2">
          <p className="text-subcategory border-b pb-1">subcategoría</p>
          <p className="text-subcategory border-b pb-1">subcategoría</p>
          <p className="text-subcategory border-b pb-1">subcategoría</p>
        </div>
      </div>
      <div className="flex justify-center p-2 m-2">
        <button className="bg-neoBrandTertiary rounded-sm text-white m-2 mt-6 px-2">
          SEE MORE CATEGORIES
        </button>
      </div>
    </div>
  );
}
