import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";
import productCategories from '../../../data/ProductData/ProductData';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <>
      {productCategories
        .filter((product, index) => index < 10) // نمایش فقط 10 تا
        .map((product) => (
                <div
                  key={product.id}
                  className="card bg-base-100 w-full sm:w-64 lg:w-72 shadow-sm border border-secondary"
                >
                  {/* تصویر و اطلاعات کلی دسته */}
                  <figure className="px-5 xl:px-10 pt-5 xl:pt-10">
                    <img
                      src={product.img}
                      alt={product.category}
                      className="rounded-xl aspect-video object-cover"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title line-clamp-2">{product.category}</h2>
                    <p className="line-clamp-3">{product.introduce}</p>

                    {/* محصولات زیر مجموعه (products) */}
                    <ul className="mt-4 text-sm text-left w-full list-disc list-inside space-y-1">
                      {product.products.slice(0, 3).map((prod) => (
                        <li key={prod.id} className="text-gray-500">
                          {prod.name}
                        </li>
                      ))}
                    </ul>

                    {/* دکمه جزییات */}
                    <div className="card-actions mt-4">
                      <Link to={`/products/category/${product.slug}`} className="btn btn-info btn-sm">
                        View Category
                      </Link>
                    </div>
                  </div>
                </div>
      ))}
    </>
  );
};

export default function SteelProducts() {
  return (
    <div className="max-[1280px] mx-auto px-4 sm:px-6 lg:px-8 my-20">
      {/* Title */}
      <div className="text-center mb-8">
          <h3 className="text-2xl font-medium text-secondary">Steel Products</h3>
          <div className="flex items-center justify-end gap-x-1 mt-3">
            <Link to="/products/steel" className="text-lg hover:text-info">View all</Link>
            <HiArrowLongRight className='w-7 h-7' />
          </div>
        <div className="w-full h-[2px] bg-secondary mt-2"></div>
      </div>
      {/* Products */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] 2xl:grid-cols-5 gap-5">
        <Card />
      </div>
    </div>
  );
}