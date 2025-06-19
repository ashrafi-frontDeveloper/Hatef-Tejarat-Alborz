import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import productCategories from "../../../data/ProductData/ProductData";
import { Link } from "react-router-dom";

export default function CategorySlider() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      <h2 className="text-xl font-bold text-white mb-4">Categories</h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          480: { slidesPerView: 4 },
          768: { slidesPerView: 6 },
          1024: { slidesPerView: 8 },
        }}
        className="mySwiper"
      >
        {productCategories.map((cat, index) => (
          <SwiperSlide key={index} className="mb-14">
            <Link to={`/products/category/${cat.slug}`}>
              <div className="flex flex-col items-center text-center group py-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-2xl shadow-md group-hover:bg-Neutral868686 group-hover:text-white transition-colors">
                  <img src={cat.img} alt={cat.category} className="w-20 h-20 rounded-full" />
                </div>
                <p className="text-xs font-medium text-white mt-2">{cat.category}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
