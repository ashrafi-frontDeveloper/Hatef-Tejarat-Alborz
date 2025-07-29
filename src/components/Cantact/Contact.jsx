import React from 'react';
import { Facebook, Instagram } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";

const socialIcons = [
  { icon: <Facebook />, label: 'Facebook', color: '#1877F2' },
  { icon: <Instagram />, label: 'Instagram', color: '#d92f6a' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', color: '#1DA1F2' },
];

const SocialButtons = () => {
  return (
    <div className="flex gap-4 mt-4">
      {socialIcons.map((item, i) => (
        <a
          href="#"
          key={i}
          aria-label={item.label}
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-black text-xl transition-all duration-300 hover:text-white"
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
};

export default function Contact() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Logo */}
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src={`${import.meta.env.BASE_URL}Logo-HTA.png`}
            alt="Company Logo"
            className="w-32 h-32 lg:w-48 lg:h-48 rounded-full object-cover"
          />
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-1/2 space-y-5 text-neutral text-sm sm:text-base">
          {/* Phone */}
          <div className="flex items-start gap-4">
            <FaPhoneVolume className="w-6 h-6 text-primary mt-1" />
            <div>
              <a href="tel:+989123238106" className="block hover:underline">+98 930 473 0339</a>
              <a href="tel:+989123238106" className="block hover:underline">+98 930 473 0339</a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <MdEmail className="w-6 h-6 text-primary mt-1" />
            <div>
              <a href="mailto:trading@hateftejaratalborz.info" className="block hover:underline">
                trading@hateftejaratalborz.info
              </a>
              <a href="mailto:hatef.tejarat.alborz@gmail.com" className="block hover:underline">
                hatef.tejarat.alborz@gmail.com
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4">
            <IoLogoWhatsapp className="w-6 h-6 text-green-500" />
            <a href="https://wa.me/989390037229" className="hover:underline">+98 939 003 7229</a>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="w-6 h-6 text-primary mt-1" />
            <p className="leading-relaxed">
              Gökevler Mh. Özdemir Sk. Beldekent Ayazma Evleri B Blok Kat:1 D:1 No:4/1 Esenyurt - iST.
            </p>
          </div>

          {/* Social Media */}
          <SocialButtons />
        </div>
      </div>
    </div>
  );
}
