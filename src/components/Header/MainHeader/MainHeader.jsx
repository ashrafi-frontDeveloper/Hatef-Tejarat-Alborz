import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const demoProducts = [
  { id: 1, title: "Carbon Steel Long Products", img: `${import.meta.env.BASE_URL}images/slider/close-up-metallic-pipes.jpg` },
  { id: 2, title: "Cold Rolled Carbon Steel Pipe", img: `${import.meta.env.BASE_URL}images/slider/metals-4.jpg` },
  { id: 3, title: "Cold Rolled Carbon Steel Sheet", img: `${import.meta.env.BASE_URL}images/slider/bg-metals.jpg` },
  { id: 4, title: "Galvanized wire", img: `${import.meta.env.BASE_URL}images/categories/steel/Galvanized wire/Galvanized-wire.jpg` },
];


export default function MainHeader() {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // اول کارت‌ها رو انیمیشن میدیم، بعد شعار
    // کارت‌ها با چرخش و ورود 3D
    let cardsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 90%",
      },
    });

    cardsRef.current.forEach((card, i) => {
      cardsTimeline.fromTo(
        card,
        { opacity: 0, y: 50, rotationY: 90, transformOrigin: "center right", boxShadow: "0 0 0 rgba(255,255,255,0)" },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1.2,
          ease: "power4.out",
          delay: i * 0.15,
          boxShadow: "0 0 15px 5px rgba(37, 99, 235, 0.4)",
        }
      );
    });

    const lines = [
      "Where quality combines",
      "with precision"
    ];
    titleRef.current.textContent = "";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 90%",
      },
    });

    lines.forEach((line, lineIndex) => {
      const lineWrapper = document.createElement("div");
      lineWrapper.style.display = "block"; // هر خط توی یک بلاک جدا

      const letters = line.split("");

      letters.forEach((letter, i) => {
        const span = document.createElement("span");

        if (letter === " ") {
          span.innerHTML = "&nbsp;";
          span.style.width = "0.4em";
          span.style.display = "inline-block";
        } else {
          span.textContent = letter;
          span.style.display = "inline-block";
          span.style.transform = "translateY(0px)";
        }

        span.style.opacity = "0";
        lineWrapper.appendChild(span);

        tl.to(span, {
          opacity: 1,
          y: letter === " " ? 0 : -20,
          duration: 0.3,
          ease: "power2.out",
        }, (lineIndex * 0.5) + i * 0.05); // این باعث میشه بین دو خط فاصله انیمیشن باشه
      });

      titleRef.current.appendChild(lineWrapper);
    });





    // پاراگراف و دکمه انیمیشن با اسکرول (مثل قبل)
    gsap.from(paragraphRef.current, {
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(buttonRef.current, {
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 80%",
      },
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 0.3,
    });

    // حذف هاور چرخش، فقط یک هاور نرم و ملایم:
    cardsRef.current.forEach((card) => {
      card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.03,
          boxShadow: "0 8px 20px rgba(37, 99, 235, 0.5)",
          duration: 0.3,
          ease: "power1.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          duration: 0.4,
          ease: "power1.inOut",
        });
      });
    });

    // پارالاکس ملایم برای کل هدر
    gsap.to(".header-parallax", {
      y: "-=40",
      ease: "none",
      scrollTrigger: {
        trigger: ".header-parallax",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center header-parallax">
      {/* متن سمت چپ */}
      <div>
          <h1
            ref={titleRef}
            className="text-3xl sm:text-5xl font-bold text-primary leading-tight tracking-tight"
            style={{ perspective: "600px" }}
          >
            Where quality combines with precision
          </h1>

          <p
            ref={paragraphRef}
            className="text-base sm:text-lg text-black/80 mt-4 leading-relaxed max-w-xl"
          >
            Our company was established on September 11, 2023 and is actively operating
            with registration number 618179. As a reputable and leading trading company
            in the field of metals, we are constantly striving to meet the needs of our
            customers by providing high-quality services and products.
          </p>

          <Link
            ref={buttonRef}
            to="/products/steel"
            className="mt-6 btn btn-neutral text-primary inline-block bg-neutral font-medium px-6 py-2 rounded-full shadow hover:shadow-md transition"
          >
            View Products
          </Link>
      </div>


      {/* کارت‌های محصولات سمت راست */}
      <div className="grid grid-cols-2 gap-6 perspective-3d">
          {demoProducts.map((item, idx) => (
            <Link
              to='/products/steel'
              key={item.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="group bg-base-100 rounded-xl overflow-hidden border border-neutral/10 hover:bg-neutral transition-colors duration-500 shadow-lg cursor-pointer transform-style-preserve-3d"
            >
              <img src={item.img} alt={item.title} className="w-full h-32 sm:h-40 object-cover" />
              <div className="p-3 text-center text-sm text-primary font-semibold group-hover:text-primary transition-colors duration-500">
                {item.title}
              </div>
            </Link>
          ))}

      </div>
    </div>
  );
}
