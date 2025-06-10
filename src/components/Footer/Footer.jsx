import { Facebook, Instagram, YouTube } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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
const Footer = () => {
  return (
    <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center">
                        <img src="/public/Logo-HTA.svg" alt="" className="w-8 h-8 rounded-full" />
                        <span className="ml-2 text-xl font-semibold text-white">Hatef Tejart Alborz</span>
                    </div>
                    <p className="mt-4 text-base text-white">
                        Connecting global businesses with verified suppliers and buyers. Streamline your procurement process and expand your business globally.
                    </p>
                    <div className="mt-6 flex space-x-6">
                        <SocialButtons />
                    </div>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                    <ul className="mt-4 space-y-4">
                        <li>
                            <a href="#" className="text-base text-gray-300 hover:text-white">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-base text-gray-300 hover:text-white">Blog</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                    <ul className="mt-4 space-y-4">
                        {
                            ['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => {
                                return (
                                    <li key={item}>
                                        <a href="#" className='text-base text-gray-300 hover:text-white'>{item}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="mt-8">
                        <div className="flex items-center">
                            <CheckCircleOutlineIcon className='w-5 h-5 text-green-400' />
                            <p className="ml-2 text-sm text-gray-300">
                                Join our next meeting on Google Meet
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-8">
                <p className="text-base text-gray-400 text-center">
                    © 2025 Hatef Tejart Alborz Platform. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;

