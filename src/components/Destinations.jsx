import React, { useState, useEffect } from 'react';

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

  const visibleDestinations = showAll ? destinations : destinations.slice(0, 4);

  if (loading) return (
    <div className="text-center py-20 font-bold">
      {language === 'bn' ? 'লোড হচ্ছে...' : 'Loading...'}
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          {language === 'bn' ? 'আমাদের জনপ্রিয় গন্তব্য' : 'Our Popular Destinations'}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {language === 'bn' 
            ? 'বিশ্বের যে প্রান্তেই যেতে চান না কেন, আমরা আছি আপনার পাশে। জনপ্রিয় গন্তব্যগুলো নিচে দেখুন।' 
            : 'No matter where in the world you want to go, we are by your side. Check out the popular destinations below.'}
        </p>
        
        {/* কার্ড গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleDestinations.map((dest, index) => (
            <div key={dest.id} className="bg-white rounded-2xl overflow-hidden shadow-lg group border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="relative h-56 overflow-hidden bg-gray-100 flex items-center justify-center">
                {dest.image ? (
                  <img 
                    src={dest.image} 
                    alt={language === 'bn' ? dest.countryBN : dest.countryEN} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-4">
                    <img 
                      src={`https://flagcdn.com/w320/${dest.countryCode.toLowerCase()}.png`} 
                      alt={dest.countryEN}
                      className="w-32 shadow-md rounded-sm group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {language === 'bn' ? dest.countryBN : dest.countryEN}
                </h3>
                <p className="text-sm text-gray-500 mb-4 font-medium">
                  {language === 'bn' ? 'ভিসা:' : 'Visa:'} {language === 'bn' ? dest.visaTypeBN : dest.visaTypeEN}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">
                    {language === 'bn' ? dest.priceBN : dest.priceEN}
                  </span>
                  <button 
                    onClick={onBookingClick}
                    className="bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-lg font-bold text-sm transition-colors active:scale-95 shadow-sm"
                  >
                    {language === 'bn' ? 'বুকিং' : 'Booking'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All বাটন */}
        {!showAll && destinations.length > 4 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAll(true)}
              className="bg-blue-600 text-white px-10 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:-translate-y-1"
            >
              {language === 'bn' 
                ? `সকল গন্তব্য দেখুন (${destinations.length}+)` 
                : `View All Destinations (${destinations.length}+)`}
            </button>
          </div>
        )}

        {showAll && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAll(false)}
              className="text-blue-600 font-bold hover:underline"
            >
              {language === 'bn' ? 'কমিয়ে দেখান' : 'Show Less'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Destinations;