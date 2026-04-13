import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

const ContactModal = ({ isOpen, onClose, language }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', msg: '' });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send(
      'service_klzqgnc',    // Your Service ID
      'template_gu04m56',   // Your Template ID
      {
        from_name: formData.name,
        phone_number: formData.phone,
        message: formData.msg,
        to_country: "Website Inquiry"
      },
      'f1Au8koEA0btXYUo_'    // Your Public Key
    )
    .then(() => {
      alert(language === 'bn' ? "সফলভাবে পাঠানো হয়েছে!" : "Sent successfully!");
      setIsSending(false);
      setFormData({ name: '', phone: '', msg: '' }); // ফর্ম রিসেট
      onClose();
    })
    .catch((err) => {
      console.error("Error:", err);
      alert(language === 'bn' ? "দুঃখিত, পাঠানো যায়নি।" : "Sorry, sending failed.");
      setIsSending(false);
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl z-[160]"
          >
            <button 
              onClick={onClose} 
              className="absolute top-5 right-5 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
            >
              <HiX className="text-xl text-slate-600" />
            </button>

            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              {language === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'}
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              {language === 'bn' ? 'নিকুঞ্জ-২, খিলক্ষেত, ঢাকা-১২২৯' : 'Nikunjo-2, Khilkhet, Dhaka-1229'}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder={language === 'bn' ? "আপনার নাম" : "Your Name"}
                  required
                  value={formData.name}
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:border-blue-500 focus:bg-white transition-all"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder={language === 'bn' ? "ফোন নম্বর" : "Phone Number"}
                  required
                  value={formData.phone}
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:border-blue-500 focus:bg-white transition-all"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <textarea 
                  placeholder={language === 'bn' ? "আপনার মেসেজ..." : "Your Message..."}
                  rows="3"
                  value={formData.msg}
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
                  onChange={(e) => setFormData({...formData, msg: e.target.value})}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSending}
                className={`w-full font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-100 ${
                  isSending 
                  ? 'bg-slate-300 cursor-not-allowed text-slate-500' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white active:scale-95'
                }`}
              >
                {isSending 
                  ? (language === 'bn' ? "পাঠানো হচ্ছে..." : "Sending...") 
                  : (language === 'bn' ? "তথ্য পাঠান" : "Send Inquiry")}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;