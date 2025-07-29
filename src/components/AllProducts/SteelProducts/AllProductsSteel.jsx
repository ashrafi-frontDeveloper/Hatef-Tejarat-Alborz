import React from 'react'
import productCategories from '../../../data/ProductData/ProductData'
import { Link } from 'react-router-dom'

const Card = () => {
  const steelCategories = productCategories.filter(
    category => category.type === 'steel'
  )
  const allSteelProducts = steelCategories.flatMap(category => category.products || [])

  if (allSteelProducts.length === 0) {
    return <p className="text-center col-span-full text-gray-500">No steel products found.</p>
  }

  return (
    <>
      {allSteelProducts.map(product => (
        <div
          key={product.id}
          className="card bg-white border border-base-300 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300"
        >
          <figure className="p-5">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg"
            />
          </figure>
          <div className="card-body text-center px-5 pb-6">
            <h2 className="text-base font-semibold text-neutral line-clamp-2 mb-1">{product.name}</h2>
            <p className="text-sm text-gray-500 line-clamp-3">{product.description}</p>
            <div className="mt-4">
              <Link
                to={`/products/details/${product.slug}`}
                className="btn btn-neutral w-full text-white hover:text-primary"
              >
                View Category
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default function AllProductsSteel() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      {/* Title */}
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-neutral">Steel Products</h3>
        <div className="mt-2 h-1 w-24 mx-auto bg-primary rounded"></div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
        <Card />
      </div>
    </div>
  )
}