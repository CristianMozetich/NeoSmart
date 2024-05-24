"use client";
import { useFetchCategories } from "./lib/fetch";
import { useFetchUser } from "./lib/fetch";
import Cards from "./components/cards/Cards";
import { typeUser } from "./lib/fetch";
import { typeCategory } from "./lib/fetch";

export default function Home() {
  const { categories } = useFetchCategories();
  const { user } = useFetchUser();

  return (
    <main className="dark:bg-secondarySlate bg-slate-100 flex place-content-center min-h-dvh">
      <div className="grid items-center">
        <h1 className="m-2 p-2 text-3xl text-slate-100 text-center">
          {user.map((user: typeUser) => {
            return <p key={user.id}>Hi, {user.name}</p>;
          })}
        </h1>
        <div className="flex gap-4 items-center">
          {categories.map((category: typeCategory) => {
            return <Cards category={category} key={category.category_id} />;
          })}
        </div>
      </div>
    </main>
  );
}
