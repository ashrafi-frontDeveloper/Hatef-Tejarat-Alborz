import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import productCategories from "../../../data/ProductData/ProductData";
import { Link } from "react-router-dom";

export default function CategorySlider() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-extrabold text-primary mb-8 text-left"
      >
        Categories
      </motion.h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          480: { slidesPerView: 4 },
          640: { slidesPerView: 5 },
          768: { slidesPerView: 6 },
          1024: { slidesPerView: 8 },
        }}
        className="mySwiper"
      >
        {productCategories.map((cat, index) => (
          <SwiperSlide key={index} className="mb-14">
            <Link to={`/products/category/${cat.slug}`}>
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                  <img
                    src={cat.img}
                    alt={cat.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="mt-4 text-sm font-semibold text-neutral group-hover:text-primary transition-colors duration-300">
                  {cat.category}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
