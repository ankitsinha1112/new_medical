import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import UploadSection from './components/UploadSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <UploadSection />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
