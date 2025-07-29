
import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import productCategories from '../../data/ProductData/ProductData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function DetailsProducts() {
  const { category } = useParams(); // category = slug محصول

  // پیدا کردن محصول در تمام زیرمجموعه‌ها
  let product = null;
  let parentCategory = null;

  for (let cat of productCategories) {
    const found = cat.products.find((p) => p.slug === category);
    if (found) {
      product = found;
      parentCategory = cat;
      break;
    }
  }

  // Refs برای ارجاع به عناصر DOM
  const mainContainerRef = useRef(null);
  const backLinkRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const orderButtonRef = useRef(null);
  const relatedProductsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // اگر محصول پیدا نشد، انیمیشنی اجرا نکن
    if (!product) return;

    // انیمیشن ورود کلی صفحه
    gsap.fromTo(mainContainerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
    );

    // انیمیشن برای لینک "Back to..."
    gsap.fromTo(backLinkRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.6, ease: "power2.out", delay: 0.2 }
    );

    // انیمیشن ورود تصویر محصول
    gsap.fromTo(imageRef.current,
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.9, ease: "back.out(1.4)", delay: 0.3 }
    );

    // انیمیشن ورود محتوا (عنوان، توضیحات، دسته‌بندی)
    // برای عناصر فرزند contentRef، از stagger استفاده می‌کنیم
    gsap.fromTo(contentRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.5 }
    );

    // انیمیشن دکمه Order (هاور افکت)
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
        }
    });

    // انیمیشن ورود محصولات مرتبط (اگر وجود دارند)
    if (relatedProductsRef.current) {
        gsap.fromTo(relatedProductsRef.current.querySelectorAll('.related-product-card'),
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.15, // هر کارت با کمی تأخیر ظاهر شود
                ease: "power2.out",
                scrollTrigger: {
                    trigger: relatedProductsRef.current,
                    start: "top 85%", // وقتی بخش محصولات مرتبط 85% در ویوپورت قرار گرفت، انیمیشن شروع شود
                    toggleActions: "play none none none", // فقط یک بار هنگام ورود به ویوپورت پخش شود
                },
            }
        );
    }

  }, [product]); // انیمیشن‌ها را دوباره اجرا کن اگر محصول تغییر کرد

  if (!product) return <p className="p-6 text-red-600">محصول مورد نظر یافت نشد.</p>;

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-12 space-y-12" ref={mainContainerRef}>
      {/* Back Button */}
      {parentCategory && (
        <div ref={backLinkRef}>
          <Link
            to="/products/steel"
            className="inline-flex items-center gap-2 text-sm btn btn-outline text-neutral hover:bg-neutral hover:text-primary transition"
          >
            ← Back to All Products
          </Link>
        </div>
      )}

      {/* Product Detail Section */}
      <div className="flex flex-col md:flex-row bg-neutral border border-primary rounded-3xl overflow-hidden shadow-lg md:h-[550px]">
        {/* Image */}
        <div className="w-full md:w-1/2 h-64 md:h-full">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover"
            ref={imageRef}
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between gap-5" ref={contentRef}>
          <h2 className="text-2xl md:text-4xl font-bold text-primary">{product.name}</h2>

          <p className="border border-white/10 text-primary text-sm md:text-base p-4 rounded-lg leading-relaxed">
            {product.description}
          </p>

          {parentCategory && (
            <span className="italic font-medium text-primary text-sm">
              Category: {parentCategory.category}
            </span>
          )}

          <Link
            to="/order"
            ref={orderButtonRef}
            className="btn btn-neutral text-base md:text-lg font-semibold rounded-xl hover:btn-neutral hover:text-primary transition-all duration-300 w-full md:w-auto text-center"
            onMouseEnter={() =>
              gsap.to(orderButtonRef.current, {
                scale: 1.05,
                duration: 0.2,
                ease: "power1.inOut"
              })
            }
            onMouseLeave={() =>
              gsap.to(orderButtonRef.current, {
                scale: 1,
                duration: 0.2,
                ease: "power1.inOut"
              })
            }
          >
            Order
          </Link>
        </div>
      </div>

      {/* Related Products */}
      {parentCategory && parentCategory.products.length > 1 && (
        <section className="space-y-8" ref={relatedProductsRef}>
          <h3 className="text-2xl font-bold text-neutral text-center">
            Other products in <span className="text-primary">{parentCategory.category}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {parentCategory.products
              .filter(p => p.slug !== product.slug)
              .map(related => (
                <div
                  key={related.id}
                  className="bg-base-100 border border-base-300 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5 flex flex-col justify-between"
                >
                  <img
                    src={related.img}
                    alt={related.name}
                    className="rounded-lg mb-4 h-48 w-full object-cover"
                  />
                  <div className="flex flex-col flex-grow">
                    <h3 className="font-semibold text-lg text-neutral line-clamp-2 h-full">
                      {related.name}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-3 mt-2 h-full">
                      {related.description}
                    </p>
                    <Link
                      to={`/products/details/${related.slug}`}
                      className="mt-4 btn btn-neutral w-full text-white hover:text-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

    </div>
  );
}