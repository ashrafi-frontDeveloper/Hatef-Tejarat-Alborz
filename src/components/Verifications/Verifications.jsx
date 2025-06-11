import React,{useState, useEffect, useRef} from 'react';
import Navbar from '../Header/Navbar/Navbar';
import Footer from '../Footer/Footer';
import { IoIosArrowDown } from "react-icons/io";


//  Data countries
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
  "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
  "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
  "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia",
  "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark",
  "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland",
  "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
  "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
  "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
  "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova",
  "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
  "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
  "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine",
  "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
  "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea",
  "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
  "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
  "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
  "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen",
  "Zambia", "Zimbabwe"
];

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


function MyForm() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* انتخاب کشور */}
      <div>
        <label className="block text-gray-400 text-xs font-semibold mb-1">
          Country of material destination:
        </label>
        <CountrySelector
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      </div>

      {/* انتخاب روش حمل */}
      <div>
        <label className="block text-gray-400 text-xs font-semibold mb-1">
          Ways to send materials to the destination:
        </label>
        <select
          className="w-full bg-[#334155] text-gray-300 text-sm rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSelectedMethod(e.target.value)}
          value={selectedMethod}
        >
          <option value="">Select Method</option>
          <option value="land">Land</option>
          <option value="sea">Sea</option>
        </select>
      </div>

      {/* گمرک زمینی */}
      <div>
        <label className="block text-gray-400 text-xs font-semibold mb-1">
          Land unloading customs:
        </label>
        <input
          disabled={!selectedCountry || selectedMethod !== "land"}
          placeholder="Enter land customs..."
          className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        />
      </div>

      {/* بندر دریایی */}
      <div>
        <label className="block text-gray-400 text-xs font-semibold mb-1">
          Sea port of discharge:
        </label>
        <input
          disabled={!selectedCountry || selectedMethod !== "sea"}
          placeholder="Enter sea port..."
          className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        />
      </div>
    </div>
  );
}


// function CountrySelector() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const wrapperRef = useRef(null);

//   // close drop down
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [wrapperRef]);
  
//   const filteredCountries = searchTerm.length === 0 
//     ? countries 
//     : countries.filter(country => 
//         country.toLowerCase().includes(searchTerm.toLowerCase())
//       );

//   const handleSelectCountry = (country) => {
//     setSelectedCountry(country);
//     setIsOpen(false);
//     setSearchTerm("");
//   };

//   return (
//     <div className="relative" ref={wrapperRef}>
//       {/* main btn country */}
//       <button
//         type="button"
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
//       >
//         <span>{selectedCountry || "Choose a country"}</span>
//         {/* arrow down */}
//         <IoIosArrowDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
//       </button>

//       {/* Countries list */}
//       {isOpen && (
//         <div className="absolute z-10 w-full mt-1 bg-[#283445] rounded-md shadow-lg top-full">
//           {/* search */}
//           <div className="p-2">
//             <input 
//               type="text"
//               placeholder="Search..."
//               className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
//               onChange={(e) => setSearchTerm(e.target.value)}
//               autoFocus
//             />
//           </div>
          
//           {/*  scroll list countries */}
//           <ul className="py-1 overflow-y-auto max-h-32 sm:max-h-36">
//             {filteredCountries.length > 0 ? (
//                 filteredCountries.map((country, index) => (
//                     <li
//                         key={index}
//                         className="px-3 py-2 text-sm text-gray-300 cursor-pointer hover:bg-blue-600"
//                         onClick={() => handleSelectCountry(country)}
//                     >
//                         {country}
//                     </li>
//                     ))
//             ) : (
//                 <li className="px-3 py-2 text-sm text-gray-500">No country found</li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }


//  Data Material Steel , Wire
const materials = [
  "Low carbon steel",
  "Medium carbon steel",
  "High carbon steel",
  "Low alloy steels",
  "Medium alloy steels",
  "High alloy steels",
  "Ferritic steel",
  "Martensitic steel",
  "Austenitic steel",
  "Duplex steel",
  "Special",
  "Steel",
  "Brass",
  "PVC",
];

// MaterialSelector
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


const Verifications = () => {

    return (
        <>
        <Navbar />
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
                                placeholder="999****"
                                type="number"
                            />
                        </div>
                    </div>

                    <h5 className="font-bold mt-7">Company Information</h5>

                    {/* 4 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-400 text-xs font-semibold mb-1">Buyer’s company name, country of registration:</label>
                            <textarea className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" name="" id="">
                            </textarea>
                        </div>
                        <div>
                            <label className="block text-gray-400 text-xs font-semibold mb-1">Production company/production site name:</label>
                            <textarea className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" name="" id="">
                            </textarea>
                        </div>
                    </div>

                    {/* 5 */}
                    <MyForm />

                    <h5 className="font-bold mt-7">Material Requirements</h5>

                    {/* 6 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-400 text-xs font-semibold mb-1">Required Steel and Wire material:</label>
                            <MaterialSelector />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-xs font-semibold mb-1">Others (please specify):</label>
                            <input type="text" className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
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
        <Footer />
        </>
    );
};

export default Verifications;