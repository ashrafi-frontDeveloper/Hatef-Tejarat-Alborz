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
    <div className="relative w-full" ref={wrapperRef}>
      {/* Main Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="input input-bordered w-full flex justify-between items-center text-sm text-neutral font-normal px-3 py-2"
      >
        <span className={selectedMaterial ? 'text-neutral' : 'text-gray-400'}>
          {selectedMaterial || 'Choose a material'}
        </span>
        <IoIosArrowDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-base-300 rounded-md shadow-lg">
          {/* Search Input */}
          <div className="p-2">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>

          {/* Scrollable List */}
          <ul className="max-h-40 overflow-y-auto divide-y divide-gray-100">
            {filteredMaterials.length > 0 ? (
              filteredMaterials.map((mat, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectMaterial(mat)}
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-neutral hover:text-primary transition"
                >
                  {mat}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-sm text-gray-400">No material found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}


export default function Order() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 p-6">
      <section className="w-full max-w-2xl bg-white shadow-xl px-7 py-8 rounded-xl border border-base-300">
        {/* Logo + Title */}
        <div className="flex items-center gap-3 mb-6">
          <img
            alt="HTA Logo"
      src={`${import.meta.env.BASE_URL}Logo-HTA.png`}
            className="w-9 h-9 rounded-full"
          />
          <h2 className="text-xl font-semibold text-neutral">
            Hatef Tejarat Alborz
          </h2>
        </div>

        {/* Headline */}
        <h1 className="text-2xl font-bold text-neutral mb-2">
          Business Enquiry Form
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Dear customer! Thank you for your interest in our company. If you have an enquiry for material purchasing, we will be glad to discuss it after filling the form below.
        </p>

        {/* Form */}
        <form className="space-y-8">
          {/* Applicant Information */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Applicant Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral mb-1">Full Name</label>
                <input type="text" placeholder="Full name" className="input input-bordered w-full text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral mb-1">Company Represented</label>
                <textarea className="textarea textarea-bordered w-full text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral mb-1">Role</label>
                <select className="select select-bordered w-full text-sm">
                  <option value="intermediary">Intermediary</option>
                  <option value="end-user">End-user</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral mb-1">Email</label>
                <input type="email" placeholder="example@gmail.com" className="input input-bordered w-full text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral mb-1">Phone Number</label>
                <input type="text" placeholder="+98 ..." className="input input-bordered w-full text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral mb-1">Cargo Order Type</label>
                <select className="select select-bordered w-full text-sm">
                  <option>EXW</option>
                  <option>FOB</option>
                  <option>CFR</option>
                  <option>CIF</option>
                </select>
              </div>
            </div>
          </div>

          {/* Material Requirements */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Material Requirements</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral mb-1">Required Material</label>
                <MaterialSelector />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral mb-1">Other Materials</label>
                <textarea className="textarea textarea-bordered w-full text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral mb-1">Final Material Application</label>
                <textarea className="textarea textarea-bordered w-full text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral mb-1">Required Volume/Month</label>
                <input type="text" className="input input-bordered w-full text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral mb-1 mt-4">Other Information (max 300 characters)</label>
              <textarea className="textarea textarea-bordered w-full h-32 text-sm" maxLength={300} />
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-neutral w-full text-base font-semibold hover:bg-neutral-focus hover:text-primary transition">
            Submit Enquiry
          </button>

          {/* Note */}
          <p className="text-sm text-error text-center font-medium mt-2">* All fields are required</p>
        </form>
      </section>
    </div>
  );
}
