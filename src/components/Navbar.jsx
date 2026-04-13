import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

// এখানে currentView প্রপটি যোগ করা হয়েছে
const Navbar = ({ onContactClick, language, setLanguage, setView, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // লজিক: যদি ইউজার স্ক্রল করে অথবা গ্যালারি (about) পেজে থাকে, তবে নেভবার ডার্ক হবে
  const isNavbarDark = scrolled || currentView === 'about';

  const menuItems = [
    { title: { bn: 'হোম', en: 'Home' }, view: 'home' },
    { title: { bn: 'প্যাকেজ', en: 'Packages' }, view: 'home' },
    { title: { bn: 'ভিসা', en: 'Visa' }, view: 'home' },
    { title: { bn: 'আমাদের সম্পর্কে', en: 'About' }, view: 'about' },
  ];

  const handleNavigation = (view) => {
    setView(view);
    setIsOpen(false);
    window.scrollTo(0, 0); // পেজ চেঞ্জ হলে একদম ওপরে নিয়ে যাবে
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isNavbarDark ? "bg-slate-900 shadow-xl py-3" : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        
        {/* লোগো */}
        <div onClick={() => handleNavigation('home')} className="text-xl md:text-2xl font-bold text-white tracking-tight cursor-pointer">
          Trevo<span className="text-yellow-500">Holidays</span>
        </div>
        
        {/* ডেস্কটপ মেনু */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8 font-medium text-white/90">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button 
                  onClick={() => handleNavigation(item.view)} 
                  className={`hover:text-yellow-500 transition-colors relative group ${currentView === item.view ? 'text-yellow-500' : ''}`}
                >
                  {item.title[language]}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-500 transition-all ${currentView === item.view ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="flex bg-white/10 p-1 rounded-full border border-white/20 text-xs">
              <button onClick={() => setLanguage('bn')} className={`px-3 py-1 rounded-full transition ${language === 'bn' ? 'bg-yellow-500 text-black font-bold' : 'text-white'}`}>BN</button>
              <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded-full transition ${language === 'en' ? 'bg-yellow-500 text-black font-bold' : 'text-white'}`}>EN</button>
            </div>
            <button onClick={onContactClick} className="bg-yellow-500 text-black px-6 py-2.5 rounded-full font-bold hover:bg-yellow-400 transition shadow-lg active:scale-95">
              {language === 'bn' ? 'যোগাযোগ' : 'Contact'}
            </button>
          </div>
        </div>

        {/* মোবাইল বাটন */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')} className="text-white text-sm font-bold bg-white/10 px-3 py-1 rounded-md border border-white/20">
            {language === 'bn' ? 'EN' : 'BN'}
          </button>
          <button onClick={() => setIsOpen(true)} className="text-white text-3xl"><HiMenuAlt3 /></button>
        </div>
      </div>

      {/* মোবাইল মেনু */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed right-0 top-0 h-full w-[280px] bg-slate-900 z-[120] p-8 shadow-2xl flex flex-col">
              <div className="flex justify-between items-center mb-10 text-white">
                <span className="text-xl font-bold">Menu</span>
                <button onClick={() => setIsOpen(false)}><HiX size={30} /></button>
              </div>
              <ul className="flex flex-col gap-6 text-lg text-white font-medium">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <button onClick={() => handleNavigation(item.view)} className="hover:text-yellow-500 block py-2 border-b border-white/5 w-full text-left">
                      {item.title[language]}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pb-10">
                <button onClick={() => { setIsOpen(false); onContactClick(); }} className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold">
                  {language === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;