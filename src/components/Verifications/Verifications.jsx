import React,{useState, useEffect, useRef} from 'react';
import Navbar from '../Header/Navbar/Navbar';
import Footer from '../Footer/Footer';
import { IoIosArrowDown } from "react-icons/io";
import countries from '../../data/CountriesData/CountriesData';


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
        className="w-full bg-[#334155] text-gray-300 text-sm rounded-md pl-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
      >
        <span>{selectedCountry || "Choose a country"}</span>
        <IoIosArrowDown />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-[#283445] rounded-md shadow-lg top-full">
          <input
            type="text"
            className="w-full px-3 py-2 text-sm bg-[#1f2937] text-white border-none focus:outline-none"
            placeholder="Search country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul className="py-1 overflow-y-auto max-h-36">
            {filteredCountries.map((country, index) => (
              <li
                key={index}
                className="px-3 py-2 text-sm text-gray-300 cursor-pointer hover:bg-blue-600"
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
    return (
        <>
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
                      <h5 className="font-bold mt-7">BUSINESS INFORMATION</h5>
                      {/* 1 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">COMPANY NAME:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="full name"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">ACTIVITY:</label>
                              <textarea className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                          </div>
                      </div>
                      {/* 2 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">BUSINESS ADDRESS:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="Bussiness address"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">REGISTERED ADDRESS:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="registered address"
                                  type="text"
                              />
                          </div>
                      </div>
                      {/* 3 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">COMPANY REGISTRATION NO:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="company registration no"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">Email:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="example@gmail.com"
                                  type="email"
                              />
                          </div>
                      </div>
                      {/* 4 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-400 text-xs font-semibold mb-1">
                              REGISTER COUNTRY:
                            </label>
                            <CountrySelector
                              selectedCountry={selectedCountry}
                              setSelectedCountry={setSelectedCountry}
                            />
                          </div>
                          <div>
                            <label className="block text-gray-400 text-xs font-semibold mb-1">ADDRESS WEBSITE:</label>
                            <input 
                                className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="example.com"
                                type="text"
                            />
                          </div>
                      </div>
                      {/* 5 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-400 text-xs font-semibold mb-1">TELEPHONE:</label>
                            <input 
                                className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="+1 999999"
                                type="text"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-400 text-xs font-semibold mb-1">ADDRESS WEBSITE:</label>
                            <input 
                                className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="example.com"
                                type="text"
                            />
                          </div>
                      </div>
                      {/* 6 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-400 text-xs font-semibold mb-1">MOBILE NUMBER:</label>
                            <input 
                                className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="+1 999999"
                                type="text"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-400 text-xs font-semibold mb-1">P.O. Box Number:</label>
                            <input 
                                className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                              <label className="block text-gray-400 text-xs font-semibold mb-1">FULL NAME AS PER PASSPORT:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="company registration no"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">UPLOAD PASSPOER:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="example@gmail.com"
                                  type="file"
                              />
                          </div>
                      </div>
                      {/* 8 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">NATIONALITY:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="nationality"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">PASSPORT NUMBER:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="222888222"
                                  type="text"
                              />
                          </div>
                      </div>
                      {/* 9 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">PASSPORT ISSUED PLACE:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="passport issued place"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">PASSPORT ISSUED DATE:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="passport issued date"
                                  type="text"
                              />
                          </div>
                      </div>
                      {/* 10 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">PASSPORT EXPIRY DATE:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="company registration no"
                                  type="passport expiry date"
                              />
                          </div>
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">HOME ADDRESS:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="home address"
                                  type="text"
                              />
                          </div>
                      </div>
                      {/* 11 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">CITY:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="your city"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">TELEPHONE NO:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="+1 258852"
                                  type="text"
                              />
                          </div>
                      </div>
                      {/* 12 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">STREET NAME & NUMBER:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="street X - 9"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">HOUSE NUMBER:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="315"
                                  type="text"
                              />
                          </div>
                      </div>
                      {/* 13 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-400 text-xs font-semibold mb-1">MOBILE NUMBER:</label>
                            <input 
                                className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="+1 963693"
                                type="text"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-xs font-semibold mb-1">PERSONAL EMAIL ADDRESS:</label>
                            <input 
                                className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                              <label className="block text-gray-400 text-xs font-semibold mb-1">BANK NAME:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="bank name"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">BANK ADDRESS:</label>
                              <input type='text' placeholder='bank address' className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                          </div>
                      </div>
                      {/* 15 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">ACCOUNT NAME:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="account name"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">ACCOUNT NUMBER:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="334561"
                                  type="text"
                              />
                          </div>
                      </div>
                      {/* 16 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">IBAN NUMBER:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="259614"
                                  type="text"
                              />
                          </div>
                          <div>
                              <label className="block text-gray-400 text-xs font-semibold mb-1">PURPOSE OF PAYMENT:</label>
                              <input 
                                  className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="purpose of payment"
                                  type="text"
                              />
                          </div>
                      </div>
                      {/* 17 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-400 text-xs font-semibold mb-1">BANK OFFICER NAME:</label>
                            <input 
                                className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="mr.ZYX"
                                type="text"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-400 text-xs font-semibold mb-1">BANK OFFICER TEl & EMAIL:</label>
                            <input 
                                className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="example@gmail.com"
                                type="email"
                            />
                          </div>
                      </div>

                      <div className="flex items-start space-x-2 mt-4 text-xs text-gray-400">
                          <CustomCaptcha />
                          <input className="w-36 bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" />
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
        </>
    );
};

export default Order;