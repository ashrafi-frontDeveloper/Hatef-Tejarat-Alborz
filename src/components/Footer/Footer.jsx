import { Facebook, Instagram, YouTube } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const socialIcons = [
  { icon: <Facebook />, label: 'Facebook', color: '#1877F2' },
  { icon: <Instagram />, label: 'Instagram', color: '#d92f6a' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', color: '#1DA1F2' },
  { icon: <YouTube />, label: 'YouTube', color: '#FF0000' },
];

const SocialButtons = () => {
  return (
    <div className="flex space-x-5">
      {socialIcons.map((item, i) => (
        <a
          href="#"
          key={i}
          aria-label={item.label}
          className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center text-xl shadow-sm hover:shadow-md transition-all duration-300"
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
};

const Footer = () => {
  return (
    <footer className="bg-neutral text-white pt-16 pb-10 border-t border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src={`${import.meta.env.BASE_URL}Logo-HTA.svg`}
                alt="Logo"
                className="w-9 h-9 rounded-full"
              />
              <span className="ml-3 text-xl font-bold tracking-tight text-white">
                Hatef Tejart Alborz
              </span>
            </div>
            <p className="text-base leading-relaxed text-gray-300 max-w-md">
              Connecting global businesses with verified suppliers and buyers.
              Streamline your procurement process and expand your business globally.
            </p>
            <div className="mt-6">
              <SocialButtons />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {['About', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-start">
              <CheckCircleOutlineIcon className="text-green-400 mt-1" />
              <p className="ml-2 text-sm text-gray-300">
                Join our next meeting on <span className="underline">Google Meet</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-700">
          <p className="text-center text-sm text-gray-400">
            © 2025 Hatef Tejart Alborz Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
