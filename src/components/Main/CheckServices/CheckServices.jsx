import React from 'react'
import { BiSupport, BiSolidTruck, BiBadgeCheck, BiBuilding } from "react-icons/bi";

const services = [
    {
        icon: <BiSupport className="text-4xl text-secondary mb-3" />,
        title: "Expert Purchase Consultation",
        description: "We help you choose the best metal products based on your needs and applications."
    },
    {
        icon: <BiSolidTruck className="text-4xl text-secondary mb-3" />,
        title: "Logistics & Transportation",
        description: "We ensure fast and secure delivery of your orders with optimized shipping solutions."
    },
    {
        icon: <BiBadgeCheck className="text-4xl text-secondary mb-3" />,
        title: "Quality Assurance & Certifications",
        description: "All products meet international standards and come with quality guarantees."
    },
    {
        icon: <BiBuilding className="text-4xl text-secondary mb-3" />,
        title: "Industrial Project Partnerships",
        description: "We collaborate with industrial firms to supply essential materials for large-scale projects."
    }
];

const CheckServices = () => {
    return (
        <div className="max-w-[1280px] mx-auto px-4 py-6 mt-10">
            {/* Title */}
            <div className="text-center mb-8">
                <h3 className="text-2xl font-medium text-secondary">Our Services</h3>
                <div className="w-full h-[2px] bg-secondary mt-2"></div>
            </div>

            {/* Service Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col items-center p-6 border rounded-lg shadow-lg">
                        {service.icon}
                        <h6 className="text-base text-white font-semibold">{service.title}</h6>
                        <p className="text-sm text-text text-center mt-2">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CheckServices;