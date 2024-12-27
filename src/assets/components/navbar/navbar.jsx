import React, { useState, useRef, useEffect } from 'react';

import { Link } from "react-router-dom";
import logo from "../../../../public/images/logo.png";
import AZ from "../../../../public/images/AZ.png";
import down from "../../../../public/images/down.png";
// import menu from "../../../../public/images/menu.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('AZ');  // Varsayılan dil 'AZ'
  const menuRef = useRef(null);  // Menüye referans

  const languages = [
    { code: 'AZ', flagSrc: '../../../../public/images/AZ.png' }, 
    { code: 'EN', flagSrc: '../../../../public/images/en.png' },
    { code: 'RUS', flagSrc: '../../../../public/images/rus.png' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex md:items-center md:justify-between md:gap-2 md:px-[80px] md:py-[20px]">
      <div className="flex md:items-center md:gap-2">
        <img className="h-[30px]" src={logo} alt="Logo" />
        <div className="text-[18px] font-playfair">INJURIA</div>
      </div>

      <div className="hidden md:block w-1/3">
        <ul className="md:flex md:gap-[18px] md:items-center md:justify-center md:text-[16px] md:text-[#252525] font-roboto">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/haqqımızda" className="md:flex md:items-center md:gap-[2px]"><p>Haqqımızda</p><img src={down} alt="" /></Link></li>
          <li><Link to="/jurnal" className="md:flex md:items-center md:gap-[2px]"><p>Jurnal</p><img src={down} alt="" /></Link></li>
          <li><Link to="/media" className="md:flex md:items-center md:gap-[2px]"><p>Media</p></Link></li>
          <li><Link to="/bloqlar"><p>Bloqlar</p></Link></li>
          <li><Link to="/tədbirlər"><p>Tədbirlər</p></Link></li>
          <li><Link to="/qanunvericilik"><p>Qanunvericilik</p></Link></li>
        </ul>
      </div>

      <div className="flex flex-col items-center relative" ref={menuRef}>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:w-[66px] gap-[4px] md:flex items-center justify-center text-gray-500 h-[34px]"
        >
          <img src={languages.find(lang => lang.code === selectedLanguage)?.flagSrc || flag} alt="" className="w-5 h-5 mr-2 rounded-[50%]" />
          <p className=' font-[#252525] opacity-[60%]'>{selectedLanguage}</p> 
        </button>

        {isOpen && (
          <div className="flex flex-col absolute mt-10 bg-white border-[1px] border-gray-500 rounded-[10px]">
            {languages.map((language, index) => (
              <button
                key={index}
                className="flex items-center justify-start pl-3 pr-10 py-3 hover:bg-gray-200"
                onClick={() => {
                  setSelectedLanguage(language.code);  
                  setIsOpen(false);  
                }}
              >
                <img src={language.flagSrc} alt={language.code} className="w-5 h-5 mr-2 rounded-[50%]" />
                <p className=' font-[#252525] opacity-[60%]'>{language.code}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
