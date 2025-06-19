import React from 'react'
import wire from '../../../data/WireProduct/WireProducts';
import Navbar from '../../Header/Navbar/Navbar'
import Footer from '../../Footer/Footer'
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <>
      {wire.map(product => (
        <div key={product.id} className="card bg-base-100 w-full sm:w-64 lg:w-72 shadow-sm border border-secondary">
          <figure className="px-5 xl:px-10 pt-5 xl:pt-10">
            <img src={product.img} alt={product.title} className="rounded-xl aspect-video object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title line-clamp-2">{product.title}</h2>
            <p className='line-clamp-3'>{product.intro}</p>
            <div className="card-actions">
              <Link to='/products/details' className="btn btn-info">Details</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default function AllProductsWire() {
  return (
    <>

        <div className="max-[1280px] mx-auto px-4 sm:px-6 lg:px-8 my-20">
        {/* Title */}
        <div className="text-center mb-8">
            <h3 className="text-2xl font-medium text-secondary">Wire Products</h3>
            <div className="w-full h-[2px] bg-secondary mt-2"></div>
        </div>
        {/* Products */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-7">
            <Card />
        </div>
        </div>

    </>
  );
}