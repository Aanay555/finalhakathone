

import ProductCard from "@/app/components/ProductCard";

import Image from "next/image";

export default function ProductPage() {
  return ( 
    <div>
           {/* Main Content */}
      <main className="container mx-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Product Image */}
          <div className="bg-white p-4 shadow rounded">
            <Image
              src="/pink-chair.png"
              alt="Library Stool Chair"
              className="w-full h-auto rounded"
            />
            
  
             </div> 
               {/* Product Details */}
    <div>
            <h1 className="text-3xl font-bold text-gray-900">Library Stool Chair</h1>
            <p className="text-teal-600 text-xl font-semibold mt-2">$20.00 USD</p>
            <p className="text-gray-700 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <button className="bg-teal-600 text-white py-2 px-4 rounded mt-6 hover:bg-teal-700">
              Add To Cart
            </button>
          </div>     
          </div>   
             {/* Featured Products */}
        <section className="mt-16">
    <div>
         
      <h2 className="text-2xl font-semibold">Featured Products</h2><span className="flex justify-end">View All</span></div>
 
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5">
        <ProductCard title="Library Stool Chair" price="20" image="/chair1.png"  />
        <ProductCard title="Library Stool Chair" price="20" image="/chair2.png"  />
        <ProductCard title="Library Stool Chair" price="20" image="/chair3.png"  />
        <ProductCard title="Library Stool Chair" price="20" image="/chair4.png"  />
        
      </div>
   
        
        </section>    
          </main>
          
    </div>
  );
}
