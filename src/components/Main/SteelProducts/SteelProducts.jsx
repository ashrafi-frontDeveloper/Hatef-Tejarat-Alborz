import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";

const steels = [
    {id: 1, name: 'Color coated corrugated sheet', intro: 'Color coated sheet is based on cold rolled steel and galvanized steel, after the surface pretreatment (degreasing, cleaning, chemical conversion treatment). Then it is coated on the surface with various coating, after baking and cooling .', img: '/images/categories/steel/Corrugated sheet/COLOR COATED CORRUGATED SHEET.jpg'},
    {id: 2, name: 'Cold rolled carbon steel pipe', intro: 'Carbon steel are used extensively to make daily necessities such as automobiles,TV sets, air- conditioners, refrigerators and tools. As our lifestyles improve significantly, the daily necessities become more diverse and upmarket', img: '/images/categories/steel/Carbon steel long products/COLD ROLLED CARBON STEEL PIPE.jpg'},
    {id: 3, name: 'Omega type sheet pile', intro: 'Omega sheet pile has a cap - shaped section, relatively thin, but large section area. The interlocking device is located outside the L/S sheet pile, and the neutral axis of each pile is consistent with the entire sheet pile wall.', img: '/images/categories/steel/Steel sheet pile/OMEGA TYPE SHEET PILE.jpg'},
    {id: 4, name: 'Guardrail', intro: 'Our company has advanced spraying assembly line and welding equipment, specializing in anti- collision guardrail, bridge guardrail, landscape, lighting, river isolation guardrail, stainless steel guardrail, stainless steel carbon steel composite pipe guardrail and all kinds of protection class guardrail production, complete specifications,support customized products you need.', img: '/images/categories/steel/Guardrail/Guardrail.jpg'}
];

const Card = () => {
  return (
    <>
      {steels.map(product => (
        <div key={product.id} className="card bg-base-100 w-full sm:w-64 lg:w-72 shadow-sm border border-secondary">
          <figure className="px-5 xl:px-10 pt-5 xl:pt-10">
            <img src={product.img} alt={product.name} className="rounded-xl aspect-video object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title line-clamp-2">{product.name}</h2>
            <p className='line-clamp-3'>{product.intro}</p>
            <div className="card-actions">
              <a href='#' className="btn btn-info">Details</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default function SteelProducts() {
  return (
    <div className="max-[1280px] mx-auto px-4 sm:px-6 lg:px-8 my-20">
      {/* Title */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-medium text-secondary">Steel Products</h3>
        <div className="w-full h-[2px] bg-secondary mt-2"></div>
      </div>
      {/* Products */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
        <Card />
      </div>
    </div>
  );
}