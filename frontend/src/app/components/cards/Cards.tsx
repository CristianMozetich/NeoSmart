import MegafonoIcon from "../icons/Megafono";
import CoheteIcon from "../icons/CoheteIcon";
import PeopleIcon from "../icons/PeopleIcon";
import LegalIcon from "../icons/LegalIcon";
import { typeCategory } from "@/app/lib/fetch";
import Image from "next/image";

//Card con las categorías de la API 
export default function Cards({ category }: { category: typeCategory }) {
  const { category_id, name, cost, slug, image_path, subname } = category;

  return (
    <div className="dark:bg-tertiarySlate bg-cardwhite rounded-2xl animate-fade-up">
      <Image src={image_path} width={250} height={250} alt="neosmart card"></Image>
      <div className="p-4">
        <div className="flex justify-between items-center m-2 mb-6">
          <h1 className="dark:text-subcategory text-neoBrandTertiary font-semibold">
            {name}
          </h1>
          {category_id === 1 ? <MegafonoIcon /> : null}
          {category_id === 2 ? <CoheteIcon /> : null}
          {category_id === 3 ? <PeopleIcon /> : null}
          {category_id === 4 ? <LegalIcon /> : null}
        </div>
        <div className="max-w-[200px]">
          <p className="text-subcategory border-b pb-1">{subname}</p>
          <p className="text-subcategory border-b pb-1">{slug}</p>
          <p className="text-subcategory border-b pb-1">{cost}a</p>
        </div>
      </div>
      <div className="flex justify-center p-2 m-2">
        <button className="bg-neoBrandTertiary hover:text-fillicon rounded-sm text-white m-2 px-2 hover:translate-y-[-0.2rem] transition-all">
          SEE MORE CATEGORIES
        </button>
      </div>
    </div>
  );
}
