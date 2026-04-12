import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Features from './components/Features'
import ContactModal from './components/ContactModal'
import Footer from './components/Footer'
import './App.css'

function App() {
  // মোডাল দেখানোর জন্য স্টেট
  const [isModalOpen, setIsModalOpen] = useState(false);

  // মোডাল খোলার ফাংশন
  const handleOpenModal = () => setIsModalOpen(true);
  
  // মোডাল বন্ধ করার ফাংশন
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* ১. নেভবারে ফাংশনটি পাঠিয়ে দিলাম */}
      <Navbar onContactClick={handleOpenModal} />
      
      {/* ২. হিরো সেকশনে পাঠিয়ে দিলাম */}
      <Hero onBookingClick={handleOpenModal} />
      
      {/* ৩. এই যে এখানে ভুল ছিল! Destinations এও পাঠিয়ে দিলাম */}
      <Destinations onBookingClick={handleOpenModal} />
      
      <Features />
      <Footer />

      {/* মোডাল লজিক: যদি true হয় তবেই দেখাবে */}
      {isModalOpen && (
        <ContactModal onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default App