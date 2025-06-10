import React from "react";

const products = [
  {
    id: 1,
    title: "Cold rolled carbon steel",
    introduce: "Carbon steel sheet is an iron carbon alloy with carbon content of 0.0218% ~ 2.11%. Generally, it also contains a small amount of silicon, manganese, sulfur and phosphorus",
    advantage: 'Durable – carbon steel is very strong and shock resistant.Safety - green carbon steel is easy to recycle, making it environ -ment- friendly. Economy - carbon steel pipe is cheaper than copper pipe.',
    applications: 'Mild carbon steel is generally used in oil pipelines. Medium carbon steel fluid transportation and mechanical manufacturing can be involved. High carbon steel is usually applied in machining',
    mainImage: "/public/images/categories/steel/Cold rolled carbon steel/COLD ROLLED CARBON STEEL COIL.jpg",
    subProducts: [
      {subID: 1, title: 'COLD ROLLED CARBON STEEL SHEET', introduce: 'Cold rolled carbon steel sheets are used extensively to make daily necessities such as automobiles,TV sets, air-conditioners, refrigerators and tools. As our lifestyles improve significantly, the daily necessities become more diverse and upmarket', img: '/images/categories/steel/Cold rolled carbon steel/COLD ROLLED CARBON STEEL SHEET.jpg'},
      {subID: 2, title: 'COLD ROLLED CARBON STEEL STRIP', introduce: 'Cold rolled steel strip is made of hot rolled coil and it is rolled below recrystallization temperature at room temperature, including plate and coil. The steel strip with long length and delivered in coils is called steel strip', img: '/images/categories/steel/Cold rolled carbon steel/COLD ROLLED CARBON STEEL STRIP.jpg'},
      {subID: 3, title: 'COLD ROLLED CARBON STEEL COIL', introduce: 'Cold rolled coil is made of hot rolled coil and rolled below recrystallization temperature at room temperature, including plate and coil. Many domestic steel mills such as Baosteel, WISCO and Angang can produce them', img: '/images/categories/steel/Cold rolled carbon steel/COLD ROLLED CARBON STEEL COIL.jpg'}
    ],
  },

  {
    id: 2,
    title: "Galvanized wire",
    introduce: "Checkered plate is characterized by a raised angular pattern rolled onto the surface of the plate to provide skid resistance",
    advantage: 'It is widely used in transportation, architecture, decoration, bottom plate around equipment, machinery, shipbuilding and other fields.',
    applications: 'There is no pocket to collect grease, dirt or liquids,so checkered plate is easy to keep clean and dry.',
    mainImage: "/images/categories/steel/Galvanized wire/Galvanized-wire.jpg",
    subProducts: [
      {subID: 1, title: 'COLD ROLLED CARBON STEEL SHEET', introduce: 'Cold rolled carbon steel sheets are used extensively to make daily necessities such as automobiles,TV sets, air-conditioners, refrigerators and tools. As our lifestyles improve significantly, the daily necessities become more diverse and upmarket', img: '/images/categories/steel/Cold rolled carbon steel/COLD ROLLED CARBON STEEL SHEET.jpg'},
      {subID: 2, title: 'COLD ROLLED CARBON STEEL STRIP', introduce: 'Cold rolled steel strip is made of hot rolled coil and it is rolled below recrystallization temperature at room temperature, including plate and coil. The steel strip with long length and delivered in coils is called steel strip', img: '/images/categories/steel/Cold rolled carbon steel/COLD ROLLED CARBON STEEL STRIP.jpg'},
      {subID: 3, title: 'COLD ROLLED CARBON STEEL COIL', introduce: 'Cold rolled coil is made of hot rolled coil and rolled below recrystallization temperature at room temperature, including plate and coil. Many domestic steel mills such as Baosteel, WISCO and Angang can produce them', img: '/images/categories/steel/Cold rolled carbon steel/COLD ROLLED CARBON STEEL COIL.jpg'}
    ],
  },

  {
    id: 3,
    title: "Cold rolled carbon steel",
    introduce: "Carbon steel rod is an alloy rod containing carbon and iron, with a carbon content up to 2.1% by weight. Carbon steel bars have good hardness and strength properties and they are cheaper than other steels.",
    advantage: 'arbon steel rod is not only good, and the service time is long, which can effectively save cost and increase efficiency.',
    applications: 'The conveyor belt made of carbon steel rod is used as the traction and carrying component of belt conveyor',
    mainImage: "/images/categories/steel/Cold rolled carbon steel1/Cold rolled carbon steel.jpg",
    subProducts: [
      {subID: 1, title: 'COLD ROLLED CARBON STEEL SHEET', introduce: 'Cold rolled carbon steel sheets are used extensively to make daily necessities such as automobiles,TV sets, air-conditioners, refrigerators and tools. As our lifestyles improve significantly, the daily necessities become more diverse and upmarket', img: '/images/categories/steel/Cold rolled carbon steel/COLD ROLLED CARBON STEEL SHEET.jpg'},
      {subID: 2, title: 'COLD ROLLED CARBON STEEL STRIP', introduce: 'Cold rolled steel strip is made of hot rolled coil and it is rolled below recrystallization temperature at room temperature, including plate and coil. The steel strip with long length and delivered in coils is called steel strip', img: '/images/categories/steel/Cold rolled carbon steel/COLD ROLLED CARBON STEEL STRIP.jpg'},
      {subID: 3, title: 'COLD ROLLED CARBON STEEL COIL', introduce: 'Cold rolled coil is made of hot rolled coil and rolled below recrystallization temperature at room temperature, including plate and coil. Many domestic steel mills such as Baosteel, WISCO and Angang can produce them', img: '/images/categories/steel/Cold rolled carbon steel/COLD ROLLED CARBON STEEL COIL.jpg'}
    ],
  },

  {
    id: 4,
    title: "Stainless steel rod",
    introduce: "According to the production process, stainless steel bars can be divided into hot rolling, forging and cold drawing. The specification of hot rolled stainless steel round steel is 5.5- 250mm.",
    advantage: 'High corrosion resistance makes it suitable for use in harsh environments. It is resistant to fire and heat and resists scaling and maintains strength at high temperatures.',
    applications: 'Widely used in hardware kitchenware, shipbuilding, petrochemical, machinery, medicine, energy, building decoration, nuclear power, aerospace, military and other industries.',
    mainImage: "/public/images/categories/steel/Stainless steel rod/Stainless steel rod.jpg",
    subProducts: [
      {subID: 1, title: 'COLD ROLLED CARBON STEEL SHEET', introduce: 'Cold rolled carbon steel sheets are used extensively to make daily necessities such as automobiles,TV sets, air-conditioners, refrigerators and tools. As our lifestyles improve significantly, the daily necessities become more diverse and upmarket', img: '/images/categories/steel/Cold rolled carbon steel/COLD ROLLED CARBON STEEL SHEET.jpg'},
      {subID: 2, title: 'COLD ROLLED CARBON STEEL STRIP', introduce: 'Cold rolled steel strip is made of hot rolled coil and it is rolled below recrystallization temperature at room temperature, including plate and coil. The steel strip with long length and delivered in coils is called steel strip', img: '/images/categories/steel/Cold rolled carbon steel/COLD ROLLED CARBON STEEL STRIP.jpg'},
      {subID: 3, title: 'COLD ROLLED CARBON STEEL COIL', introduce: 'Cold rolled coil is made of hot rolled coil and rolled below recrystallization temperature at room temperature, including plate and coil. Many domestic steel mills such as Baosteel, WISCO and Angang can produce them', img: '/images/categories/steel/Cold rolled carbon steel/COLD ROLLED CARBON STEEL COIL.jpg'}
    ],
  },

];

export default function ProductList() {
  return (
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          {/* Title */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-medium text-secondary">Products</h3>
            <div className="w-full h-[2px] bg-secondary mt-2"></div>
          </div>

          {/* Products */}
          {products.map(({ id, title, introduce, advantage, applications, mainImage }) => (
            <div
              key={id}
              className="flex flex-col md:flex-row items-center gap-x-2 shadow-md border border-secondary rounded-2xl overflow-hidden md:h-[550px]"
            >
              {/* Right: Image */}
              <div className="w-full md:w-1/2 h-64 md:h-full flex justify-center items-center">
                <img
                  src={mainImage}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Left: Content */}
              <div className="w-full md:w-1/2 h-full p-4 flex flex-col justify-between ">
                <h2 className="text-xl md:text-3xl font-bold text-white mb-4 pt-2">{title}</h2>
                
                {/* descriptions */}
                <div className="space-y-3">
                  <div>
                    <span className="text-white font-bold">INTRODUCE :</span>
                    <p className="text-white line-clamp-3">{introduce}</p>
                  </div>
                  <div>
                    <span className="text-white font-bold">ADVANTAGE :</span>
                    <p className="text-white line-clamp-3">{advantage}</p>
                  </div>
                  <div>
                    <span className="text-white font-bold">APPLICATIONS :</span>
                    <p className="text-white line-clamp-3">{applications}</p>
                  </div>
                </div>

                <a
                  href="#"
                  className="mt-4 text-base md:text-lg font-medium px-4 py-2 text-secondary bg-white rounded-xl text-center hover:bg-secondary hover:text-white transition-all duration-300"
                >
                  See more
                </a>
              </div>
            </div>
          ))}
        </div>
  );
}
