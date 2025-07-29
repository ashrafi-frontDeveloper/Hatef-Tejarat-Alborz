import { useParams, Link } from "react-router-dom";
import productCategories from "../../data/ProductData/ProductData";
import { gsap } from "gsap";
import './CategotyStyle.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from 'react';
import { useState, useEffect, useRef } from "react"; // useRef برای ارجاع به DOM

const WireTable = ({ data }) => {
  const tableRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (tableRef.current) {
      gsap.fromTo(
        tableRef.current.querySelectorAll("tbody tr"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        tableRef.current.querySelectorAll("thead th"),
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tableRef.current.querySelector("thead"),
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [data]);

  if (!data || data.length === 0)
    return <p>جدولی برای نمایش وجود ندارد.</p>;

  const columns = Object.keys(data[0]);

  const columnTitles = {
    grades: "Grades",
    c: "C",
    fe: "Fe",
    mn: "Mn",
    p: "P",
    s: "S",
    si: "Si",
    diameter: "Diameter",
    weight: "Weight",
    wireDiameter: "Wire Diameter",
    coilWeight: "Coil Weight",
    MPa: "Ultimate Tensile Strength (MPa)",
  };

  return (
    <div className="mt-8 overflow-x-auto" ref={tableRef}>
      <table className="table min-w-[800px]">
        <thead>
          <tr className="bg-neutral text-primary">
            {columns.map((col, idx) => (
              <th key={idx}>{columnTitles[col] || col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={rowIdx} className="bg-base-200">
              {columns.map((col, colIdx) => (
                <td key={colIdx}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CategoryDetails = () => {
  const { categorySlug } = useParams();
  const category = productCategories.find(cat => cat.slug === categorySlug);

  const mainContainerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const orderButtonRef = useRef(null);
  const productsGridRef = useRef(null);

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  if (category) {
    // انیمیشن ورود کلی صفحه
    gsap.fromTo(
      mainContainerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    // انیمیشن ورود تصویر
    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    );

    // انیمیشن ورود محتوا (عنوان و توضیحات)
    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3,
      }
    );

    // انیمیشن هاور برای دکمه Order (اختیاری)
    gsap.to(orderButtonRef.current, {
      scale: 1.05,
      duration: 0.2,
      paused: true,
      ease: "power1.inOut",
      onComplete: () => {
        gsap.to(orderButtonRef.current, {
          scale: 1,
          duration: 0.2,
          ease: "power1.inOut",
        });
      },
    });

    // آکاردئون‌ها
    gsap.utils.toArray(".collapse").forEach((collapse) => {
      const input = collapse.querySelector("input");
      const content = collapse.querySelector(".collapse-content");

      if (content && input) {
        if (input.checked) {
          // اگه از اول چک شده بود، بازش کن
          gsap.set(content, { height: "auto", opacity: 1 });
        } else {
          gsap.set(content, { height: 0, opacity: 0 });
        }

        input.addEventListener("change", function () {
          if (this.checked) {
            gsap.to(content, {
              height: "auto",
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
              onComplete: () => ScrollTrigger.refresh(),
            });
          } else {
            gsap.to(content, {
              height: 0,
              opacity: 0,
              duration: 0.3,
              ease: "power2.in",
              onComplete: () => ScrollTrigger.refresh(),
            });
          }
        });
      }
    });

    // انیمیشن ورود کارت‌های محصول (در صورت وجود)
    if (category.products && productsGridRef.current) {
      gsap.fromTo(
        productsGridRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: productsGridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }
  }, [category]);


  if (!category) return <p className="p-6 text-red-600">دسته مورد نظر پیدا نشد</p>;

  return (
    <>
      <div className="max-w-screen-2xl mx-auto p-6" ref={mainContainerRef}>
        <div>
          <Link to="/products/wire" className="inline-flex btn btn-outline items-center gap-2 text-sm text-neutral hover:bg-neutral hover:text-primary transition" data-discover="true">← back to all products</Link>
          <div className="max-w-screen-2xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-center bg-neutral gap-x-2 shadow-md border border-primary rounded-2xl overflow-hidden md:h-[550px]">
              {/* Right: Image */}
              <div className="w-full md:w-1/2 h-64 md:h-full flex justify-center items-center" ref={imageRef}>
                <img
                  src={category.img}
                  alt={category.category}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Left: Content */}
              <div className="w-full md:w-1/2 h-full p-4 flex flex-col justify-between space-y-5" ref={contentRef}>
                <h2 className="text-xl md:text-3xl font-bold text-primary pt-2">{ category.category }</h2>

                {/* descriptions */}
                <div className="">
                  <div className="collapse collapse-arrow bg-neutral border border-primary">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <label className="collapse-title text-primary font-semibold">INTRODUCE:</label>
                    <div className="collapse-content text-primary text-sm">{category.introduce}</div>
                  </div>
                  <div className="collapse collapse-arrow bg-neutral border border-primary">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-primary font-semibold">ADVANTAGE:</div>
                    <div className="collapse-content text-primary text-sm">{category.advantage}</div>
                  </div>
                  <div className="collapse collapse-arrow bg-neutral border border-primary">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-primary font-semibold">APPLICATION:</div>
                    <div className="collapse-content text-primary text-sm">{category.application}</div>
                  </div>
                </div>

                {/* link request */}
                <Link
                  to="/order"
                  className="btn btn-neutral text-base md:text-lg font-semibold rounded-xl hover:btn-neutral hover:text-primary transition-all duration-300 w-full md:w-auto text-center"
                  ref={orderButtonRef}
                >
                  Order
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" ref={productsGridRef}>
          {category.products ? (
            category.products.map(product => (
              <div
                key={product.id}
                className="bg-base-100 border border-base-300 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5 flex flex-col justify-between"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="rounded-lg mb-4 h-48 w-full object-cover"
                />
                <div className="flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg text-neutral line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-3 mt-2">{product.description}</p>
                  <Link
                    to={`/products/details/${product.slug}`}
                    className="mt-4 btn btn-neutral w-full text-white hover:text-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : category.table ? (
            <section className="w-full overflow-x-auto md:col-span-3 bg-base-100 border border-base-300 p-4 rounded-2xl shadow-sm">
              <WireTable data={category.table} />
            </section>
          ) : (
            <div className="col-span-full text-center py-6 bg-error text-white rounded-xl">
              <p>No products available in this category.</p>
            </div>
          )}
        </div>

      </div>
    </>
  );
};

export default CategoryDetails;