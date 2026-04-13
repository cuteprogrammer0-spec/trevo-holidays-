import React from 'react';

const Features = ({ language }) => {
  const features = [
    {
      id: 1,
      icon: "⚡",
      title: {
        bn: "দ্রুত ভিসা প্রসেসিং",
        en: "Fast Visa Processing"
      },
      desc: {
        bn: "আমরা খুবই অল্প সময়ে এবং নির্ভুলভাবে ভিসা প্রসেস নিশ্চিত করি।",
        en: "We ensure accurate visa processing in a very short time."
      }
    },
    {
      id: 2,
      icon: "💰",
      title: {
        bn: "সাশ্রয়ী বাজেট",
        en: "Affordable Budget"
      },
      desc: {
        bn: "সবচেয়ে কম খরচে সেরা ইন্টারন্যাশনাল ট্যুর প্যাকেজ আমাদের কাছেই পাবেন।",
        en: "You will find the best international tour packages at the lowest cost with us."
      }
    },
    {
      id: 3,
      icon: "📞",
      title: {
        bn: "২৪/৭ সাপোর্ট",
        en: "24/7 Support"
      },
      desc: {
        bn: "ভ্রমণকালীন যেকোনো সমস্যায় আমাদের সাপোর্ট টিম সবসময় আপনার পাশে আছে।",
        en: "Our support team is always by your side for any problems during your travel."
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* হেডিং সেকশন */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            {language === 'bn' ? 'কেন আমাদের বেছে নেবেন?' : 'Why Choose Us?'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'bn' 
              ? 'বিশ্বস্ততা এবং প্রফেশনাল সার্ভিসের মাধ্যমে আমরা আপনার বিদেশ ভ্রমণকে করি আরও সহজ ও আনন্দদায়ক।' 
              : 'Through trust and professional service, we make your international travel easier and more enjoyable.'}
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f) => (
            <div key={f.id} className="text-center p-8 rounded-2xl bg-blue-50 hover:bg-yellow-50 transition-all duration-300 transform hover:-translate-y-2 shadow-sm hover:shadow-xl">
              <div className="text-6xl mb-6">{f.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-blue-900">
                {language === 'bn' ? f.title.bn : f.title.en}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {language === 'bn' ? f.desc.bn : f.desc.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;