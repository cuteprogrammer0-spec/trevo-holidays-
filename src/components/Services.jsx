import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineTicket, HiOutlineGlobe, HiOutlineOfficeBuilding, HiOutlineMap } from 'react-icons/hi';

const Services = ({ language }) => {
  const services = [
    {
      id: 'air-ticket',
      icon: <HiOutlineTicket />,
      titleEN: 'Air Ticket',
      titleBN: 'এয়ার টিকিট',
      descEN: 'Domestic and international flight bookings at competitive prices.',
      descBN: 'সাশ্রয়ী মূল্যে অভ্যন্তরীণ এবং আন্তর্জাতিক ফ্লাইটের টিকিট বুকিং।',
      gradient: 'from-blue-500 to-cyan-400',
      action: null
    },
    {
      id: 'visa-processing',
      icon: <HiOutlineGlobe />,
      titleEN: 'Visa Processing',
      titleBN: 'ভিসা প্রসেসিং',
      descEN: 'Expert guidance for tourist, medical, and business visas.',
      descBN: 'ট্যুরিস্ট, মেডিকেল এবং বিজনেস ভিসার জন্য নির্ভরযোগ্য সহায়তা।',
      gradient: 'from-emerald-500 to-teal-400',
      action: 'destinations'
    },
    {
      id: 'hotel-booking',
      icon: <HiOutlineOfficeBuilding />,
      titleEN: 'Hotel Booking',
      titleBN: 'হোটেল বুকিং',
      descEN: 'Luxury and budget-friendly hotels across the globe.',
      descBN: 'বিশ্বজুড়ে বিলাসবহুল এবং সাশ্রয়ী হোটেল বুকিং সুবিধা।',
      gradient: 'from-purple-500 to-indigo-400',
      action: null
    },
    {
      id: 'tour-package',
      icon: <HiOutlineMap />,
      titleEN: 'Tour Packages',
      titleBN: 'ট্যুর প্যাকেজ',
      descEN: 'Customized tour plans for families and corporate groups.',
      descBN: 'পরিবার এবং কর্পোরেট গ্রুপের জন্য কাস্টমাইজড ট্যুর প্ল্যান।',
      gradient: 'from-orange-500 to-yellow-400',
      action: null
    }
  ];

  const handleScroll = (targetId) => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-24 bg-[#F1F5F9] relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            {language === 'bn' ? 'আমাদের বিশেষ সেবাসমূহ' : 'Our Specialized Services'}
          </motion.h2>
          <div className="h-2 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -12 }}
              viewport={{ once: true }}
              onClick={() => handleScroll(service.action)}
              className="relative group cursor-pointer"
            >
              {/* কার্ড ব্যাকগ্রাউন্ড */}
              <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-white" />
              
              {/* কার্ড কন্টেন্ট */}
              <div className="relative p-10 flex flex-col items-center text-center">
                {/* আইকন বক্স */}
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center text-4xl text-white shadow-lg shadow-blue-200 group-hover:rotate-[15deg] transition-all duration-500 mb-8`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-extrabold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {language === 'bn' ? service.titleBN : service.titleEN}
                </h3>
                
                <p className="text-slate-500 text-[15px] leading-relaxed mb-6 font-medium">
                  {language === 'bn' ? service.descBN : service.descEN}
                </p>

                {/* ডেকোরেটিভ লাইন */}
                <div className="w-10 h-1 bg-slate-100 rounded-full group-hover:w-20 group-hover:bg-blue-400 transition-all duration-500" />
              </div>

              {/* হোভার বর্ডার ইফেক্ট */}
              <div className={`absolute -inset-[2px] bg-gradient-to-br ${service.gradient} rounded-[2.6rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;