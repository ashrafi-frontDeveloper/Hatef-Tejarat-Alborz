
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
    <div className="max-w-7xl mx-auto px-4 py-12" ref={mainContainerRef}>
      {parentCategory && (
        <div className="mb-6" ref={backLinkRef}>
          <Link
            to={`/products/steel`}
            className="inline-flex btn btn-outline items-center gap-2 text-sm text-neutral hover:bg-neutral hover:text-primary transition"
          >
            ← back to all products
          </Link>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center gap-x-2 shadow-md bg-neutral border border-secondary rounded-2xl overflow-hidden md:h-[550px]">
        {/* Right: Image */}
        <div className="w-full md:w-1/2 h-64 md:h-full flex justify-center items-center" ref={imageRef}>
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Left: Content */}
        <div className="w-full md:w-1/2 h-full p-4 flex flex-col justify-between space-y-5" ref={contentRef}>
          <h2 className="text-xl md:text-3xl font-bold text-primary pt-2">{product.name}</h2>

          <div className="border border-white/20 p-4 rounded-xl text-lg text-primary">
            {product.description}
          </div>

          {parentCategory && (
            <div className="text-lg font-bold text-primary italic">
              Category: {parentCategory.category}
            </div>
          )}

          <Link
            to="/order"
            className="mt-4 text-base md:text-lg font-bold px-4 py-2 text-neutral border border-primary bg-white rounded-xl text-center hover:bg-neutral hover:text-primary transition-all duration-300"
            ref={orderButtonRef}
            onMouseEnter={() => gsap.to(orderButtonRef.current, { scale: 1.05, duration: 0.2, ease: "power1.inOut" })}
            onMouseLeave={() => gsap.to(orderButtonRef.current, { scale: 1, duration: 0.2, ease: "power1.inOut" })}
          >
            Order
          </Link>
        </div>
      </div>

      {/* Related Products */}
      {parentCategory && parentCategory.products.length > 1 && (
        <div className="mt-12" ref={relatedProductsRef}>
          <h3 className="text-xl font-bold text-neutral mb-4">
            Other products in {parentCategory.category}:
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {parentCategory.products
              .filter(p => p.slug !== product.slug) // حذف محصول فعلی
              .map(related => (
                <div
                  key={related.id}
                  className="border rounded-xl shadow p-4 bg-base-100 related-product-card" // کلاس اضافه شده
                >
                  <img
                    src={related.img}
                    alt={related.name}
                    className="rounded-md h-40 w-full object-cover mb-3"
                  />
                  <h4 className="font-semibold text-lg">{related.name}</h4>
                  <p className="text-sm line-clamp-2 text-neutral">{related.description}</p>
                  <Link
                    to={`/products/details/${related.slug}`}
                    className="inline-block btn btn-neutral py-2 mt-4 text-primary"
                  >
                    View Details
                  </Link>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}