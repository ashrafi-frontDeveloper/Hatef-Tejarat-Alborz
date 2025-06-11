import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";

const steels = [
    {id: 1, name: 'Iron wire', intro: 'he wires produced by Hatef Tejarat Alborz Company are categorized into four types: iron, annealed, galvanized and ribbed. The initial rebar is converted into desired size through a drawing process and is packaged into coils with the requested weight. The chemical analysis of the drawn wire is exactly the same as the initial rebar, but the mechanical properties vary based on the amount of drawing and the percentage of cross-sectional area reduction. In the table, the sizes and weights with higher demands are shown', img: '/images/categories/wire/Iron wire/5922741763993356038.jpg'},
    {id: 2, name: 'Galvanized wire', intro: 'Galvanized wire is a type of steel wire coated with a layer of zinc to resist rust and corrosion. It is produced in two types: hot-dip galvanized and electro-galvanized. The hot-dip galvanizing process involves immersing the cleaned wire in a bath of molten zinc with a small percentage of aluminum, which creates a durable coating against rust. In contrast, electro-galvanizing involves electroplating, which applies a thinner zinc layer compared to hot-dip galvanizing.', img: '/images/categories/wire/Galvanized wire/5922741763993356036.jpg'},
    {id: 3, name: 'Galvanized Wire with PVC Coating', intro: 'This type of wire, in addition to its zinc coating, is covered with a layer of polyvinyl chloride (PVC). The PVC coating provides high resistance to acids and alkaline substances. ', img: '/images/categories/wire/Galvanized Wire with PVC Coating/5922741763993356035.jpg'},
    {id: 4, name: 'Ribbed wire', intro: 'The ribbed wire is a new product from this manufacturing unit and is widely used across various industries. This product features unique physical characteristics such as lightweight while providing sufficient strength for structures, weldability through different methods, and a thinner thickness compared to steel rebar, making it an excellent choice, especially in the construction industry.', img: '/images/categories/wire/Ribbed wire/5922741763993356033.jpg'}
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

export default function WireProducts() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-20">
      {/* Title */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-medium text-secondary">Wired products</h3>
        <div className="w-full h-[2px] bg-secondary mt-2"></div>
      </div>
      {/* Products */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
        <Card />
      </div>
    </div>
  );
}