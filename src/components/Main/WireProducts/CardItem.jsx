import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = ({ id, number, title, description, imageSrc, slug }) => {
  return (
    <div className="item w-full h-full flex flex-col sm:flex-row absolute inset-0 shadow-[rgba(149,157,165,0.2)_0px_8px_24px] overflow-hidden">
      {/* Media (Image) - Order it first on small screens, second on larger screens */}
      <img
        src={imageSrc}
        alt={title}
        loading="lazy"
        className="item_media object-cover w-full h-1/2 sm:w-1/2 sm:h-full order-1 sm:order-2"
      />

      {/* Content - Order it second on small screens, first on larger screens */}
      <div className="item_content bg-neutral text-[#292929] flex flex-col justify-center items-start p-6 sm:p-12 relative w-full h-1/2 sm:w-1/2 sm:h-full order-2 sm:order-1">
        <h2 className='text-xl sm:text-3xl text-primary mb-2 sm:mb-4'>{title}</h2>
        <p className="item_p text-sm sm:text-lg mb-2 sm:mb-4 text-primary">
          {description}
        </p>
        <div className="card-actions mt-auto sm:mt-0"> {/* Use mt-auto to push button to bottom on mobile if content is short */}
          <Link to={`/products/category/${slug}`} className="px-4 py-2 sm:px-6 sm:py-3 rounded-md btn btn-neutral text-primary btn-sm sm:btn-md border-white/45 transition-colors">
            View Category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardItem;