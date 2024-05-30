"use client";
import SideBar from "./components/sidebar/SideBar";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import {
  useFetchCategories,
  useFetchUser,
  typeUser,
  typeCategory,
} from "./lib/fetch";
import Cards from "./components/cards/Cards";
import { useState } from "react";

export default function Home() {
  const { categories } = useFetchCategories();
  const { user } = useFetchUser();
  const [asideResponsive, setAsideResponsive] = useState(false);

  const handleAsideResponsive = () => {
    setAsideResponsive(!asideResponsive);
  };

  return (
    <div className="flex overflow-hidden">
      {/* Navbar */}
      <NavBar
        handleAsideResponsive={handleAsideResponsive}
        asideResponsive={asideResponsive}
      />
      {/* Sidebar */}
      <SideBar asideResponsive={asideResponsive} />

      {/* Main  */}
      <main className="flex flex-col h-dvh md:h-full bg-lightbg dark:bg-secondarySlate">
        {/* Main  */}
        <div className="flex-grow mt-12 md:h-screen flex flex-col">
          <h1 className="m-4 p-2 text-3xl text-slate-100 text-center">
            {user.map((user: typeUser) => (
              <p
                className="font-semibold dark:text-white text-fillicon animate-fade-left"
                key={user.id}
              >
                Hi, {user.name}
              </p>
            ))}
          </h1>
          <div className="flex gap-6 m-4 p-4 items-center justify-center flex-wrap">
            {categories.map((category: typeCategory) => (
              <Cards category={category} key={category.category_id} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
