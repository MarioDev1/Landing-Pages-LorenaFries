import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import LegislativeWork from './components/LegislativeWork';
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
    const trackedScrollLevels = new Set<number>();
    let scrollTimeout: number | null = null;
    
    // Tracking de página vista
    trackPageView('Lorena Fries Monleón - Diputada Distrito 10', '/');
    
    // Tracking de engagement de página
    const handleBeforeUnload = () => {
      const timeSpent = Date.now() - startTime;
      trackPageEngagement('landing_page', timeSpent);
    };

    // Tracking de scroll con throttling CORREGIDO
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      scrollTimeout = setTimeout(() => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);
        
        // Trackear cada 25% SOLO UNA VEZ
        const scrollLevel = Math.floor(scrollPercent / 25) * 25;
        if (scrollLevel >= 0 && scrollLevel <= 100 && !trackedScrollLevels.has(scrollLevel)) {
          trackedScrollLevels.add(scrollLevel);
          trackScroll(scrollLevel);
        }
      }, 200); // Throttle más conservador
    };

    // Tracking de secciones
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.id || 'unknown_section';
          sectionStartTimes[sectionName] = Date.now();
          trackSectionView(sectionName);
        } else {
          const sectionName = entry.target.id || 'unknown_section';
          if (sectionStartTimes[sectionName]) {
            const timeSpent = Date.now() - sectionStartTimes[sectionName];
            trackSectionTime(sectionName, timeSpent);
            delete sectionStartTimes[sectionName];
          }
        }
      });
    }, observerOptions);

    // Observar secciones
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => sectionObserver.observe(section));

    // Event listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;