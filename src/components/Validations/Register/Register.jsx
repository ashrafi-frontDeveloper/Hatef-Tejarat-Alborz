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
  }, []);

  const filteredCountries = searchTerm.length === 0
    ? countries
    : countries.filter((country) =>
        country.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="relative" ref={wrapperRef}>
      {/* Selector button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full input input-bordered text-sm text-neutral flex justify-between items-center"
      >
        <span>{selectedCountry || "Choose a country"}</span>
        <IoIosArrowDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-20 w-full bg-white border border-base-300 rounded-md shadow-xl mt-1 overflow-hidden">
          {/* Search input */}
          <div className="p-2 border-b border-base-300">
            <input
              type="text"
              placeholder="Search..."
              className="w-full input input-bordered text-sm text-neutral"
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>

          {/* Country list */}
          <ul className="max-h-40 overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country, index) => (
                <li
                  key={index}
                  className="px-4 py-2 text-sm text-neutral hover:bg-base-200 cursor-pointer"
                  onClick={() => handleSelectCountry(country)}
                >
                  {country}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-sm text-gray-400">
                No country found
              </li>
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
    <div className="min-h-screen flex items-center justify-center bg-base-100 p-6">
      <section className="w-full max-w-md bg-white shadow-xl px-7 py-8 rounded-xl border border-base-300">
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
          Create your Account
        </h1>

        {/* Login Link */}
        <p className="text-sm text-gray-500 mb-6">
          Already have an account? {" "}
          <Link to="/validations/login" className="text-primary hover:underline font-medium">
            Login here
          </Link>
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Email & Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral mb-1">Email</label>
              <input
                type="email"
                placeholder="name@company.com"
                className="input input-bordered w-full text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral mb-1">Full Name</label>
              <input
                type="text"
                placeholder="e.g. Bonnie Green"
                className="input input-bordered w-full text-sm"
              />
            </div>
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral mb-1">Password</label>
              <input
                type="password"
                placeholder="******"
                className="input input-bordered w-full text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="******"
                className="input input-bordered w-full text-sm"
              />
            </div>
          </div>

          {/* Country & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral mb-1">Country</label>
              <CountrySelector />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral mb-1">Phone Number</label>
              <input
                type="text"
                placeholder="+1 123456"
                className="input input-bordered w-full text-sm"
              />
            </div>
          </div>

          {/* User Type */}
          <div>
            <label className="block text-sm font-medium text-neutral mb-1">Are you a broker or a client?</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="select select-bordered w-full text-sm"
            >
              <option value="client">Client</option>
              <option value="broker">Broker</option>
            </select>
          </div>

          {/* Broker Fields */}
          {userType === "broker" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral mb-1">Company Name (optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Alpha Trading Co."
                  className="input input-bordered w-full text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral mb-1">Website (optional)</label>
                <input
                  type="url"
                  placeholder="https://yourcompany.com"
                  className="input input-bordered w-full text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral mb-1">Upload Passport</label>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  className="file-input file-input-bordered w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral mb-1">Upload Other Documents</label>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  className="file-input file-input-bordered w-full"
                />
              </div>
            </div>
          )}

          {/* Terms */}
          <div className="flex items-start space-x-2 mt-4">
            <input type="checkbox" className="checkbox checkbox-primary mt-1" />
            <label className="text-sm text-neutral">
              By signing up, you agree to HTA
              <a className="text-info hover:underline" href="#"> Terms of Use</a> and
              <a className="text-info hover:underline" href="#"> Privacy Policy</a>.
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-neutral w-full text-base font-semibold hover:bg-neutral-focus hover:text-primary transition"
          >
            Create an Account
          </button>
        </form>
      </section>
    </div>
  );
}
