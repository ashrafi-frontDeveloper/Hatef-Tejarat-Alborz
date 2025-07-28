// src/WireProductsGSAP.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { HiArrowLongRight } from "react-icons/hi2";
import CardItem from './CardItem';
import wire from '../../../data/WireProduct/WireProducts';

gsap.registerPlugin(ScrollTrigger);

function WireProductsGSAP() {
  const verticalSectionRef = useRef(null);
  // Removed horizontalSectionRef as it's no longer needed

  useEffect(() => {
    const initScroll = (sectionRef, direction) => {
      const section = sectionRef.current;
      if (!section) return;

      const wrapper = section.querySelector(".wrapper");
      const items = Array.from(wrapper.querySelectorAll(".item"));

      // Initial states
      items.forEach((item, index) => {
        if (index !== 0) {
          // Since we only have vertical scroll, always set yPercent
          gsap.set(item, { yPercent: 100 });
        }
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top top",
          end: () => `+=${items.length * 100}%`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "none" },
      });

      items.forEach((item, index) => {
        timeline.to(item, {
          scale: 0.9,
          borderRadius: "10px",
        });

        if (items[index + 1]) {
          // Always use yPercent for vertical scroll
          timeline.to(items[index + 1], { yPercent: 0 }, "<");
        }
      });
    };

    initScroll(verticalSectionRef, "vertical"); // Only initialize vertical scroll

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Use all products for the single vertical scroll section
  const allProducts = wire;

  return (
    <main className="main-wrapper mt-10">
      {/* Title Section */}
      <div className="section">
        <div className="container-medium max-w-7xl mx-auto">
          <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-primary leading-snug">
                Our Featured Wire Products
              </h3>
              <div className="w-20 h-[3px] bg-primary mt-4 mx-auto rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div ref={verticalSectionRef} className="scroll-section vertical-section section">
        <div className="wrapper h-screen">
          <div role="list" className="list justify-start items-center h-full flex relative px-0.5">
            {allProducts.map((product, index) => (
              <CardItem
                key={product.id}
                number={index + 1}
                title={product.category}
                description={product.intro}
                imageSrc={product.img}
                slug={product.slug}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="padding-global px-10">
          <div className="container-medium max-w-7xl mx-auto">
            <div className="padding-vertical p-8">
              <div className="max-width-large mx-auto">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center md:w-2/5 xl:w-1/4 mx-auto gap-x-1 btn btn-outline group hover:btn-neutral transition-colors duration-300">
                    <Link to='/products/wire' className="text-base xl:text-lg text-neutral group-hover:text-primary font-semibold transition-colors">
                      View all Wire Products
                    </Link>
                    <HiArrowLongRight className='w-7 h-7 text-neutral group-hover:text-primary' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default WireProductsGSAP;