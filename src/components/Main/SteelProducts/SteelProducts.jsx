import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { HiArrowLongRight } from "react-icons/hi2"; // اگر از react-icons استفاده می‌کنید
import CardItem from './CardItem'
import productCategories from '../../../data/ProductData/ProductData';

gsap.registerPlugin(ScrollTrigger);

function SteelProductsGSAP() {
  const verticalSectionRef = useRef(null);

  useEffect(() => {
    const initScroll = (sectionRef) => {
      const section = sectionRef.current;
      if (!section) return;

      const wrapper = section.querySelector(".wrapper");
      const items = Array.from(wrapper.querySelectorAll(".item"));

      // Initial states: set all items except the first one to be 100% below the viewport
      items.forEach((item, index) => {
        if (index !== 0) {
          gsap.set(item, { yPercent: 100 }); // Only vertical scroll
        }
      });

      // Create a GSAP timeline for the scroll animation
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section, // The section element is the trigger for the animation
          pin: true,        // Pin the section while scrolling through its items
          start: "top top", // Start when the top of the section hits the top of the viewport
          end: () => `+=${items.length * 100}%`, // End after scrolling through all items
          scrub: 1,         // Smoothly link animation progress to scroll position
          invalidateOnRefresh: true, // Recalculate positions on window resize
        },
        defaults: { ease: "none" }, // Use no easing for linear scroll effect
      });

      // Animate each item
      items.forEach((item, index) => {
        // First, scale down the current item and round its borders
        timeline.to(item, {
          scale: 0.9,
          borderRadius: "10px",
        });

        // Then, if there's a next item, bring it into view
        if (items[index + 1]) {
          timeline.to(items[index + 1], { yPercent: 0 }, "<"); // Bring next item up, starting at the same time as the previous animation
        }
      });
    };

    // Initialize scroll animation for the vertical section
    initScroll(verticalSectionRef);

    // Cleanup ScrollTriggers on component unmount to prevent memory leaks and conflicts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  // Filter to show only the first 5 products for the featured section
  const featuredSteelProducts = productCategories.slice(0, 5);

  return (
    <main className="main-wrapper">
      {/* Section for the main heading */}
      <div className="section">
        <div className="container-medium max-w-7xl mx-auto">
          <div className="padding-vertical p-8">
              <div className="max-width-large mx-auto text-center mb-8">
                <h3 className="text-2xl font-medium text-neutral heading">Our Featured Steel Products</h3>
                <div className="w-full h-[2px] bg-neutral mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Scroll Section for Steel Products */}
      <div ref={verticalSectionRef} className="scroll-section vertical-section section">
        <div className="wrapper h-screen">
          <div role="list" className="list justify-start items-center h-full flex relative px-0.5">
            {featuredSteelProducts.map((product, index) => (
              <CardItem
                key={product.id} // Use product ID as key for better performance and stability
                number={index + 1} // Optional: display a sequential number
                title={product.category} // Use 'category' for the main title
                description={product.introduce} // Use 'introduce' for the description
                imageSrc={product.img} // Use 'img' for the product image source
                slug={product.slug} // Use 'slug' for the navigation link
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section for the "Explore All" link */}
      <div className="section">
        <div className="padding-global px-10">
          <div className="container-medium max-w-7xl mx-auto">
            <div className="padding-vertical p-8">
              <div className="max-width-large mx-auto">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center md:w-2/5 xl:w-1/4 mx-auto gap-x-1 btn btn-outline group hover:btn-neutral transition-colors duration-300">
                    <Link to='/products/steel' className="text-base xl:text-lg text-neutral group-hover:text-primary font-semibold transition-colors">
                      View all Steel Products
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

export default SteelProductsGSAP;