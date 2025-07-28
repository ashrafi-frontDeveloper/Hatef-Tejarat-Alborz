import React from 'react'
import { BiSupport, BiSolidTruck, BiBadgeCheck, BiBuilding } from "react-icons/bi";

const services = [
    {
        icon: <BiSupport className="text-4xl text-primary mb-3" />,
        title: "Expert Purchase Consultation",
        description: "We help you choose the best metal products based on your needs and applications."
    },
    {
        icon: <BiSolidTruck className="text-4xl text-primary mb-3" />,
        title: "Logistics & Transportation",
        description: "We ensure fast and secure delivery of your orders with optimized shipping solutions."
    },
    {
        icon: <BiBadgeCheck className="text-4xl text-primary mb-3" />,
        title: "Quality Assurance & Certifications",
        description: "All products meet international standards and come with quality guarantees."
    },
    {
        icon: <BiBuilding className="text-4xl text-primary mb-3" />,
        title: "Industrial Project Partnerships",
        description: "We collaborate with industrial firms to supply essential materials for large-scale projects."
    }
];

const CheckServices = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-12 mt-10">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
          Our Services
        </h2>
        <p className="text-neutral-600 mt-2 text-base sm:text-lg max-w-xl mx-auto">
          Discover how our solutions can support your industry.
        </p>
      </div>

      {/* Service Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center p-6 sm:p-8 border rounded-xl bg-white hover:bg-primary/5 transition-all duration-300 shadow hover:shadow-md"
          >
            {React.cloneElement(service.icon, {
              className: "text-5xl text-primary mb-4 group-hover:text-primary/80 transition",
            })}
            <h6 className="text-lg font-semibold text-neutral-800 group-hover:text-primary transition">
              {service.title}
            </h6>
            <p className="text-sm text-neutral-600 mt-3 leading-relaxed group-hover:text-neutral-800 transition">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CheckServices;