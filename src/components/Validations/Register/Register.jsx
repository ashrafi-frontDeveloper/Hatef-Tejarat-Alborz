import React, { useState, useRef, useEffect } from 'react';
import { FaGoogle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import countries from '../../../data/CountriesData/CountriesData';

function CountrySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
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
  
  const filteredCountries = searchTerm.length === 0 
    ? countries 
    : countries.filter(country => 
        country.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="relative" ref={wrapperRef}>
      {/* main btn country */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none flex justify-between items-center"
      >
        <span>{selectedCountry || "Choose a country"}</span>
        {/* arrow down */}
        <IoIosArrowDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {/* Countries list */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-neutral rounded-md shadow-lg top-full">
          {/* search */}
          <div className="p-2">
            <input 
              type="text"
              placeholder="Search..."
              className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>
          
          {/*  scroll list countries */}
          <ul className="py-1 overflow-y-auto max-h-32 sm:max-h-36">
            {filteredCountries.length > 0 ? (
                filteredCountries.map((country, index) => (
                    <li
                        key={index}
                        className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-neutral cursor-pointer hover:bg-primary"
                        onClick={() => handleSelectCountry(country)}
                    >
                        {country}
                    </li>
                    ))
            ) : (
                <li className="px-3 py-2 text-sm text-gray-500">No country found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Register() {
  const [userType, setUserType] = useState("client");

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <section className="max-w-md w-full text-white shadow-2xl px-7 py-5 border border-white/5 rounded-xl">
        {/* Header */}
        <div className="flex items-center space-x-2 mb-6">
          <img 
            alt="HTA Logo"
            className=" bg-white rounded-full w-8 h-8"
            height="32"
            src="/Logo-HTA.png"
            width="32"
          />
          <span className="font-semibold text-lg text-neutral select-none">Hatef Tejarat Alborz</span>
        </div>
        <h1 className="text-neutral text-2xl font-semibold mb-2">Create your Account</h1>
        <Link to="/validations/login" className="my-5 btn btn-neutral text-primary px-4 py-1">
          Login here.
        </Link>

        {/* FORM */}
        <form className="space-y-4">
          {/* email & name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-neutral text-xs font-semibold mb-1">Your email</label>
              <input type="email" placeholder="name@company.com"
                className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none" />
            </div>
            <div>
              <label className="block text-neutral text-xs font-semibold mb-1">Full Name</label>
              <input type="text" placeholder="e.g. Bonnie Green"
                className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none" />
            </div>
          </div>

          {/* password & confirm */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-neutral text-xs font-semibold mb-1">Password</label>
              <input type="password" placeholder="******"
                className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none" />
            </div>
            <div>
              <label className="block text-neutral text-xs font-semibold mb-1">Confirm Password</label>
              <input type="password" placeholder="******"
                className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none" />
            </div>
          </div>

          {/* Country & phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-neutral text-xs font-semibold mb-1">Country</label>
              <CountrySelector />
            </div>
            <div>
              <label className="block text-neutral text-xs font-semibold mb-1">Your Number</label>
              <input type="text" placeholder="+1 123456"
                className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none" />
            </div>
          </div>

          {/* User type */}
          <div>
            <label className="block text-neutral text-xs font-semibold mb-1">Are you a broker or a client?</label>
            <select
              className='w-full select select-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none'
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="client" className='text-neutral hover:bg-neutral hover:text-primary'>Client</option>
              <option value="broker" className='text-neutral hover:bg-neutral hover:text-primary'>Broker</option>
            </select>
          </div>


          {/* Conditional fields for broker */}
          {userType === "broker" && (
            <div className="space-y-4">
              <div>
                <label className="block text-neutral text-xs font-semibold mb-1">Company Name (optional)</label>
                <input type="text" placeholder="e.g. Alpha Trading Co."
                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none" />
              </div>

              <div>
                <label className="block text-neutral text-xs font-semibold mb-1">Website (optional)</label>
                <input type="url" placeholder="https://yourcompany.com"
                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none" />
              </div>

              <div>
                <label className="block text-neutral text-xs font-semibold mb-1">Upload Passport</label>
                <input type="file" accept=".jpg,.jpeg,.png,.pdf"
                  className="file-input file-input-bordered w-full max-w-xs bg-neutral text-primary" />
              </div>

              <div>
                <label className="block text-neutral text-xs font-semibold mb-1">Upload Other Documents</label>
                <input type="file" accept=".jpg,.jpeg,.png,.pdf"
                  className="file-input file-input-bordered w-full max-w-xs bg-neutral text-primary" />
              </div>
            </div>
          )}

          {/* Terms & submit */}
          <div className="flex items-start space-x-2 mt-4 text-xs text-neutral">
            <input className="mt-1 w-3 h-3 rounded border-gray-600 bg-neutral focus:ring-blue-500" type="checkbox" />
            <label className='text-neutral'>
              By signing up, you agree to HTA
              <a className="text-info hover:underline" href="#"> Terms of Use</a> and 
              <a className="text-info hover:underline" href="#"> Privacy Policy</a>.
            </label>
          </div>

          <button type="submit" className="btn btn-outline mt-6 w-full inline-flex items-center justify-center hover:bg-neutral text-neutral hover:text-primary font-semibold rounded-md py-2 text-sm transition duration-300">
            Create an account
          </button>
        </form>
      </section>
    </div>
  );
}
