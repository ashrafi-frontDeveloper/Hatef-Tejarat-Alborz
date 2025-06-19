import React from "react";
import productCategories from "../../../data/ProductData/ProductData";
import { Link } from "react-router-dom";

export default function ProductList() {
  return (
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          {/* Title */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-medium text-secondary">Products</h3>
            <div className="w-full h-[2px] bg-secondary mt-2"></div>
          </div>

          {/* Products */}
          {productCategories.map(({ id, category, introduce, advantage, application, img }) => (
            <div
              key={id}
              className="flex flex-col md:flex-row items-center gap-x-2 shadow-md border border-secondary rounded-2xl overflow-hidden md:h-[550px]"
            >
              {/* Right: Image */}
              <div className="w-full md:w-1/2 h-64 md:h-full flex justify-center items-center">
                <img
                  src={img}
                  alt={category}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Left: Content */}
              <div className="w-full md:w-1/2 h-full p-4 flex flex-col justify-between ">
                <h2 className="text-xl md:text-3xl font-bold text-white mb-4 pt-2">{category}</h2>
                
                {/* descriptions */}
                <div className="space-y-3">
                  <div>
                    <span className="text-white font-bold">INTRODUCE :</span>
                    <p className="text-white line-clamp-3">{introduce}</p>
                  </div>
                  <div>
                    <span className="text-white font-bold">ADVANTAGE :</span>
                    <p className="text-white line-clamp-3">{advantage}</p>
                  </div>
                  <div>
                    <span className="text-white font-bold">APPLICATIONS :</span>
                    <p className="text-white line-clamp-3">{application}</p>
                  </div>
                </div>

                <Link
                  to="/products/steel"
                  className="mt-4 text-base md:text-lg font-medium px-4 py-2 text-secondary bg-white rounded-xl text-center hover:bg-secondary hover:text-white transition-all duration-300"
                >
                  See more
                </Link>
              </div>
            </div>
          ))}
        </div>
  );
}
