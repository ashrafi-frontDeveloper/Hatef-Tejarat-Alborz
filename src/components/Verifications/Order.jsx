import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { useRef,useState,useEffect } from 'react';

import materials from '../../data/materialsKYC/materials'

function MaterialSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const wrapperRef = useRef(null);

  // close drop down
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const filteredMaterials = searchTerm.length === 0 
    ? materials 
    : materials.filter(material => 
        material.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const handleSelectMaterial = (material) => {
    setSelectedMaterial(material);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="relative" ref={wrapperRef}>
      {/* main btn material */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
      >
        <span>{selectedMaterial || "Choose a material"}</span>
        {/* arrow down */}
        <IoIosArrowDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {/* Materials list */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-[#283445] rounded-md shadow-lg top-full">
          {/* search */}
          <div className="p-2">
            <input 
              type="text"
              placeholder="Search..."
              className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>
          
          {/* scroll list materials */}
          <ul className="py-1 overflow-y-auto max-h-32 sm:max-h-36">
            {filteredMaterials.length > 0 ? (
              filteredMaterials.map((material, index) => (
                <li
                  key={index}
                  className="px-3 py-2 text-sm text-gray-300 cursor-pointer hover:bg-blue-600"
                  onClick={() => handleSelectMaterial(material)}
                >
                  {material}
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-sm text-gray-500">No material found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Order() {
  return (
          <div className="min-h-screen flex items-center justify-center p-6">
              <section className="max-w-2xl w-full text-white shadow-2xl px-7 py-5 border border-white/5 rounded-xl">
                  <div className="flex items-center space-x-2 mb-6">
                      <img 
                          alt="Flowbite logo, blue circular icon with white swirl inside"
                          className=" bg-white rounded-full w-6 h-6"
                          height="24"
                          src="/Logo-HTA.png"
                          width="24"
                      />
                      <span className="font-semibold text-lg select-none">Hatef Tejarat Alborz</span>
                  </div>
                  <h1 className="text-white text-2xl font-semibold mb-2">Business enquiry form for international orders</h1>
                  <p className="">Dear customer! Thank you for your interest in our company. If you have an enquiry for material purchasing we will be glad to discuss it after filling the form below.</p>

                  <form className="space-y-4">
                      <h5 className="font-bold mt-7">Applicant Information</h5>
                      {/* 1 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">Name of the applicant:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="full name"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">The company represented by the applicant:</label>
                              <textarea className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                          </div>
                      </div>
                      {/* 2 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">The company represented by the applicant:</label>
                              <select className='w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' name="">
                                  <option value="intermediary">Intermediary</option>
                                  <option value="end-user">End-user</option>
                              </select>
                          </div>
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">E-mail:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="example@gmail.com"
                                  type="email"
                              />
                          </div>
                      </div>
                      {/* 3 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">Phone number:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="+1 759846"
                                  type="text"
                              />
                          </div>
                            <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">Cargo order type:</label>
                              <select className='w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' name="">
                                  <option value="intermediary">EXW</option>
                                  <option value="end-user">FOB</option>
                                  <option value="end-user">CFR</option>
                                  <option value="end-user">CIF</option>
                              </select>
                          </div>
                      </div>


                      <h5 className="font-bold mt-7">Material Requirements</h5>

                        {/* 6 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-400 text-xs font-semibold mb-1">Required Steel and Wire material:</label>
                                <MaterialSelector />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-xs font-semibold mb-1">Others (please specify):</label>
                                <textarea className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>
                    

                        {/* 7 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-400 text-xs font-semibold mb-1">Final material application/What is the material used for?</label>
                                <textarea className='w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' name="" id=""></textarea>
                            </div>
                            <div>
                                <label className="block text-gray-400 text-xs font-semibold mb-1">Required volume per month:</label>
                                <input type="text" className="w-full mt-4 bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        {/* 8 */}
                        <div className="grid grid-cols-1 gap-4">
                            <div className=''>
                                <label className="block text-gray-400 text-xs font-semibold mb-1">Other Information (300 characters):</label>
                                <textarea className='w-full h-36 bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' name="" id=""></textarea>
                            </div>
                        </div>
                      

                      <a href='#' className="w-full inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-2 text-sm transition">
                          Applay
                      </a>
                      
                      <span className="w-full inline-flex items-center justify-cente text-error text-base font-semibold rounded-md py-2 transition">
                          Required fields
                      </span>
                      
                  </form>
              </section>
          </div>
  )
}
