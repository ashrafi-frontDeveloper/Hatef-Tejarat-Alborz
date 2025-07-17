import Reac,{useState, useRef} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegUser } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { Link, useNavigate, NavLink } from 'react-router-dom';
import productCategories from '../../../data/ProductData/ProductData';

const Logo = () => (
  <div className="flex items-center gap-2 shrink-0">
    <img 
      alt="JinStore logo with a smiling box icon" 
      className="w-10 h-10 bg-white rounded-full" 
      src={`${import.meta.env.BASE_URL}Logo-HTA.png`} 
      width="32"
      height="32"
    />
    <span className="font-semibold text-lg select-none text-neutral whitespace-nowrap">Hatef Tejarat Alborz</span>
  </div>
);

const SearchBar = () => (
  <div className="flex-1 min-w-[180px] max-w-full sm:max-w-[600px]">
    <div className="relative">
      <input 
        className="w-full border border-neutral rounded-md py-2 pl-3 pr-10 text-sm placeholder-neutral-400 
                   focus:outline-none transition duration-300"
        placeholder="Search for products, categories or brands..."
        type="text"
      />
      <button 
        aria-label="Search" 
        className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-secondary transition duration-300"
      >
        <IoSearchOutline className='w-6 h-6' />
      </button>
    </div>
  </div>
);

const UserActions = () => (
  <>
    <div className="flex items-center gap-x-5">
      {/* btn register */}
      <Link to='/validations/register'>
        <div className="btn btn-neutral flex items-center gap-4 text-xs text-primary select-none shrink-0">
          <div className="flex items-center gap-1 cursor-pointer whitespace-nowrap">
            <div className="flex items-center gap-x-2 leading-[1] px-4 py-1 rounded-lg transition-all duration-300">
              <FaRegUser className=' h-5 w-5' />
              <div className="sm:text-base ">Sign In</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  </>
);

const mainMenuVariants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

const subMenuVariants = {
  hidden: {
    opacity: 0,
    x: -10, // حرکت از ۱۰ پیکسل چپ‌تر
    transition: { duration: 0.2, ease: "easeOut" }
  },
  visible: {
    opacity: 1,
    x: 0, // حرکت به موقعیت اصلی
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

const CategoriesDropdown = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [subMenuTop, setSubMenuTop] = useState(0);
  const dropdownRef = useRef(null);

  const handleSubMenuToggle = (e, index) => {
    if (activeSubMenu === index) {
      setActiveSubMenu(null);
      return;
    }

    const dropdownElement = dropdownRef.current;
    if (!dropdownElement) return;

    const dropdownRect = dropdownElement.getBoundingClientRect();
    const itemRect = e.currentTarget.getBoundingClientRect();
    let topPosition = itemRect.top - dropdownRect.top;

    const maxHeight = window.innerHeight;
    const subMenuHeight = 260; // ارتفاع تقریبی منوی فرعی
    const adjustedTopPosition = Math.min(topPosition, maxHeight - subMenuHeight - dropdownRect.top);

    setSubMenuTop(adjustedTopPosition);
    setActiveSubMenu(index);
  };


  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setActiveSubMenu(null);
        }}
        className="btn btn-neutral text-primary flex items-center gap-1 rounded-4xl px-5 py-2 hover:bg-neutral hover:text-primary transition-all duration-300 cursor-pointer"
      >
        <span>All Categories</span>
        <MdOutlineKeyboardArrowDown
          className={`text-base transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          // ۴. تبدیل div به motion.div و اعمال انیمیشن
          <motion.div
            ref={dropdownRef}
            variants={mainMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute top-full left-0 mt-1 w-52 sm:w-[260px] bg-white border border-primary rounded-md shadow-lg z-50"
          >
            <ul className="divide-y divide-neutral-300 max-h-[400px] overflow-y-auto">
                  {productCategories.map((item, index) => (
                    <li key={index}>
                      <div
                        onClick={(e) => handleSubMenuToggle(e, index)}
                        className="flex items-center justify-between gap-2 px-3 py-2 text-neutral hover:bg-neutral hover:text-primary cursor-pointer"
                      >
                        <span>{item.category}</span>
                        {item.products && (
                          <AnimatePresence mode="wait" initial={false}>
                            <motion.span key={activeSubMenu === index ? 'minus' : 'plus'}>
                              {activeSubMenu === index ? (
                                <FiMinus className="text-[12px]" />
                              ) : (
                                <FaPlus className="text-[10px]" />
                              )}
                            </motion.span>
                          </AnimatePresence>
                        )}
                      </div>
                    </li>
                  ))}
            </ul>

            <AnimatePresence>
              {activeSubMenu !== null && productCategories[activeSubMenu]?.products && (
                <motion.ul
                  key={activeSubMenu}
                  variants={subMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute left-full w-40 sm:w-[260px] bg-white rounded-md shadow-lg"
                  style={{ top: `${subMenuTop}px` }}
                >
                  {productCategories[activeSubMenu].products.map((prod, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-3 py-2 text-[12px] text-neutral hover:bg-neutral hover:text-primary transition-all cursor-pointer"
                      onClick={() => {
                        navigate(`/products/details/${prod.slug}`);
                        setIsOpen(false); // بسته شدن dropdown
                        setActiveSubMenu(null);
                      }}
                    >
                      {prod.name}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavigationBar = () => (
  <nav className="max-w-[1280px] mx-auto border-t border-gray-200 px-4">
    <div className="flex flex-wrap items-center gap-3 py-2 text-[13px] font-semibold text-neutral select-none">
      
      {/* Categories dropdown */}
      <CategoriesDropdown />

      {/* Links */}
      <NavLink
        to="/"
        className="btn btn-soft hover:bg-neutral hover:text-primary px-5 sm:text-base rounded-4xl transition-all duration-500 whitespace-nowrap"
      >
        Home
      </NavLink>

      <NavLink
        to="/contact"
        className="btn btn-soft hover:bg-neutral hover:text-primary px-5 sm:text-base rounded-4xl transition-all duration-500 whitespace-nowrap"
      >
        Contact
      </NavLink>

      <NavLink
        to="/about"
        className="btn btn-soft hover:bg-neutral hover:text-primary px-5 sm:text-base rounded-4xl transition-all duration-500 whitespace-nowrap"
      >
        About Us
      </NavLink>

      <NavLink
        to="/verifications"
        className="btn btn-soft hover:bg-neutral hover:text-primary px-5 sm:text-base rounded-4xl transition-all duration-500 whitespace-nowrap"
      >
        Verifications
      </NavLink>

      <div className="flex ml-auto sm:hidden">
        <UserActions />
      </div>
    </div>
  </nav>
);


const Navbar = () => (

  <nav className='shadow-lg border-b border-white/20'>
    <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-3">
      <Logo />
      <SearchBar />
      <div className="hidden sm:flex">
        <UserActions/>
      </div>
    </div>
    <NavigationBar />
  </nav>
);

export default Navbar;


