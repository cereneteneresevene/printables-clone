import React from 'react';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa'; 

const Footer = () => {
  const links = [
    'General Terms and Conditions of Use of the PRUSA Websites',
    'Terms of Service of Printables.com',
    'Printables Club & Store Terms of Purchase',
    'Printables Club & Store Terms for Creators',
    'Privacy policy',
    'Cookie Preferences',
    'Help',
    'Contact',
    'About us'
  ];

  return (
    <footer className="bg-black text-white py-6 px-14"> 
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start">
        {/* Sol kısım: Logo veya isim*/}
        <div className="flex flex-col items-start ">
          <p className="text-2xl font-bold ">PRINTABLES.COM</p>
        </div>

        {/* Orta kısım: Linkler */}
        <div className="flex flex-col items-center">
          <ul className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm text-center"> 
            {links.map((link, index) => (
              <li key={index} className="w-full md:w-auto"> 
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-sm">&copy; 2024 Prusa Research a.s.</p>
        </div>

        {/* Sağ kısım: Sosyal medya ikonları */}
        <div className="flex justify-center lg:justify-start mt-4 lg:mt-0 space-x-4">
          <a href="#" className="text-white">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white">
            <FaYoutube size={24} />
          </a>
          <a href="#" className="text-white">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white">
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
