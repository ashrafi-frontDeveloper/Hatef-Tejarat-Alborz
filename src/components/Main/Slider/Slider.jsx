// // components/ImageSlider.jsx
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Autoplay, EffectFade } from 'swiper/modules'
// import productCategories from '../../../data/ProductData/ProductData'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/effect-fade'


// export default function Slider() {
//   return (
//     <>
//         {/* Title */}
//         <div className="max-w-[1280px] mx-auto text-center mb-8 mt-20">
//             <h3 className="text-2xl font-medium text-neutral">Our Products</h3>
//             <div className="w-full h-[2px] bg-neutral mt-2"></div>
//         </div>
//         {/* slider */}
//         <div className="w-full mx-auto shadow-2xl">
//             <Swiper
//                 modules={[Navigation, Autoplay, EffectFade]}
//                 navigation
//                 autoplay={{ delay: 3000, disableOnInteraction: false }}
//                 loop={true}
//                 effect="fade"
//                 fadeEffect={{ crossFade: true }}
//                 speed={2000} 
//                 className="overflow-hidden"
//             >
//                 {productCategories.map((image, index) => (
//                 <SwiperSlide key={index}>
//                     <div className="relative">
//                     <img
//                         src={image.img}
//                         alt={image.category}
//                         className="w-full h-[400px] object-cover"
//                     />
//                     <a href='#' className="p-2.5 absolute bottom-4 left-4 text-primary w-1/2 bg-neutral px-5 rounded-md text-2xl font-bold drop-shadow-md">
//                         {image.category}
//                         <p className="text-sm text-primary line-clamp-2">{image.introduce}</p>
//                     </a>
//                     </div>
//                 </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     </>
//   )
// }

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import productCategories from '../../../data/ProductData/ProductData';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

export default function Slider() {
  const textRefs = useRef([]);

  const handleSlideChange = (swiper) => {
    const current = textRefs.current[swiper.realIndex];
    gsap.fromTo(
      current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  };

  return (
    <>
      <div className="max-w-[1280px] mx-auto text-center mb-8 mt-20">
        <h3 className="text-2xl font-medium text-neutral">Our Products</h3>
        <div className="w-full h-[2px] bg-neutral mt-2"></div>
      </div>

      <div className="w-full mx-auto shadow-2xl">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          effect='creative'
          creativeEffect={{
            prev: { shadow: true, translate: ['-20%', 0, -1] },
            next: { translate: ['100%', 0, 0] }
          }}
          fadeEffect={{ crossFade: true }}
          speed={1500}
          onSlideChange={handleSlideChange}
          className="overflow-hidden"
        >
          {productCategories.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={image.img}
                  alt={image.category}
                  className="w-full h-[400px] object-cover"
                />
                <div
                  ref={(el) => (textRefs.current[index] = el)}
                  className="p-2.5 absolute bottom-4 left-4 text-primary w-1/2 bg-neutral px-5 rounded-md text-2xl font-bold drop-shadow-md"
                >
                  {image.category}
                  <p className="text-sm text-primary line-clamp-2">{image.introduce}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
