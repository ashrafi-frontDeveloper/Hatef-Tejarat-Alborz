import React,{useState, useEffect, useRef} from 'react';
import { IoIosArrowDown } from "react-icons/io";
import countries from '../../data/CountriesData/CountriesData';
import MapPicker from './MapPicker';
// CountrySelector

function CountrySelector({ selectedCountry, setSelectedCountry }) {
  const [isOpen, setIsOpen] = useState(false);
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
  }, [wrapperRef]);

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
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="input input-bordered w-full text-sm flex justify-between items-center text-neutral"
      >
        <span>{selectedCountry || "Choose a country"}</span>
        <IoIosArrowDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-base-200 rounded-md shadow-lg">
          <div className="p-2">
            <input
              type="text"
              placeholder="Search..."
              className="input input-sm input-bordered w-full text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>
          <ul className="max-h-40 overflow-y-auto divide-y divide-base-200">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectCountry(country)}
                  className="px-4 py-2 hover:bg-base-200 cursor-pointer text-sm text-neutral"
                >
                  {country}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-sm text-gray-400">No country found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

// CustomCaptcha
function CustomCaptcha({ onValidate }) {
  const [captcha, setCaptcha] = useState('');
  const [userInput, setUserInput] = useState('');
  const canvasRef = useRef(null);

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const generated = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    setCaptcha(generated);

    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.fillStyle = '#032340';
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.font = '30px Arial';
    ctx.fillStyle = '#fff';
    ctx.fillText(generated, 10, 30);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-2 items-center">
      <canvas ref={canvasRef} width="150" height="35" className="rounded" />
      <input
        type="text"
        className="input input-bordered text-sm px-3 py-2 w-full sm:w-40"
        value={userInput}
        onChange={e => setUserInput(e.target.value)}
        placeholder="Enter captcha"
      />
    </div>
  );
}

const Order = () => {
    const [selectedCountry, setSelectedCountry] = useState("");

    const [location, setLocation] = useState({ address: "", lat: "", lng: "" });
    const [mapOpen, setMapOpen] = useState(false);

  
    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-base-100 p-6">
                <section className="max-w-3xl w-full bg-white shadow-xl px-8 py-10 rounded-2xl border border-base-300">
                    <div className="flex items-center gap-3 mb-6">
                    <img
                        alt="HTA Logo"
      src={`${import.meta.env.BASE_URL}Logo-HTA.png`}
                        className="w-9 h-9 rounded-full"
                    />
                    <h2 className="text-xl font-semibold text-neutral">Hatef Tejarat Alborz</h2>
                    </div>

                    <h1 className="text-2xl font-bold text-neutral mb-4">
                    International Order Enquiry
                    </h1>
                    <p className="text-sm text-gray-600 mb-6">
                    Please fill out the form carefully. We'll contact you after review.
                    </p>

                    <form className="space-y-6">
                    {/* Business Info */}
                    <div>
                        <h3 className="font-semibold text-lg text-neutral mb-2">Business Information</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                        <input type="text" placeholder="Company Name *" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="Activity" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="Business Address *" className="input input-bordered w-full text-sm" />
                        <input
                            type="text"
                            placeholder="Registered Address (Map)"
                            value={location.address}
                            readOnly
                            className="input input-bordered w-full text-sm cursor-pointer"
                            onClick={() => setMapOpen(true)}
                        />
                        <input type="text" placeholder="Company Reg No *" className="input input-bordered w-full text-sm" />
                        <input type="email" placeholder="Email *" className="input input-bordered w-full text-sm" />
                        <CountrySelector selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
                        <input type="text" placeholder="Website Address" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="WhatsApp Number *" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="P.O. Box Number" className="input input-bordered w-full text-sm" />
                        </div>
                        {mapOpen && (
                        <div className="mt-4">
                            <MapPicker
                            onSelect={(loc) => {
                                setLocation(loc);
                                setMapOpen(false);
                            }}
                            />
                        </div>
                        )}
                    </div>

                    {/* Personal Info */}
                    <div>
                        <h3 className="font-semibold text-lg text-neutral mb-2">Personal Information</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                        <input type="text" placeholder="Full Name *" className="input input-bordered w-full text-sm" />
                        <input type="file" className="file-input file-input-bordered w-full" />
                        <input type="text" placeholder="Nationality *" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="Passport Number *" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="Issued Place" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="Issued Date" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="Expiry Date" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="Home Address" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="City" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="Telegram or WhatsApp *" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="Street Name & Number" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="House Number" className="input input-bordered w-full text-sm" />
                        <input type="email" placeholder="Personal Email" className="input input-bordered w-full text-sm" />
                        </div>
                    </div>

                    {/* Banking Info */}
                    <div>
                        <h3 className="font-semibold text-lg text-neutral mb-2">Banking Information</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                        <input type="text" placeholder="Bank Name *" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="Bank Address" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="SWIFT Code *" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="Routing Number *" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="Account Name" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="Account Number" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="IBAN Number" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="Purpose of Payment" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="Bank Officer Name" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="Bank Officer Tel & Email" className="input input-bordered w-full text-sm" />
                        <input type="text" placeholder="Beneficiary’s Name *" className="input input-bordered w-full text-sm" />
                        </div>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn btn-neutral hover:text-primary w-full font-semibold text-base mt-6">
                        Submit Application
                    </button>
                    <p className="text-sm text-error text-center mt-2">* Required Fields</p>
                    </form>
                </section>
            </div>
        </>
    );
};
export default Order;
