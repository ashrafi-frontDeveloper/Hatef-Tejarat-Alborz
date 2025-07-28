import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import productCategories from "../../../data/ProductData/ProductData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import gsap from "gsap";
import { useRef, useEffect } from "react";

export default function Slider() {
  const textRefs = useRef([]);

  const handleSlideChange = (swiper) => {
    const current = textRefs.current[swiper.realIndex];
    gsap.fromTo(
      current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-auto text-center mb-12 mt-20 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary">
          Our Products
        </h2>
        <p className="text-neutral-600 mt-2 text-base sm:text-lg max-w-2xl mx-auto">
          Explore our range of high-quality metal products tailored for diverse industrial needs.
        </p>
        <div className="w-20 h-[2px] bg-primary mt-4 mx-auto rounded-full" />
      </div>

      <div className="w-full max-w-screen-2xl mx-auto shadow-xl rounded-lg overflow-hidden">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          navigation
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          effect="creative"
          creativeEffect={{
            prev: { shadow: true, translate: ["-20%", 0, -1] },
            next: { translate: ["100%", 0, 0] },
          }}
          fadeEffect={{ crossFade: true }}
          speed={1200}
          onSlideChange={handleSlideChange}
          className="overflow-hidden"
        >
          {productCategories.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative group">
                <img
                  src={item.img}
                  alt={item.category}
                  className="w-full h-[400px] object-cover"
                />
                <div
                  ref={(el) => (textRefs.current[index] = el)}
                  className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:w-1/2 bg-white/90 backdrop-blur-md text-neutral rounded-lg px-5 py-4 shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {item.category}
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed line-clamp-3">
                    {item.introduce}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
