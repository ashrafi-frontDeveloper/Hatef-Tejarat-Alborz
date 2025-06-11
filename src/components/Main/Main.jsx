import React from 'react'
import CheckServices from './CheckServices/CheckServices'
import CategorySlider from './Categories/Categories'
import ProductList from './Products/Products'
import Slider from './Slider/Slider';
import SteelProducts from './SteelProducts/SteelProducts';
import WireProducts from './WireProducts/WireProducts';
import Trusted from './Trusted/Trusted';


export default function Main() {
  return (
    <div>
        <CheckServices />
        <div className="w-full h-full items-center justify-center">
          <Slider />
        </div>
        <CategorySlider />
        <ProductList />
        <SteelProducts />
        <WireProducts />
        <Trusted />
    </div>
  )
}
