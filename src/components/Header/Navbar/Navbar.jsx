import Reac,{useState, useRef} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegUser } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

const Logo = () => (
  <div className="flex items-center gap-2 shrink-0">
    <img 
      alt="JinStore logo with a smiling box icon" 
      className="w-10 h-10 bg-secondary" 
      src="/Logo-HTA-1.png" 
      width="32"
      height="32"
    />
    <span className="font-semibold text-lg select-none whitespace-nowrap text-secondery-700">Hatef Tejarat Alborz</span>
  </div>
);

const SearchBar = () => (
  <div className="flex-1 min-w-[180px] max-w-full sm:max-w-[600px]">
    <div className="relative">
      <input 
        className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm text-secondery-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-secondary" 
        placeholder="Search for products, categories or brands..."
        type="text"
      />
      <button aria-label="Search" className=" cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-secondary transition-all duration-300">
        <IoSearchOutline className='w-7 h-7' />
      </button>
    </div>
  </div>
);

const UserActions = () => (
  <div className="flex items-center gap-4 text-xs text-gray-600 select-none shrink-0">
    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900 whitespace-nowrap">
      <div className="flex items-center gap-x-2 leading-[1] hover:bg-secondary px-4 py-1 rounded-lg hover:text-white transition-all duration-300">
        <FaRegUser className='h-5 w-5' />
        <div className="sm:text-base">Sign In</div>
        <span>/</span>
        <div className="font-semibold sm:text-base">Sign Up</div>
      </div>
    </div>
  </div>
);

const NavLink = ({ href, children }) => (
  <a className="hover:bg-secondary hover:text-white px-2 sm:text-base rounded-sm transition-all duration-300 whitespace-nowrap" href={href}>
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
  const categories = [
    // ... محتوای آرایه شما بدون تغییر باقی می‌ماند
    { label: "Cold rolled carbon steel", subMenu: ['Cold rolled carbon steel sheet', 'Cold rolled carbon steel strip', 'Cold rolled carbon steel coil'] },
    { label: "Hot rolled carbon steel", subMenu: ['Hot rolled carbon steel sheet', 'Hot rolled carbon steel coil', 'Hot rolled carbon steel strip'] },
    { label: "Galvanized wire", subMenu: ['Carbon steel checkered sheet', 'Carbon steel checkered coil', 'Carbon steel patterned belt'] },
    { label: "Galvanized steel", subMenu: ['Galvanized carbon steel sheet', 'Galvanized carbon steel coil', 'Galvanized carbon steel strip'] },
    { label: "Color coated steel", subMenu: ['Color plate', 'Color roll'] },
    { label: "Corrugated sheet", subMenu: ['Galvanized corrugated sheet', 'Color coated corrugated sheet'] },
    { label: "Carbon Steel long product", subMenu: ['Carbon steel seamless pipe', 'Carbon steel round pipe', 'Cold rolled carbon steel pipe', 'Carbon steel square pipe'] },
    { label: "Cold rolled carbon steel", subMenu: ['Carbon steel square bar', 'Carbon steel round bar', 'Anisotropic steel bar'] },
    { label: "Carbon steel profile", subMenu: ['Carbon steel angle', 'Carbon steel channel', 'Carbon steel profile'] },
    { label: "Stainless steel rod", subMenu: ['Stainless steel rebar', 'Stainless steel square bar', 'Stainless steel profiled bar'] },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setActiveSubMenu(null);
        }}
        className="flex items-center gap-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer"
      >
        <span>All Categories</span>
        <MdOutlineKeyboardArrowDown
          className={`text-base transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* ۳. استفاده از AnimatePresence برای مدیریت انیمیشن باز و بسته شدن */}
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
              {categories.map((item, index) => (
                <li key={index}>
                  <div
                    onClick={(e) => handleSubMenuToggle(e, index)}
                    className="flex items-center justify-between gap-2 px-3 py-2 text-gray-700 hover:text-white hover:bg-secondary cursor-pointer"
                  >
                    <span>{item.label}</span>
                    {item.subMenu && (
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
              {activeSubMenu !== null && categories[activeSubMenu]?.subMenu && (
                // ۵. تبدیل ul به motion.ul و اعمال انیمیشن منوی فرعی
                <motion.ul
                  key={activeSubMenu} // کلید برای تشخیص تغییر منو توسط AnimatePresence
                  variants={subMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute left-full w-40 sm:w-[260px] bg-white rounded-2xl shadow-lg"
                  style={{ top: `${subMenuTop}px` }}
                >
                  {categories[activeSubMenu].subMenu.map((sub, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-3 py-2 text-[12px] text-gray-600 hover:bg-secondary hover:text-white transition-all"
                    >
                      {sub}
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
      <NavLink href="#">Home</NavLink>
      <NavLink href="#">Blog</NavLink>
      <NavLink href="#">Contact</NavLink>
      <NavLink href="#">About Us</NavLink>
      <NavLink href="#">My account</NavLink>
      <div className="flex ml-auto sm:hidden">
        <UserActions/>
      </div>
    </div>
  </nav>
);

const Navbar = () => (

  <header className='shadow-sm'>
    <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-3">
      <Logo />
      <SearchBar />
      <div className="hidden sm:flex">
        <UserActions/>
      </div>
    </div>
    <NavigationBar />
  </header>
);

export default Navbar;


