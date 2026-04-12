import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser'; // EmailJS ইম্পোর্ট করলাম

const ContactModal = ({ onClose }) => {
  // ডাটা রাখার জন্য স্টেট
  const [formData, setFormData] = useState({ name: '', phone: '', msg: '' });
  const [isSending, setIsSending] = useState(false); // লোডিং স্টেট

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // EmailJS ম্যাজিক শুরু
    emailjs.send(
      'service_klzqgnc',    // তোমার Service ID
      'template_gu04m56',   // তোমার Template ID
      {
        from_name: formData.name,
        phone_number: formData.phone,
        message: formData.msg,
        to_country: "Website Inquiry" // আপাতত এটা দিয়ে রাখলাম
      },
      'f1Au8koEA0btXYUo_'    // তোমার Public Key
    )
    .then(() => {
      alert("সফলভাবে পাঠানো হয়েছে! ইনবক্স চেক করুন বন্ধু।");
      setIsSending(false);
      onClose(); // ফর্ম বন্ধ হবে
    })
    .catch((err) => {
      console.error("এরর হয়েছে:", err);
      alert("দুঃখিত, তথ্য পাঠানো যায়নি।");
      setIsSending(false);
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* বাইরে ক্লিক করলে বন্ধ হবে */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl z-10 animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black">
          <FaTimes size={20} />
        </button>

        <h2 className="text-2xl font-bold text-blue-900 mb-6">যোগাযোগ করুন</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" placeholder="আপনার নাম" required
            className="w-full border p-3 rounded-xl outline-none focus:border-blue-500"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="tel" placeholder="ফোন নম্বর" required
            className="w-full border p-3 rounded-xl outline-none focus:border-blue-500"
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <textarea 
            placeholder="আপনার মেসেজ..." rows="3"
            className="w-full border p-3 rounded-xl outline-none focus:border-blue-500"
            onChange={(e) => setFormData({...formData, msg: e.target.value})}
          ></textarea>
          
          <button 
            type="submit" 
            disabled={isSending}
            className={`w-full font-bold py-3 rounded-xl transition-all ${isSending ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
          >
            {isSending ? "পাঠানো হচ্ছে..." : "তথ্য পাঠান"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;