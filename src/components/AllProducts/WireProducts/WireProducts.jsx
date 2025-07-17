import React from 'react';
import productCategories from '../../../data/ProductData/ProductData';
import { Link } from 'react-router-dom';

export default function AllProductsWire() {
  const wireCategories = productCategories.filter(
    category => category.type === 'wire'
  );

  if (wireCategories.length === 0) {
    return <p className="text-center">No wire categories found.</p>;
  }

  return (
    <div className="max-[1280px] mx-auto px-4 sm:px-6 lg:px-8 my-20">
      {/* Title */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-medium text-neutral">Wire Products</h3>
        <div className="w-full h-[2px] bg-neutral mt-2"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] lg:grid-cols-4 gap-2.5">
        {wireCategories.map(category => (
          <div
            key={category.id}
            className="card bg-base-100 w-full sm:w-64 lg:w-72 shadow-sm border border-neutral"
          >
            <figure className="px-5 xl:px-10 pt-5 xl:pt-10">
              <img
                src={category.img}
                alt={category.category}
                className="rounded-xl aspect-video object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title line-clamp-2">{category.category}</h2>
              <p className="line-clamp-3">{category.introduce}</p>
              <div className="card-actions">
                <Link to={`/products/category/${category.slug}`} className="btn btn-neutral text-primary mt-2">
                  View Category
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
