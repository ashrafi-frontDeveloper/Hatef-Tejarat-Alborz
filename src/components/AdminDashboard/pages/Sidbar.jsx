import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TiHome } from "react-icons/ti";
import { SiGoogleanalytics } from "react-icons/si";
import { IoAnalytics } from "react-icons/io5";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoStorefrontSharp } from "react-icons/io5";
import { TbBasketPlus } from "react-icons/tb";
import { RiTelegram2Fill } from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

// Logo component
function Logo({ isOpen }) {
  return (
    <div className='flex items-center justify-evenly border-b-2 border-white/10 pb-4'>
      <img src="/Logo-HTA.png" alt="logo" className='w-7 h-7 rounded-full' />
       {isOpen && <div className="font-bold text-sm">Hatef Tejarat Alborz</div>}
    </div>
  )
}

// Sidebar Links

function Links({ isOpen }) {
  const linkStyle = 'flex items-center gap-x-2.5 text-lg px-2 py-1 rounded-lg hover:bg-base-100 transition-all duration-300'

  const links = [
    {
      title: "Dashboard",
      items: [
        { icon: <TiHome className='w-5 h-5' />, label: 'Home', path: '/admin' },
        { icon: <SiGoogleanalytics className='w-4 h-4' />, label: 'Analytics', path: '/admin/analytics' },
        { icon: <IoAnalytics className='w-5 h-5' />, label: 'Sales', path: '/admin/sales' },
      ],
    },
    {
      title: "Quick Menu",
      items: [
        { icon: <FaUser className='w-5 h-5' />, label: 'Users', path: '/admin/users' },
        { icon: <FaUserPlus className='w-5 h-5' />, label: 'New Users', path: '/admin/new-users' },
        { icon: <IoStorefrontSharp className='w-5 h-5' />, label: 'Products', path: '/admin/products' },
        { icon: <TbBasketPlus className='w-5 h-5' />, label: 'Add Products', path: '/admin/add-product' },
        { icon: <RiTelegram2Fill className='w-5 h-5' />, label: 'Order', path: '/admin/orders' },
      ],
    },
  ]

  return (
    <div className='flex flex-col justify-between space-y-5 mt-7'>
      {links.map((section, idx) => (
        <div key={idx} className="flex flex-col border-b border-white/10 pb-3">
          {isOpen && <label className='text-gray-500 font-bold '>{section.title}</label>}
          <ul className="flex flex-col space-y-2.5 mt-2">
            {section.items.map((item, index) => (
              <Link to={item.path} key={index} className={linkStyle}>
                {item.icon}
                {isOpen && item.label}
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}




export default function Sidbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`h-dvh bg-base-300 p-4 rounded-2xl flex flex-col justify-between transition-all duration-300 ${isOpen ? 'w-60' : 'w-20'}`}>
      <div>
        {/* Toggle, Settings & Avatar */}
        <div className={`flex ${isOpen ? 'justify-between' : 'flex-col items-center space-y-4'} mb-5 border-b border-white/10 pb-3`}>
          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-base-100 p-2 rounded-full hover:bg-white/10 transition"
          >
            {isOpen ? <FiChevronsLeft className="w-5 h-5" /> : <FiChevronsRight className="w-5 h-5" />}
          </button>
          {/* Avatar */}
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src="/bruce-mars.jpg" />
            </div>
          </div>
          {/* Settings Dropdown */}
          <div className="dropdown dropdown-bottom dropdown-start">
            <a href="#" tabIndex={0} role="button">
              <IoMdSettings className="w-6 h-6" />
            </a>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-32 p-3 space-y-2 shadow-sm">
              <a href="#" className="flex items-center gap-x-2"><IoLogOut className="w-5 h-5" /> LogOut</a>
              <Link to="/" className="flex items-center gap-x-2"><TiHome className="w-5 h-5" /> Home</Link>
            </ul>
          </div>
        </div>

        <Logo isOpen={isOpen} />
        <Links isOpen={isOpen} />
      </div>
    </div>
  );
}

