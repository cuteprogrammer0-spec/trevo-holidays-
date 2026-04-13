import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Destinations from './components/Destinations'
import Features from './components/Features'
import Gallery from './components/Gallery' 
import ContactModal from './components/ContactModal'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [language, setLanguage] = useState('bn');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // এই স্টেটটি ঠিক করবে আমরা কোন পেজে আছি ('home' অথবা 'about')
  const [currentView, setCurrentView] = useState('home');

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-x-hidden">
      {/* নেভবারে setView এবং currentView পাঠানো হয়েছে */}
      <Navbar 
        language={language} 
        setLanguage={setLanguage} 
        onContactClick={handleOpenModal} 
        setView={setCurrentView}
        currentView={currentView}
      />
      
      <main>
        {currentView === 'home' ? (
          /* হোম ভিউ: যখন currentView 'home' থাকবে */
          <>
            <Hero language={language} onBookingClick={handleOpenModal} />
            <Services language={language} />
            <Destinations language={language} onBookingClick={handleOpenModal} />
            <Features language={language} />
          </>
        ) : (
          /* গ্যালারি ভিউ: যখন currentView 'about' থাকবে */
          <Gallery language={language} />
        )}
      </main>

      <Footer language={language} />

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        language={language} 
      />
    </div>
  )
}

export default App