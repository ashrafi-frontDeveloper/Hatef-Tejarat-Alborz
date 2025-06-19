import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productCategories from '../../data/ProductData/ProductData';

export default function DetailsProducts() {
  const { category } = useParams(); // category = slug محصول

  // پیدا کردن محصول در تمام زیرمجموعه‌ها
  let product = null;
  let parentCategory = null;

  for (let cat of productCategories) {
    const found = cat.products.find((p) => p.slug === category);
    if (found) {
      product = found;
      parentCategory = cat;
      break;
    }
  }

  if (!product) return <p className="p-6 text-red-600">محصول مورد نظر یافت نشد.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {parentCategory && (
        <div className="mb-6">
          <Link
            to={`/products/steel`}
            className="inline-flex items-center gap-2 text-sm text-secondary hover:underline hover:text-info transition"
          >
            ← Back to {parentCategory.category}
          </Link>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center gap-x-2 shadow-md border border-secondary rounded-2xl overflow-hidden md:h-[550px]">
        {/* Right: Image */}
        <div className="w-full md:w-1/2 h-64 md:h-full flex justify-center items-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Left: Content */}
        <div className="w-full md:w-1/2 h-full p-4 flex flex-col justify-between space-y-5">
          <h2 className="text-xl md:text-3xl font-bold text-white pt-2">{product.name}</h2>

          <div className="border border-white/20 p-4 rounded-xl text-lg text-white">
            {product.description}
          </div>

          {parentCategory && (
            <div className="text-lg font-bold text-gray-200 italic">
              Category: {parentCategory.category}
            </div>
          )}

          <Link
            to="/order"
            className="mt-4 text-base md:text-lg font-medium px-4 py-2 text-secondary bg-white rounded-xl text-center hover:bg-secondary hover:text-white transition-all duration-300"
          >
            Order
          </Link>
        </div>
      </div>

      {/* Related Products */}
      {parentCategory && parentCategory.products.length > 1 && (
        <div className="mt-12">
          <h3 className="text-xl font-bold text-secondary mb-4">
            Other products in {parentCategory.category}:
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {parentCategory.products
              .filter(p => p.slug !== product.slug) // حذف محصول فعلی
              .map(related => (
                <div
                  key={related.id}
                  className="border rounded-xl shadow p-4 bg-base-100"
                >
                  <img
                    src={related.img}
                    alt={related.name}
                    className="rounded-md h-40 w-full object-cover mb-3"
                  />
                  <h4 className="font-semibold text-lg">{related.name}</h4>
                  <p className="text-sm line-clamp-2 text-gray-500">{related.description}</p>
                  <Link
                    to={`/products/details/${related.slug}`}
                    className="inline-block mt-2 text-sm px-3 py-1 bg-secondary text-white rounded"
                  >
                    View
                  </Link>
                </div>
              ))}
          </div>
        </div>
      )}

    </div>
  );
}
