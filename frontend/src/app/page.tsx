"use client";
import SideBar from "./components/sidebar/SideBar";
import Footer from "./components/footer/Footer";
import { useFetchCategories, useFetchUser, typeUser, typeCategory } from "./lib/fetch";
import Cards from "./components/cards/Cards";

export default function Home() {
  const { categories } = useFetchCategories();
  const { user } = useFetchUser();

  return (
    <div className="flex overflow-hidden">
      {/* Sidebar */}
      <SideBar />

      {/* Main  */}
      <div className="flex flex-col items-center justify-between bg-lightbg dark:bg-secondarySlate">
        {/* Main  */}
        <div className="flex-grow h-dvh flex flex-col items-center justify-center">
          <h1 className="m-2 p-2 text-3xl text-slate-100 text-center">
            {user.map((user: typeUser) => (
              <p className="font-bold" key={user.id}>
                Hi, {user.name}
              </p>
            ))}
          </h1>
          <div className="flex gap-4 items-center justify-center flex-wrap">
            {categories.map((category: typeCategory) => (
              <Cards category={category} key={category.category_id} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

