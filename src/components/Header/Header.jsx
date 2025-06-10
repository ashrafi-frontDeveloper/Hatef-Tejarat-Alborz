import React from 'react';
import Navbar from './Navbar/Navbar'
import { Facebook, Instagram, YouTube } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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



export default function Header() {
  return (
    <div className=''>
       <Navbar />
      {/* baner */}
      <div className="flex flex-col items-center justify-center space-y-10 hero-section bg-cover bg-center bg-no-repeat h-[450px]">
        <h3 className="text-secondary text-xl sm:text-3xl md:text-4xl font-bold shadow-2xl">Where quality combines with precision</h3>
        {/* media */}
        <SocialButtons />
      </div>
    </div>
  )
}
