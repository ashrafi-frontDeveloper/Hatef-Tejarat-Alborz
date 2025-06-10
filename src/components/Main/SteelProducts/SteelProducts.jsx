import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";

const Card = () => {
  return (
    // <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    //   <a href="#">
    //     <img className="rounded-t-lg h-48 w-full" src="/public/images/categories/steel/5922741763993356019.jpg" alt="" />
    //   </a>
    //   <div className="p-5">
    //     <a href="#">
    //       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //         Noteworthy technology
    //       </h5>
    //     </a>
    //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //       Here are the biggest enterprise tec21 so far, in reverse chronological order.
    //     </p>
    //     <a
    //       href="#"
    //       className="inline-flex items-center text-base px-3 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     >
    //       See more
    //       <MdArrowRightAlt className='w-5 h-5 ml-5' />
    //     </a> 
    //   </div>
    // </div>
    <div className="card bg-base-100 w-96 shadow-sm border border-secondary">
  <figure className="px-10 pt-10">
    <img
      src="/public/images/all-categories/5922741763993355975.jpg"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  );
};


export default function SteelProducts() {
  return (
    <div className='max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 my-20'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2.5">
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}
