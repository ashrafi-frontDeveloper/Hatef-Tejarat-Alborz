import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

  const categories = [
    { label: "Cold rolled carbon steel", img: '/public/images/all-categories/5922741763993356015.jpg'  },
    { label: "Hot rolled carbon steel", img: '/public/images/all-categories/steel-pipes-put-together.jpg'  },
    { label: "Galvanized wire", img: '/public/images/all-categories/Galvanized-wire.jpg' },
    { label: "Galvanized steel",  img: '/public/images/all-categories/bg-metals.jpg' },
    { label: "Color coated steel", img: '/public/images/all-categories/abstract-red-construction-blue-sky.jpg' },
    { label: "Corrugated sheet", img: '/public/images/all-categories/vertical-stripes-iron-material-background.jpg' },
    { label: "Carbon Steel long product", img: '/public/images/all-categories/Stainless steel profile.jpg' },
    { label: "Cold rolled carbon steel", img: '/public/images/all-categories/coldrolled-2.jfif' },
    { label: "Carbon steel profile", img: '/public/images/all-categories/5922741763993355975.jpg'  },
    { label: "Stainless steel rod", img: '/public/images/all-categories/top-view-glasses-abstract-table.jpg' },
  ];

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
        {categories.map((cat, index) => (
          <SwiperSlide key={index} className="mb-14">
            <div className="flex flex-col items-center text-center group py-2 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-2xl shadow-md group-hover:bg-Neutral868686 group-hover:text-white transition-colors">
                <img src={cat.img} alt="categories" className="w-20 h-20 rounded-full" />
              </div>
              <p className="text-xs font-medium text-white mt-2">{cat.label}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
