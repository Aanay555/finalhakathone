import { NextPage } from "next";

import ProductCard from "../app/components/ProductCard";
import Image from "next/image";

const Home: NextPage = () => (
  <div>
    {/* Header Section */}
    <header className="relative flex flex-wrap justify-between items-center bg-gray-50 px-6 py-16 lg:px-10 lg:py-20">
  {/* Left Section */}
  <div className="w-full lg:w-1/2 flex flex-col justify-center items-start mb-6 lg:mb-0">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">
      Best Furniture Collection For Your Interior.
    </h1>
    <p className="text-lg text-gray-600 mb-6">
      Explore our premium collection of furniture designed to elevate the aesthetic of your living space.
    </p>
    <button className="bg-teal-500 text-white py-2 px-6 rounded-md text-lg flex items-center">
      Shop Now
      <span className="ml-2">→</span>
    </button>
  </div>

  {/* Right Section */}
  <div className="w-full lg:w-1/2 flex justify-center items-center">
    <Image
      src="/ProductImage.png"
      alt="Chair"
      width={434}
      height={584}
      className="rounded-xl"
    />
  </div>
</header>


    {/* Featured Products Section */}
    <section className="my-10 px-6 lg:px-10">
      <h2 className="text-2xl font-semibold mb-5">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <ProductCard title="Library Stool Chair" price="20" image="/chair1.png" />
        <ProductCard title="Library Stool Chair" price="20" image="/chair2.png" />
        <ProductCard title="Library Stool Chair" price="20" image="/chair3.png" />
        <ProductCard title="Library Stool Chair" price="20" image="/chair4.png" />
      </div>
    </section>

    {/* Top Categories Section */}
    <section className="my-10 px-6 lg:px-10">
      <h2 className="text-2xl font-semibold mb-5">Top Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {[
          { image: "/office-chair.png", label: "Wing Chair" },
          { image: "/table-set.png", label: "Wooden Chair" },
          { image: "/desk-chair.png", label: "Desk Chair" },
          { image: "/chair4.png", label: "Desk Chair" },
        ].map(({ image, label }, index) => (
          <div key={index} className="relative">
            <Image src={image} alt={label} className="w-full h-48 object-cover rounded-lg" />
            <div className="absolute bottom-0 left-0 p-3 text-white bg-black bg-opacity-60 rounded-b-lg">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-gray-100 py-10">
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center justify-center md:flex-row gap-4">

        {/* Left Section: Vertical Text */}
        <div className="writing-mode-vertical-rl transform rotate-180 md:text-left text-center mb-4 md:mb-0">
          <h3 className="text-xl font-semibold">Explore new and popular styles</h3>
        </div>

        {/* Large Image Section */}
        <div className="md:col-span-2 mb-4 md:mb-0">
          <Image
            src="/chair3.png"
            alt="Large orange chair"
            width={648}
            height={648}
            className="rounded shadow-lg mx-auto"
          />
        </div>

        {/* Right Grid Section */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
          <Image
            src="/brown-chair.png"
            alt="White tufted chair"
            width={312}
            height={312}
            className="rounded shadow-lg"
          />
          <Image
            src="/chair4.png"
            alt="Rustic white chair"
            width={312}
            height={312}
            className="rounded shadow-lg"
          />
          <Image
            src="/white-chair.png"
            alt="Gray upholstered chair"
            width={312}
            height={312}
            className="rounded shadow-lg"
          />
          <Image
            src="/white-chair.png"
            alt="Rustic white chair 2"
            width={312}
            height={312}
            className="rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
</section>


    {/* All Products Section */}
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">All Products</h2>
      <div className="px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { title: "Library Stool Chair", price: "20", img: "/chair1.png" },
            { title: "Library Stool Chair", price: "20", img: "/chair2.png" },
            { title: "Library Stool Chair", price: "20", img: "/chair3.png" },
            { title: "Library Stool Chair", price: "20", img: "/chair4.png" },
            { title: "Desk Chair", price: "20", img: "/desk-chair.png" },
            { title: "Library Chair", price: "50", img: "/liabrarychair.png" },
            { title: "Library Stool", price: "30", img: "/liabrarystool.png" },
            { title: "White Chair", price: "30", img: "/white-chair.png" },
          ].map(({ title, price, img }, index) => (
            <ProductCard key={index} title={title} price={price} image={img} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Home;
