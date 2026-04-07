import React from "react";
import ProductDetails from "./CoffeeCard";
import CoffeeCard from "./CoffeeCard";

const PopularProducts = ({ coffees }) => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-gray-500 text-sm tracking-widest">
          --- Sip & Savor ---
        </p>
        <h2 className="rancho text-5xl text-[#1a3a4a] mt-2 mb-6">
          Our Popular Products
        </h2>
        <button className="bg-[#D2B48C] hover:bg-[#c19a6b] text-white px-6 py-3 rounded transition-colors font-medium">
          All Coffee →
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coffees.map((coffee, idx) => (
          <CoffeeCard key={idx} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
