import React from 'react';
import Contact from '../Cantact/Contact';

export default function AboutUs() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      <div className="bg-base-300 rounded-3xl p-6 sm:p-10 md:p-14 lg:p-20 text-neutral">
        {/* Title */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-10">
          Hatef Tejarat Alborz
        </h2>

        {/* Sections */}
        <div className="space-y-12 text-justify text-sm sm:text-base leading-relaxed">
          {/* Introduction */}
          <section>
            <h3 className="text-xl font-semibold mb-3 text-neutral">Introduction</h3>
            <p>
              Our company was established on <strong>September 11, 2023</strong> and is actively operating under registration number <strong>6181799</strong>. As a reputable and leading trading company in the field of metals, we continue to strive to meet the needs of our customers by providing high-quality services and products.
            </p>
          </section>

          {/* About */}
          <section>
            <h3 className="text-xl font-semibold mb-3 text-neutral">About</h3>
            <p>
              We are located in Tehran Province, Amirieh Province, Central District, Shahrei City, Hekmat, Dr. Alishahi Street, Shah Mahmud Street, No. 7, 5th Floor, North Unit. Our goal is to provide the best commercial services and products to our valued customers. Relying on the experience and expertise of our team, we have achieved a special position in the metals market and are always striving to satisfy our customers with continuous presentation and improvement.
            </p>
          </section>

          {/* Our Team */}
          <section>
            <h3 className="text-xl font-semibold mb-3 text-neutral">Our Team</h3>
            <p>
              Our team is dedicated to providing the best service to our customers with specific lists and individual experiences in various business fields. Each team member has unique knowledge and skills in the field of metals, and through strong cooperation and coordination, we aim to achieve common company goals. We believe in value and teamwork, and always strive to create a dynamic and friendly environment to achieve the best results.
            </p>
          </section>
        </div>

        {/* Contact */}
        <div className="mt-20">
          <Contact />
        </div>
      </div>
    </div>
  );
}
