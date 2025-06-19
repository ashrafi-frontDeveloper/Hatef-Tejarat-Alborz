// components/ImageSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectFade } from 'swiper/modules'
// import images from '../../../data/sliderImages/sliderImages'
import productCategories from '../../../data/ProductData/ProductData'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'


export default function Slider() {
  return (
    <>
        {/* Title */}
        <div className="max-w-[1280px] mx-auto text-center mb-8 mt-20">
            <h3 className="text-2xl font-medium text-secondary">Our Products</h3>
            <div className="w-full h-[2px] bg-secondary mt-2"></div>
        </div>
        {/* slider */}
        <div className="w-full mx-auto shadow-2xl">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1000} 
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
                    <a href='#' className="p-2.5 absolute bottom-4 left-4 text-black w-1/2 bg-white/80 px-5 rounded-md text-2xl font-bold drop-shadow-md">
                        {image.category}
                        <p className="text-sm text-black line-clamp-2">{image.introduce}</p>
                    </a>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
  )
}
