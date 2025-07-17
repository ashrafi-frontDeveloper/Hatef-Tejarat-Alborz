import React,{useState, useEffect, useRef} from 'react';
import Navbar from '../Header/Navbar/Navbar';
import Footer from '../Footer/Footer';
import { IoIosArrowDown } from "react-icons/io";
import countries from '../../data/CountriesData/CountriesData';
import MapPicker from './MapPicker';


// CountrySelector
function CountrySelector({ selectedCountry, setSelectedCountry }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none flex justify-between items-center"
      >
        <span>{selectedCountry || "Choose a country"}</span>
        <IoIosArrowDown />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-neutral rounded-md shadow-lg top-full">
          <input
            type="text"
            className="w-full px-3 py-2 text-sm bg-neutral text-primary border-none focus:outline-none"
            placeholder="Search country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul className="py-1 overflow-y-auto max-h-36">
            {filteredCountries.map((country, index) => (
              <li
                key={index}
                className="px-3 py-2 text-sm text-white cursor-pointer hover:text-neutral hover:bg-primary transition-all duration-300 font-medium"
                onClick={() => handleSelectCountry(country)}
              >
                {country}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


// CustomCaptcha
const CustomCaptcha = ({ onValidate }) => {
  const [captcha, setCaptcha] = useState('');
  const [userInput, setUserInput] = useState('');
  const canvasRef = useRef(null);

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
    return result;
  };

  useEffect(() => {
    const newCaptcha = generateCaptcha();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // تنظیمات ظاهری کپچا
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#032340';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '30px Arial';
    ctx.fillStyle = '#fff';
    ctx.fillText(newCaptcha, 10, 35);

    // اضافه کردن نویز (چند خط تصادفی)
    for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = `rgb(
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)})`;
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.stroke();
    }

  }, []); // فقط یک بار در زمان بارگذاری اجرا می‌شود

  const handleValidate = () => {
    onValidate(userInput.toLowerCase() === captcha.toLowerCase());
  };

  return (
    <div>
      <canvas ref={canvasRef} width="150" height="35" />
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      {/* دکمه اعتبارسنجی را می‌توانید داخل فرم اصلی قرار دهید */}
    </div>
  );
};


const Order = () => {
    const [selectedCountry, setSelectedCountry] = useState("");

    const [location, setLocation] = useState({ address: "", lat: "", lng: "" });
    const [mapOpen, setMapOpen] = useState(false);

  
    return (
        <>
          <div className="min-h-screen flex items-center justify-center p-6">
              <section className="max-w-2xl w-full text-neutral shadow-2xl px-7 py-5 border border-white/5 rounded-xl">
                  <div className="flex items-center space-x-2 mb-6">
                      <img 
                          alt="Flowbite logo, blue circular icon with white swirl inside"
                          className=" bg-white rounded-full w-8 h-8"
                          height="32"
                          src={`${import.meta.env.BASE_URL}Logo-HTA.png`} 
                          width="32"
                      />
                      <span className="font-semibold text-lg select-none">Hatef Tejarat Alborz</span>
                  </div>
                  <h1 className="text-neutral text-2xl font-semibold mb-2">Business enquiry form for international orders</h1>
                  <p className="">Dear customer! Thank you for your interest in our company. If you have an enquiry for material purchasing we will be glad to discuss it after filling the form below.</p>

                  <form className="space-y-4">
                      <h5 className="font-bold mt-7">BUSINESS INFORMATION</h5>
                      {/* 1 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-neutral text-xs font-semibold mb-1">
                                COMPANY NAME: <span className="text-red-500">*</span>
                            </label>

                            <input 
                                className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                placeholder="full name"
                                type="text"
                            />
                          </div>
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">ACTIVITY:</label>
                              <textarea className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"/>
                          </div>
                      </div>
                      {/* 2 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">BUSINESS ADDRESS: <span className="text-red-500">*</span></label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="Bussiness address"
                                  type="text"
                              />
                          </div>
                          <div className="space-y-4">
                            <div>
                                <label className="block text-neutral text-xs font-semibold mb-1">REGISTERED ADDRESS:</label>
                                <input
                                onClick={() => setMapOpen(true)}
                                value={location.address}
                                readOnly
                                placeholder="Click to select location from map"
                                className="cursor-pointer w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                />
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
                      </div>
                      {/* 3 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">COMPANY REGISTRATION NO: <span className="text-red-500">*</span></label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="company registration no"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">Email: <span className="text-red-500">*</span></label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="example@gmail.com"
                                  type="email"
                              />
                          </div>
                      </div>
                      {/* 4 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-neutral text-xs font-semibold mb-1">
                              REGISTER COUNTRY:
                            </label>
                            <CountrySelector
                              selectedCountry={selectedCountry}
                              setSelectedCountry={setSelectedCountry}
                            />
                          </div>
                          <div>
                            <label className="block text-neutral text-xs font-semibold mb-1">ADDRESS WEBSITE:</label>
                            <input 
                                className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                placeholder="example.com"
                                type="text"
                            />
                          </div>
                      </div>
                      {/* 6 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-neutral text-xs font-semibold mb-1">WhatsApp Number: <span className="text-red-500">*</span></label>
                            <input 
                                className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                placeholder="+1 999999"
                                type="text"
                            />
                          </div>
                          <div>
                            <label className="block text-neutral text-xs font-semibold mb-1">P.O. Box Number:</label>
                            <input 
                                className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                placeholder="321654987"
                                type="text"
                            />
                          </div>
                      </div>
                      {/* /// */}

                      <h5 className="font-bold mt-7">PERSONAL INFORMATION</h5>

                      {/* 7 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">FULL NAME AS PER PASSPORT: <span className="text-red-500">*</span></label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="company registration no"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">UPLOAD PASSPOER: <span className="text-red-500">*</span></label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="example@gmail.com"
                                  type="file"
                              />
                          </div>
                      </div>
                      {/* 8 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">NATIONALITY: <span className="text-red-500">*</span></label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="nationality"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">PASSPORT NUMBER: <span className="text-red-500">*</span></label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="222888222"
                                  type="text"
                              />
                          </div>
                      </div>
                      {/* 9 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">PASSPORT ISSUED PLACE:</label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="passport issued place"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">PASSPORT ISSUED DATE:</label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="passport issued date"
                                  type="text"
                              />
                          </div>
                      </div>
                      {/* 10 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">PASSPORT EXPIRY DATE:</label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="company registration no"
                                  type="passport expiry date"
                              />
                          </div>
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">HOME ADDRESS:</label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="home address"
                                  type="text"
                              />
                          </div>
                      </div>
                      {/* 11 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">CITY:</label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="your city"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">Whatsapp or Telegram Number: <span className="text-red-500">*</span></label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="+1 258852"
                                  type="text"
                              />
                          </div>
                      </div>
                      {/* 12 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">STREET NAME & NUMBER:</label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="street X - 9"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">HOUSE NUMBER:</label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="315"
                                  type="text"
                              />
                          </div>
                      </div>
                      {/* 13 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-neutral text-xs font-semibold mb-1">PERSONAL EMAIL ADDRESS:</label>
                            <input 
                                className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                placeholder="example@gmail.com"
                                type="email"
                            />
                        </div>
                      </div>
                      {/* /// */}
                      <h5 className="font-bold mt-7">BANKING INFORMATION</h5>
                      {/* 14 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">BANK NAME:  <span className="text-red-500">*</span></label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="bank name"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">BANK ADDRESS:</label>
                              <input type='text' placeholder='bank address' className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"/>
                          </div>
                      </div>
                      {/* 15 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-neutral text-xs font-semibold mb-1">SWIFT Code: <span className="text-red-500">*</span></label>
                            <input 
                                className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                placeholder="bank name"
                                type="text"
                            />
                        </div>
                        <div>
                            <label className="block text-neutral text-xs font-semibold mb-1">Routing Number: <span className="text-red-500">*</span></label>
                            <input type='text' placeholder='bank address' className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"/>
                        </div>
                      </div>
                      {/* 16 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">ACCOUNT NAME:</label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="account name"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">ACCOUNT NUMBER:</label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="334561"
                                  type="text"
                              />
                          </div>
                      </div>
                      {/* 17 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">IBAN NUMBER:</label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="259614"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-neutral text-xs font-semibold mb-1">PURPOSE OF PAYMENT:</label>
                              <input 
                                  className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                  placeholder="purpose of payment"
                                  type="text"
                              />
                          </div>
                      </div>
                      {/* 18 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-neutral text-xs font-semibold mb-1">BANK OFFICER NAME:</label>
                            <input 
                                className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                placeholder="mr.ZYX"
                                type="text"
                            />
                          </div>
                          <div>
                            <label className="block text-neutral text-xs font-semibold mb-1">BANK OFFICER TEl & EMAIL:</label>
                            <input 
                                className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                placeholder="example@gmail.com"
                                type="email"
                            />
                          </div>
                          <div>
                            <label className="block text-neutral text-xs font-semibold mb-1">Beneficiary’s Name: <span className="text-red-500">*</span></label>
                            <input 
                                className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                placeholder="example@gmail.com"
                                type="email"
                            />
                          </div>
                      </div>

                      <div className="flex items-start space-x-2 mt-4 text-xs text-gray-400">
                          <CustomCaptcha />
                          <input className="w-36 input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none" type="text" />
                      </div>

                      <a href='#' className="btn btn-outline w-full inline-flex items-center justify-center hover:bg-neutral text-neutral hover:text-primary font-semibold rounded-md py-2 text-sm transition duration-300">
                          Applay
                      </a>
                      
                      <span className="w-full inline-flex items-center justify-cente text-error text-base font-semibold rounded-md py-2 transition">
                          Required fields
                      </span>
                      
                  </form>
              </section>
          </div>
        </>
    );
};

export default Order;