import React from 'react'

export default function Categories() {
  return (
        <div className="max-w-[1280px] mx-auto px-4 py-6 mt-10">
            {/* Title */}
            <div className="text-center mb-8">
                <h3 className="text-2xl font-medium text-secondary">Our Categories</h3>
                <div className="w-full h-[2px] bg-secondary mt-2"></div>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Category Card 1 */}
                <div className="relative group overflow-hidden rounded-lg cursor-pointer h-3/5">
                    <img
                    src="/images/categories/5922741763993356015.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 h-full w-full bg-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                    {/* Button on hover */}
                    <div className="absolute inset-0 h-full w-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <a
                        href="/all-categories"
                        className="bg-white text-secondary font-semibold py-2 px-4 rounded shadow hover:bg-secondary hover:text-white transition-all duration-300"
                    >
                        View all products
                    </a>
                    </div>
                </div>

                {/* Category Card 2 */}
                <div className="relative group overflow-hidden rounded-lg cursor-pointer h-3/5">
                    <img
                    src="/images/categories/manufacturer and supplier of steel wire annealed wire galvanized wire.jfif"
                    alt=""
                    className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 h-full w-full bg-secondary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                    {/* Button on hover */}
                    <div className="absolute inset-0 h-full w-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <a
                        href="/all-categories"
                        className="bg-white text-secondary font-semibold py-2 px-4 rounded shadow hover:bg-secondary hover:text-white transition-all duration-300"
                    >
                        View all products 
                    </a>
                    </div>
                </div>
            </div>


        </div>
  )
}
