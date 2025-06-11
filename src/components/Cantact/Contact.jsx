import React from 'react'
import Navbar from '../Header/Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Facebook, Instagram, YouTube } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";


const socialIcons = [
  { icon: <Facebook />, label: 'Facebook', color: '#1877F2' },
  { icon: <Instagram />, label: 'Instagram', color: '#d92f6a' },
  { icon: <LinkedInIcon />, label: 'Linkdin', color: '#1DA1F2' },
  { icon: <YouTube />, label: 'YouTube', color: '#FF0000' },
];

const SocialButtons = () => {
  return (
    <div className="flex space-x-8">
      {socialIcons.map((item, i) => (
        <a
          href='#'
          key={i}
          aria-label={item.label}
          className="w-10 md:w-14 h-10 md:h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-black text-2xl transition-colors duration-300 hover:text-white"
          style={{
            transition: 'background-color 0.3s, color 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = item.color;
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#fff';
            e.currentTarget.style.color = '#000';
          }}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export default function Contact() {
  return (
    <div>
        <Navbar />
        <div className="max-[1280px] mx-auto px-4 sm:px-6 lg:px-8 my-20">
            <div className="flex items-center px-40">
                {/* logo */}
                <div className="">
                    <img src="/public/Logo-HTA.png" className='w-1/2 h-1/2 rounded-full' alt="" />
                </div>

                {/* info comany */}
                <div className="flex flex-col space-y-5">
                    {/* number */}
                    <div className="flex items-center gap-x-5">
                        <FaPhoneVolume className='w-5 h-5 ' />
                        <div className=" flex flex-col">
                            <a href='#'>+98 912 323 8106</a>
                            <a href='#'>+98 912 323 8106</a>
                        </div>
                    </div>
                    {/* email */}
                    <div className="flex items-center gap-x-5">
                        <MdEmail className='w-6 h-6' />
                        <div className="flex flex-col space-y-1">
                            <a href='#'>trading@hateftejaratalborz.info</a>
                            <a href='#'>hatef.tejarat.alborz@gmail.com</a>
                        </div>
                    </div>
                    {/* whatsapp */}
                    <div className="flex gap-x-5">
                        <IoLogoWhatsapp className='w-6 h-6' />
                        <a href="">+98 939 003 7229</a>
                    </div>
                    {/* address */}
                    <div className="flex items-center gap-x-5">
                        <FaMapMarkerAlt className='w-7 h-7' />
                        <a href="">Gökevler Mh. Özdemir Sk. Beldekent Ayazma Evleri B Blok Kat:1 D:1 No:4/1 Esenyurt -iST.</a>
                    </div>
                    {/* media */}
                    <div className="">
                        <SocialButtons />
                    </div>
                </div>
            </div>
            <div className="">
            </div>
        </div>
        <Footer />
    </div>
  )
}





