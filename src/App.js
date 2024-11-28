import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Join from './components/Join';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Table from './components/Table';
import HeroSection from './components/HeroSection';
import Testimonials from './components/Testimonials';
import CoachCarousel from './components/CoachCarousel';


function App() {
  return (
    <div className="App" >
      <Navbar />
      <Header />
      <Join />
      <Table />
      <Testimonials />
      <Features />
      <HeroSection />
      <HowItWorks />
      <CoachCarousel />
      <Footer />
    </div>
  
  );
}

export default App;