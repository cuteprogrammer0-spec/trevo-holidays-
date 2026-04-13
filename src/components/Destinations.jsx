import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Destinations = ({ onBookingClick, language }) => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading JSON:", err);
        setLoading(false);
      });
  }, []);

  const displayCount = showAll ? destinations.length : 4;

  if (loading) return (
    <div className="flex items-center justify-center py-40">
      <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <section className="py-20 bg-[#F8FAFC]" id="destinations">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">
            {language === 'bn' ? 'আমাদের জনপ্রিয় গন্তব্য' : 'Our Popular Destinations'}
          </h2>
          <div className="h-1.5 w-20 bg-yellow-500 mx-auto rounded-full mb-6" />
        </div>
        
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence>
            {destinations.slice(0, displayCount).map((dest) => (
              <motion.div 
                key={dest.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img 
                    src={dest.image || `https://flagcdn.com/w320/${dest.countryCode.toLowerCase()}.png`} 
                    alt={dest.countryEN} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-blue-700 font-bold text-sm">
                    {language === 'bn' ? dest.priceBN : dest.priceEN}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-slate-800">
                    {language === 'bn' ? dest.countryBN : dest.countryEN}
                  </h3>
                  <p className="text-sm text-slate-500 mb-6 font-medium">
                    {language === 'bn' ? 'ভিসা:' : 'Visa:'} {language === 'bn' ? dest.visaTypeBN : dest.visaTypeEN}
                  </p>
                  <button 
                    onClick={onBookingClick}
                    className="w-full bg-slate-900 hover:bg-yellow-500 hover:text-black text-white py-3 rounded-2xl font-bold transition-all"
                  >
                    {language === 'bn' ? 'বুকিং করুন →' : 'Book Now →'}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-16">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-600 text-white px-12 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl"
          >
            {showAll 
              ? (language === 'bn' ? 'কমিয়ে দেখান' : 'Show Less')
              : (language === 'bn' ? `সকল গন্তব্য দেখুন (${destinations.length}+)` : `View All (${destinations.length}+)`)
            }
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;