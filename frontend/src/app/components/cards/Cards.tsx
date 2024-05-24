import MegafonoIcon from "../icons/Megafono";
import CoheteIcon from "../icons/CoheteIcon";
import PeopleIcon from "../icons/PeopleIcon";
import LegalIcon from "../icons/LegalIcon";
import { typeCategory } from "@/app/lib/fetch";

export default function Cards({ category }: { category: typeCategory }) {
  const { category_id, name, cost, slug, image_path, subname } = category;

  return (
    <div className="dark:bg-tertiarySlate bg-slate-100 rounded-xl">
      <img src={image_path} alt="neosmart card" className="max-w-[250px]"></img>
      <div className="p-4">
        <div className="flex justify-between items-center m-2 mb-6">
          <h1 className="dark:text-subcategory text-fillicon font-bold">{name}</h1>
          {category_id === 1 ? <MegafonoIcon /> : null}
          {category_id === 2 ? <CoheteIcon /> : null}
          {category_id === 3 ? <PeopleIcon /> : null}
          {category_id === 4 ? <LegalIcon /> : null}
        </div>
        <div className="max-w-[200px]">
          <p className="dark:text-subcategory  text-fillicon border-b pb-1">{subname}</p>
          <p className="dark:text-subcategory text-fillicon border-b pb-1">{slug}</p>
          <p className="dark:text-subcategory text-fillicon border-b pb-1">{cost}a</p>
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
