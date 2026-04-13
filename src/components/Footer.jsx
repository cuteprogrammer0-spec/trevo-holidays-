import React from 'react';
// আইকনগুলো ইমপোর্ট করা হচ্ছে
import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = ({ language }) => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* কোম্পানি ইনফো */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-6 italic">
              Trevo<span className="text-yellow-500">Holidays</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {language === 'bn' 
                ? 'আপনার স্বপ্নের ভ্রমণকে বাস্তবে রূপ দিতে আমরা আছি আপনার পাশে। বিশ্বস্ততা আর সেবাই আমাদের মূল লক্ষ্য।' 
                : 'We are by your side to turn your dream travel into reality. Trust and service are our primary goals.'}
            </p>
          </div>

          {/* কুইক লিঙ্কস */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-yellow-500 w-fit">
              {language === 'bn' ? 'লিঙ্কসমূহ' : 'Quick Links'}
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">{language === 'bn' ? 'হোমপেজ' : 'Homepage'}</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">{language === 'bn' ? 'ট্যুর প্যাকেজ' : 'Tour Packages'}</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">{language === 'bn' ? 'ভিসা সার্ভিস' : 'Visa Services'}</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">{language === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}</a></li>
            </ul>
          </div>

          {/* কন্টাক্ট ইনফো - কার্ড অনুযায়ী আপডেট করা */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-yellow-500 w-fit">
              {language === 'bn' ? 'যোগাযোগ' : 'Contact Us'}
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>
                  {language === 'bn' 
                    ? 'স্যুইট-২৭, ৩য় তলা, রাজউক ট্রেড সেন্টার, নিকুঞ্জ-২, খিলক্ষেত, ঢাকা-১২২৯' 
                    : 'Suite-27, 3rd Floor, Rajuk Trade Centre, Nikunjo-2, Khilkhet, Dhaka-1229'}
                </span>
              </li>
              <li className="flex items-center gap-2"><span>📞</span> 01784-099443</li>
              <li className="flex items-center gap-2"><span>✉️</span> trevoholidays@gmail.com</li>
            </ul>
          </div>

          {/* সোশ্যাল মিডিয়া আইকন */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-yellow-500 w-fit">
              {language === 'bn' ? 'যুক্ত থাকুন' : 'Stay Connected'}
            </h4>
            <p className="text-gray-400 mb-6">
              {language === 'bn' ? 'লেটেস্ট অফার পেতে আমাদের ফলো করুন:' : 'Follow us to get the latest offers:'}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>

        </div>

        {/* কপিরাইট অংশ */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Trevo Holidays. 
            {language === 'bn' ? ' সর্বস্বত্ব সংরক্ষিত। ' : ' All rights reserved. '} 
            Developed by Mahdi Hasan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;