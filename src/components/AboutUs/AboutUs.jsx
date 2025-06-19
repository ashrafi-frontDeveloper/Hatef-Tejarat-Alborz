import React from 'react'
import Contact from '../Cantact/Contact'

export default function AboutUs() {
  return (
        <div className="max-[1280px] mx-auto px-4 sm:px-6 lg:px-8 my-20">
            <div className="flex flex-col items-center justify-center px-40 bg-base-300 py-7 rounded-4xl">
                <h2 className="text-7xl">Hatef Tejarat Alborz</h2>
                {/* about comany */}
                <div className="mt-7 space-y-7">
                    {/* intro */}
                    <div className="">
                        <span className="text-3xl">Introduction:</span>
                        <p className="text-lg">Our company was established on September 11, 2023 and is actively operating under registration number 6181799. As a reputable and leading trading company in the field of metals, we continue to strive to meet the needs of our customers by providing high-quality services and products.</p>
                    </div>
                    {/* About */}
                    <div className="">
                        <span className="text-3xl">About:</span>
                        <p className="text-lg">We are located in Tehran Province, Amirieh Province, Central District, Shahrei City, Hekmat, Dr. Alishahi Street, Shah Mahmud Street, No. 7, 5th Floor, North Unit. Our goal is to provide the best commercial services and products to our valued customers. Relying on the experience and expertise of our team, we have achieved a special position in the metals market and are always striving to satisfy our customers with continuous presentation and improvement.</p>
                    </div>
                    {/* our team */}
                    <div className="">
                        <span className="text-3xl">Our team:</span>
                        <p className="text-lg">Our team is dedicated to providing the best service to our customers with specific lists and individual experiences in various business fields. Each team member with unique knowledge and skills in the field of metals, and through strong cooperation and coordination, we aim to achieve common company goals. We believe in the value and teamwork and always strive to create a dynamic and friendly environment to achieve the best results.</p>
                    </div>
                </div>
                <Contact />
            </div>
            <div className="">
            </div>
        </div>
  )
}
