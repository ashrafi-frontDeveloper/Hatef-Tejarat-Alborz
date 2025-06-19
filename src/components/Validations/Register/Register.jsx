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
        className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
      >
        <span>{selectedCountry || "Choose a country"}</span>
        {/* arrow down */}
        <IoIosArrowDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {/* Countries list */}
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
          
          {/*  scroll list countries */}
          <ul className="py-1 overflow-y-auto max-h-32 sm:max-h-36">
            {filteredCountries.length > 0 ? (
                filteredCountries.map((country, index) => (
                    <li
                        key={index}
                        className="px-3 py-2 text-sm text-gray-300 cursor-pointer hover:bg-blue-600"
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

  return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <section className="max-w-md w-full text-white shadow-2xl px-7 py-5 border border-white/5 rounded-xl">
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
                <h1 className="text-white text-2xl font-semibold mb-2">Create your Account</h1>
                <Link to="/validations/login" className="my-5 border-none outline-none btn btn-info bg-blue-600 hover:bg-blue-700 text-white px-4 py-1"> Login here.</Link>
                <form className="space-y-4">
                    {/* email & name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                        <label className="block text-gray-400 text-xs font-semibold mb-1">Your email</label>
                        <input 
                            className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="name@company.com"
                            type="email"
                        />
                        </div>
                        <div>
                        <label className="block text-gray-400 text-xs font-semibold mb-1">Full Name</label>
                        <input 
                            className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g. Bonnie Green"
                            type="text"
                        />
                        </div>
                    </div>
                    {/* country & password */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                        <label className="block text-gray-400 text-xs font-semibold mb-1">Country</label>
                        <CountrySelector />
                        </div>
                        <div>
                        <label className="block text-gray-400 text-xs font-semibold mb-1">Password</label>
                        <input 
                            className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            // defaultValue="password"
                            placeholder='******'
                        />
                        </div>
                    </div>
                    {/* type user */}
                    <div>
                        <label className="block text-gray-400 text-xs font-semibold mb-1">Are you a broker or a client?</label>
                        <select className='w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' name="">
                            <option value="intermediary">Client</option>
                            <option value="end-user">Broker</option>
                        </select>
                    </div>

                    <div className="flex items-start space-x-2 mt-4 text-xs text-gray-400">
                        <input className="mt-1 w-3 h-3 rounded border-gray-600 bg-[#334155] focus:ring-blue-500" type="checkbox" />
                        <label>
                        By signing up, you agree to HTA
                        <a className="text-blue-500 hover:underline" href="#"> Terms of Use</a> and 
                        <a className="text-blue-500 hover:underline" href="#"> Privacy Policy</a>.
                        </label>
                    </div>
                    <a href='#' className="mt-6 w-full inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-2 text-sm transition">
                        Create an account
                    </a>
                </form>
            </section>
        </div>
  )
}
