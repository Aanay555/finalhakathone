import { NextPage } from "next";
import AboutSection from '../components/aboutSection'
import Image from "next/image";

const About: NextPage = () => (
  <div>
       {/* About Section */}
<div className="max-w-7xl mx-auto px-4 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-teal-600 text-white p-12 rounded-lg flex flex-col justify-between">
      <h2 className="text-3xl font-bold mb-4">About Us - Comforty</h2>
      <p className="mb-6">
        At Comforty we believe that the right chair can transform your space and elevate your comfort.
        Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs
        that seamlessly blend style with functionality.
      </p>
      <button className="bg-teal-700 hover:bg-teal-800 px-6 py-2 rounded">
        View Collection
      </button>
    </div>
    <div className="bg-gray-200 rounded-lg flex items-center justify-center">
      <Image
        src="/imageBlock.png"
        alt="chair"
        className="w-full h-auto max-w-[619px] max-h-[478px]"
      />
    </div>
  </div>
</div>

      <AboutSection />
  </div>
  
);

export default About;
