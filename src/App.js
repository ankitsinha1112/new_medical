import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import UploadSection from './components/UploadSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Resources from './components/Resources';
import ContactSection from './components/Contact';

const App = () => {
  // Create refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const uploadRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const resourcesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Header 
        heroRef={heroRef} 
        aboutRef={aboutRef} 
        // uploadRef={uploadRef} 
        servicesRef={servicesRef} 
        testimonialsRef={testimonialsRef} 
        resourcesRef={resourcesRef} 
        contactRef={contactRef} 
      />
      <div ref={heroRef}><Hero /></div>
      <div ref={aboutRef}><About /></div>
      {/* <div ref={uploadRef}><UploadSection /></div> */}
      <div ref={servicesRef}><Services /></div>
      <div ref={testimonialsRef}><Testimonials /></div>
      <div ref={resourcesRef}><Resources /></div>
      <div ref={contactRef}><ContactSection /></div>
      <Footer />
    </div>
  );
};

export default App;
