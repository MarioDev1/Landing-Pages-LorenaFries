import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import LegislativeWork from './components/LegislativeWork';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { 
  trackPageEngagement, 
  trackSectionView, 
  trackPageView,
  trackScroll,
  trackSectionTime
} from './utils/tracking';

function App() {
  useEffect(() => {
    const startTime = Date.now();
    const sectionStartTimes: Record<string, number> = {};
    
    // Tracking de página vista
    trackPageView('Lorena Fries Monleón - Diputada Distrito 10', '/');
    
    // Tracking de engagement de página
    const handleBeforeUnload = () => {
      const timeSpent = Date.now() - startTime;
      trackPageEngagement('landing_page', timeSpent);
    };

    // Tracking de scroll
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      // Trackear cada 25% de scroll
      if (scrollPercent % 25 === 0) {
        trackScroll(scrollPercent);
      }
    };

    // Tracking de visibilidad de secciones
    const observerOptions = {
      threshold: 0.5, // Sección visible al 50%
      rootMargin: '0px 0px -100px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.id || 'unknown_section';
          sectionStartTimes[sectionName] = Date.now();
          trackSectionView(sectionName);
        } else {
          // Cuando la sección sale de vista, calcular tiempo
          const sectionName = entry.target.id || 'unknown_section';
          if (sectionStartTimes[sectionName]) {
            const timeSpent = Date.now() - sectionStartTimes[sectionName];
            trackSectionTime(sectionName, timeSpent);
            delete sectionStartTimes[sectionName];
          }
        }
      });
    }, observerOptions);

    // Observar todas las secciones
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => sectionObserver.observe(section));

    // Event listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('scroll', handleScroll);
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <Hero />
      <About />
      <Timeline />
      <LegislativeWork />
      {/* <News /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;