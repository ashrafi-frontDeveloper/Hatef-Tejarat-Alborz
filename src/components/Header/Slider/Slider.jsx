// components/ImageSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const images = [
  {
    src: '/images/coldrolled/coldrolled-1.jfif',
    alt: 'Cold rolled carbon steel',
    title: 'Cold rolled carbon steel',
    descriptions: 'Carbon steel sheet is an iron carbon alloy with carbon content of 0.0218% ~ 2.11%. Generally, it also contains a small amount of silicon, manganese, sulfur and phosphorus'
  },
  {
    src: '/images/coldrolled/Galvanized-wire.jpg',
    alt: 'Galvanized wire',
    title: 'Galvanized wire',
    descriptions: 'Checkered plate is characterized by a raised angular pattern rolled onto the surface of the plate to provide skid resistance.'
  },

    {
    src: '/images/slider/close-up-metallic-pipes.jpg',
    alt: 'Carbon steel long products',
    title: 'Carbon steel long products',
    descriptions: 'Carbon steel seamless pipe is a kind of long steel. Steel pipe has hollow section and is widely used as pipeline for conveying fluid, such as pipeline for conveying oil, natural gas, gas, water and some solid materials.'
  },
    {
    src: '/images/slider/bg-metals.jpg',
    alt: 'Hot rolled carbon steel',
    title: 'Hot rolled carbon steel',
    descriptions: 'The straight hair coil shall be cut or rewound after finishing line treatment such as head cutting, tail cutting, edge cutting and multi-pass straightening and leveling'
  },
  {
    src: '/images/coldrolled/Stainless steel profile.jpg',
    alt: 'Stainless steel profile',
    title: 'Stainless steel profile',
    descriptions: 'Stainless steel profiles are used in engineering construction. Based on the good corrosion resistance of stainless steel, it can permanently maintain the integrity of engineering design.'
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
                    <div className=" cursor-pointer p-2.5 absolute bottom-4 left-4 text-secondary w-1/2 bg-white/80 px-5 rounded-md text-2xl font-bold drop-shadow-md">
                        {image.title}
                        <p className="text-sm line-clamp-2">{image.descriptions}</p>
                    </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
  )
}
