import Cards from "./components/cards/Cards";

export interface typeCategory {
  category_id: number;
  name: string;
  cost: string;
  slug: string;
  image_path: string;
}

export default async function Home() {
  async function getData() {
    try {
      const response = await fetch("http://localhost:3000/api/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  const categories = await getData();

  console.log(categories);

  return (
    <>
      <main className="bg-secondarySlate grid place-items-center min-h-dvh">
        <h1 className="m-2 p-2 text-3xl text-slate-100 text-center">
          Hi, Peter
        </h1>
        <div className="flex gap-4 items-center">
          {categories.map((category: typeCategory) => {
            return <Cards category={category} key={category.category_id} />;
          })}
        </div>
      </main>
    </>
  );
}
