import React, { useState, useEffect } from 'react';

// তোমার এসেটস ফোল্ডার থেকে ছবি ইমপোর্ট
import slide1 from '../assets/hero-slides/slide1.jpg';
import slide2 from '../assets/hero-slides/slide2.jpg';
import slide3 from '../assets/hero-slides/slide3.jpg';
import slide4 from '../assets/hero-slides/slide4.jpg';

// এখানে ( { onBookingClick } ) প্রপসটি রিসিভ করছি
const Hero = ({ onBookingClick }) => {
  const slides = [
    {
      img: slide1,
      topBadge: "🇹🇭 থাইল্যান্ড স্পেশাল প্যাকেজ",
      headline: "ব্যাংকক ও ফুকেটের নীল সমুদ্রে",
      description: "সবচেয়ে কম খরচে থাইল্যান্ড ট্যুর প্যাকেজ এবং দ্রুত ভিসা প্রসেসিং। আজই আপনার স্লট বুক করুন।"
    },
    {
      img: slide2,
      topBadge: "🇲🇻 মালদ্বীপ হানিমুন অফার",
      headline: "বিলাসবহুল রিসোর্টে স্বপ্নের ছুটি",
      description: "মালদ্বীপের নীল জলে হারিয়ে যান আমাদের এক্সক্লুসিভ অল-ইনক্লুসিভ প্যাকেজে।"
    },
    {
      img: slide3,
      topBadge: "🇲🇾 মালয়েশিয়া ও সিঙ্গাপুর",
      headline: "আধুনিক শহর আর টুইন টাওয়ারের দেশে",
      description: "ফ্যামিলি ট্যুর বা বিজনেস ট্রিপ—মালয়েশিয়া ও সিঙ্গাপুরের সেরা ডিল এখন আপনার হাতের মুঠোয়।"
    },
    {
      img: slide4,
      topBadge: "🌍 গ্লোবাল ভিসা সリューション",
      headline: "বিশ্বের যেকোনো দেশের ভিসা এখন সহজ",
      description: "বাংলাদেশ থেকে আমেরিকা, ইউরোপ, ওমরাহসহ সব দেশের ভিসা প্রসেসিং করি আমরা শতভাগ নিশ্চয়তায়।"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="relative h-[550px] md:h-[650px] w-full overflow-hidden bg-black">
      {/* ইমেজ স্লাইডার অংশ */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img 
            src={slide.img} 
            alt="Trevo Holidays" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* কন্টেন্ট অংশ */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
        <div className="bg-blue-600 px-4 py-1 rounded-full text-xs md:text-sm mb-6 shadow-lg">
          {slides[currentIndex].topBadge}
        </div>
        
        <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-md">
          {slides[currentIndex].headline}
        </h1>
        
        <p className="max-w-2xl text-sm md:text-xl mb-10 text-gray-200">
          {slides[currentIndex].description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          {/* এই বাটন দুটিতে onClick={onBookingClick} যোগ করা হয়েছে */}
          <button 
            onClick={onBookingClick}
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-3 rounded-full font-bold transition-all transform active:scale-95 shadow-lg"
          >
            ভিসার জন্য কল দিন
          </button>
          <button 
            onClick={onBookingClick}
            className="border-2 border-white hover:bg-white hover:text-black px-10 py-3 rounded-full font-bold transition-all transform active:scale-95"
          >
            প্যাকেজ দেখুন
          </button>
        </div>
      </div>
      
      {/* স্লাইডার ইন্ডিকেটর (ডটস) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-yellow-500" : "w-2 bg-white/50"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;