import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: "⚡",
      title: "দ্রুত ভিসা প্রসেসিং",
      desc: "আমরা খুবই অল্প সময়ে এবং নির্ভুলভাবে ভিসা প্রসেস নিশ্চিত করি।"
    },
    {
      id: 2,
      icon: "💰",
      title: "সাশ্রয়ী বাজেট",
      desc: "সবচেয়ে কম খরচে সেরা ইন্টারন্যাশনাল ট্যুর প্যাকেজ আমাদের কাছেই পাবেন।"
    },
    {
      id: 3,
      icon: "📞",
      title: "২৪/৭ সাপোর্ট",
      desc: "ভ্রমণকালীন যেকোনো সমস্যায় আমাদের সাপোর্ট টিম সবসময় আপনার পাশে আছে।"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* নতুন হেডিং সেকশন */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            কেন আমাদের বেছে নেবেন?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            বিশ্বস্ততা এবং প্রফেশনাল সার্ভিসের মাধ্যমে আমরা আপনার বিদেশ ভ্রমণকে করি আরও সহজ ও আনন্দদায়ক।
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f) => (
            <div key={f.id} className="text-center p-8 rounded-2xl bg-blue-50 hover:bg-yellow-50 transition-all duration-300 transform hover:-translate-y-2 shadow-sm hover:shadow-xl">
              <div className="text-6xl mb-6">{f.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-blue-900">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;