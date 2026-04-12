import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onContactClick }) => {
  return (
    // bg-white বাদ দিয়ে bg-transparent এবং sticky এর বদলে absolute ব্যবহার করলাম
    <nav className="absolute top-0 left-0 w-full z-50 py-5 bg-transparent">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* লোগো */}
        <Link to="/" className="text-2xl font-bold text-white">
          Trevo<span className="text-yellow-500">Holidays</span>
        </Link>
        
        {/* মেনু এবং বাটন একসাথে ডানপাশে রাখার জন্য একটি div */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 font-semibold text-white">
            <li><Link to="/" className="hover:text-yellow-500 transition">Home</Link></li>
            <li><Link to="/packages" className="hover:text-yellow-500 transition">Packages</Link></li>
            <li><Link to="/services" className="hover:text-yellow-500 transition">Visa</Link></li>
            <li><Link to="/about" className="hover:text-yellow-500 transition">About Us</Link></li>
          </ul>

          {/* যোগাযোগ বাটন - আগের মতো হলুদ কালার করে দিলাম */}
          <button 
            onClick={onContactClick}
            className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition shadow-lg active:scale-95"
          >
            যোগাযোগ করুন
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;