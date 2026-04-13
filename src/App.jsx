import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Features from './components/Features'
import ContactModal from './components/ContactModal'
import Footer from './components/Footer'
import './App.css'

function App() {
  // ১. ল্যাঙ্গুয়েজ স্টেট (ডিফল্ট 'bn' বা বাংলা রাখলাম)
  const [language, setLanguage] = useState('bn');

  // মোডাল দেখানোর জন্য স্টেট
  const [isModalOpen, setIsModalOpen] = useState(false);

  // মোডাল খোলার ফাংশন
  const handleOpenModal = () => setIsModalOpen(true);
  
  // মোডাল বন্ধ করার ফাংশন
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* নেভবারে ল্যাঙ্গুয়েজ এবং সেটি পরিবর্তন করার ফাংশন পাঠিয়ে দিলাম */}
      <Navbar 
        language={language} 
        setLanguage={setLanguage} 
        onContactClick={handleOpenModal} 
      />
      
      {/* হিরো সেকশনে ল্যাঙ্গুয়েজ পাঠিয়ে দিলাম */}
      <Hero 
        language={language} 
        onBookingClick={handleOpenModal} 
      />
      
      {/* ডেস্টিনেশন সেকশনে ল্যাঙ্গুয়েজ পাঠিয়ে দিলাম */}
      <Destinations 
        language={language} 
        onBookingClick={handleOpenModal} 
      />
      
      {/* ফিচারস এবং ফুটারেও ল্যাঙ্গুয়েজ পাঠিয়ে দিলাম যাতে ওগুলোও পরিবর্তন হতে পারে */}
      <Features language={language} />
      <Footer language={language} />

      {/* মোডাল লজিক */}
      {isModalOpen && (
        <ContactModal 
          language={language} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  )
}

export default App