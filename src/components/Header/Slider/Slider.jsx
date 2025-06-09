// components/ImageSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const images = [
  {
    src: '/public/images/coldrolled/coldrolled-1.jfif',
    alt: 'Cold rolled carbon steel',
    title: 'Cold rolled carbon steel',
  },
  {
    src: '/images/tools-materials-sanitary-works.jpg',
    alt: 'Another Image',
    title: 'Another Slide',
  },
    {
    src: '/public/images/close-up-metallic-tin-cans.jpg',
    alt: 'Another Image',
    title: 'Another Slide',
  },
    {
    src: '/public/images/close-up-metallic-pipes.jpg',
    alt: 'Another Image',
    title: 'Another Slide',
  },
    {
    src: '/public/images/bg-metals.jpg',
    alt: 'Another Image',
    title: 'Another Slide',
  },
  // می‌تونی تصاویر دیگه هم اضافه کنی
]

export default function Slider() {
  return (
    <>
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
                {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="relative">
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-secondary bg-white px-5 rounded-md text-2xl font-bold drop-shadow-md">
                        {image.title}
                    </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
  )
}
