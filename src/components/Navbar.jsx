import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onContactClick, language, setLanguage }) => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-5 bg-transparent">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* লোগো */}
        <Link to="/" className="text-2xl font-bold text-white">
          Trevo<span className="text-yellow-500">Holidays</span>
        </Link>
        
        <div className="flex items-center gap-6">
          {/* মেনু আইটেম - ভাষার ওপর ভিত্তি করে নাম পরিবর্তন হবে */}
          <ul className="hidden md:flex gap-8 font-semibold text-white">
            <li>
              <Link to="/" className="hover:text-yellow-500 transition">
                {language === 'bn' ? 'হোম' : 'Home'}
              </Link>
            </li>
            <li>
              <Link to="/packages" className="hover:text-yellow-500 transition">
                {language === 'bn' ? 'প্যাকেজ' : 'Packages'}
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-500 transition">
                {language === 'bn' ? 'ভিসা' : 'Visa'}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-500 transition">
                {language === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}
              </Link>
            </li>
          </ul>

          {/* ভাষা পরিবর্তনের বাটন (Language Switcher) */}
          <div className="flex bg-white/20 p-1 rounded-full border border-white/30 text-sm">
            <button 
              onClick={() => setLanguage('bn')}
              className={`px-3 py-1 rounded-full transition ${language === 'bn' ? 'bg-yellow-500 text-black font-bold' : 'text-white'}`}
            >
              BN
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full transition ${language === 'en' ? 'bg-yellow-500 text-black font-bold' : 'text-white'}`}
            >
              EN
            </button>
          </div>

          {/* যোগাযোগ বাটন */}
          <button 
            onClick={onContactClick}
            className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition shadow-lg active:scale-95"
          >
            {language === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'}
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;