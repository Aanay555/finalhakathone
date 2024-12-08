import { NextPage } from "next";

import ProductCard from "../components/ProductCard";

const Shop: NextPage = () => (
  <div>
    
    <header className="bg-gray-200 p-10 text-center">
      <h1 className="text-4xl font-semibold">Shop Our Collection</h1>
    </header>

    <section className="my-10 px-5">
      <h2 className="text-2xl font-semibold">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5">
        <ProductCard title="Library Stool Chair" price="20" image="/chair.jpg" />
        <ProductCard title="Library Stool Chair" price="20" image="/chair.jpg" />
        <ProductCard title="Library Stool Chair" price="20" image="/chair.jpg" />
        <ProductCard title="Library Stool Chair" price="20" image="/chair.jpg" />
      </div>
    </section>
  </div>
);

export default Shop;
