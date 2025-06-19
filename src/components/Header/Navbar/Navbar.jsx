import Reac,{useState, useRef} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegUser } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import productCategories from '../../../data/ProductData/ProductData';

const Logo = () => (
  <div className="flex items-center gap-2 shrink-0">
    <img 
      alt="JinStore logo with a smiling box icon" 
      className="w-10 h-10 bg-white rounded-full" 
      src="/Logo-HTA.png" 
      width="32"
      height="32"
    />
    <span className="font-semibold text-lg select-none whitespace-nowrap text-white">Hatef Tejarat Alborz</span>
  </div>
);

const SearchBar = () => (
  <div className="flex-1 min-w-[180px] max-w-full sm:max-w-[600px]">
    <div className="relative">
      <input 
        className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-secondary" 
        placeholder="Search for products, categories or brands..."
        type="text"
      />
      <button aria-label="Search" className=" cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-secondary transition-all duration-300">
        <IoSearchOutline className='text-white w-7 h-7' />
      </button>
    </div>
  </div>
);

const UserActions = () => (
  <Link to='/validations/register'>
    <div className="flex items-center gap-4 text-xs text-gray-600 select-none shrink-0">
      <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900 whitespace-nowrap">
        <div className="flex items-center gap-x-2 leading-[1] hover:bg-secondary px-4 py-1 rounded-lg hover:text-white transition-all duration-300">
          <FaRegUser className='text-white h-5 w-5' />
          <div className="sm:text-base text-white">Sign In</div>
          <span>/</span>
          <div className="font-semibold sm:text-base text-white">Sign Up</div>
        </div>
      </div>
    </div>
  </Link>
);

const NavLink = ({ href, children }) => (
  <a className="hover:bg-secondary hover:text-white text-white px-2 sm:text-base rounded-sm transition-all duration-300 whitespace-nowrap" href={href}>
    {children}
  </a>
);


// ۲. تعریف متغیرهای انیمیشن برای خوانایی بهتر
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
        className="flex items-center gap-1 border text-white border-gray-300 rounded-md px-3 py-2 hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer"
      >
        <span>All Categories</span>
        <MdOutlineKeyboardArrowDown
          className={`text-base text-white transition-transform ${isOpen ? "rotate-180" : ""}`}
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
            className="absolute top-full left-0 mt-1 w-52 sm:w-[260px] bg-white border border-secondary rounded-md shadow-lg z-50"
          >
            <ul className="divide-y divide-gray-200 max-h-[400px] overflow-y-auto">
                  {productCategories.map((item, index) => (
                    <li key={index}>
                      <div
                        onClick={(e) => handleSubMenuToggle(e, index)}
                        className="flex items-center justify-between gap-2 px-3 py-2 text-gray-700 hover:text-white hover:bg-secondary cursor-pointer"
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
                      className="px-3 py-2 text-[12px] text-gray-600 hover:bg-secondary hover:text-white transition-all cursor-pointer"
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
    <div className="flex flex-wrap items-center gap-3 py-2 text-[13px] font-semibold text-gray-700 select-none">
      {/* Categories dropdown  */}
      <CategoriesDropdown />
      {/* Links */}
      <NavLink href="/">Home</NavLink>
      <NavLink href="/contact">Contact</NavLink>
      <NavLink href="/about">About Us</NavLink>
      <NavLink href="/verifications">Verifications</NavLink>
      <div className="flex ml-auto sm:hidden">
        <UserActions/>
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


