import React, { useState, useEffect } from 'react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { trackSocialMediaClick } from '../utils/tracking';

const FloatingSocialBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar después de 300px de scroll
      const shouldShow = window.scrollY > 300;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-in-out flex items-center gap-3
      ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
    >
      {/* Texto vertical */}
      <div className="relative py-3">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-accent-500/10 rounded-full blur-md"></div>
        <p className="text-white text-xs font-medium tracking-widest [writing-mode:vertical-lr] transform rotate-180 relative z-10 
          py-4 px-1 rounded-full bg-secondary-600/80 backdrop-blur-sm border border-white/10 select-none
          animate-pulse">
          SÍGUEME
        </p>
      </div>

      {/* Container principal con fondo y efecto de blur */}
      <div className="bg-secondary-600/80 backdrop-blur-sm rounded-full py-4 px-3
        border border-white/10 relative group hover:bg-secondary-500/80 transition-all duration-500">
        
        {/* Efecto de brillo en hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/0 via-primary-500/0 to-primary-500/0 
          group-hover:from-primary-500/10 group-hover:via-accent-500/10 group-hover:to-primary-500/10 
          rounded-full transition-all duration-500"></div>

        {/* Contenedor de iconos sociales */}
        <div className="flex flex-col gap-3 relative z-10">
          <a
            href="https://bit.ly/Instagram-Lore-Fries"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSocialMediaClick('instagram')}
            className="relative group"
            aria-label="Sígueme en Instagram"
          >
            <div className="absolute inset-0 rounded-full blur group-hover:bg-primary-500/30 transition-all duration-300"></div>
            <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 
              group-hover:scale-110 group-hover:-translate-x-1">
              <Instagram className="w-5 h-5 text-white group-hover:text-primary-200 transition-colors duration-300" />
            </div>
          </a>

          <a
            href="https://bit.ly/X-Lore-Fries"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSocialMediaClick('twitter')}
            className="relative group"
            aria-label="Sígueme en Twitter"
          >
            <div className="absolute inset-0 rounded-full blur group-hover:bg-accent-500/30 transition-all duration-300"></div>
            <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 
              group-hover:scale-110 group-hover:-translate-x-1">
              <Twitter className="w-5 h-5 text-white group-hover:text-accent-200 transition-colors duration-300" />
            </div>
          </a>

          <a
            href="https://bit.ly/Facebook-Lore-Fries"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSocialMediaClick('facebook')}
            className="relative group"
            aria-label="Sígueme en Facebook"
          >
            <div className="absolute inset-0 rounded-full blur group-hover:bg-primary-500/30 transition-all duration-300"></div>
            <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 
              group-hover:scale-110 group-hover:-translate-x-1">
              <Facebook className="w-5 h-5 text-white group-hover:text-primary-200 transition-colors duration-300" />
            </div>
          </a>

          <a
            href="https://bit.ly/YouTube-Lore-Fries"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSocialMediaClick('youtube')}
            className="relative group"
            aria-label="Sígueme en YouTube"
          >
            <div className="absolute inset-0 rounded-full blur group-hover:bg-accent-500/30 transition-all duration-300"></div>
            <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 
              group-hover:scale-110 group-hover:-translate-x-1">
              <Youtube className="w-5 h-5 text-white group-hover:text-accent-200 transition-colors duration-300" />
            </div>
          </a>

          <a
            href="https://bit.ly/TikTok-Lore-Fries"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSocialMediaClick('tiktok')}
            className="relative group"
            aria-label="Sígueme en TikTok"
          >
            <div className="absolute inset-0 rounded-full blur group-hover:bg-primary-500/30 transition-all duration-300"></div>
            <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 
              group-hover:scale-110 group-hover:-translate-x-1">
              <span className="text-white text-sm font-bold group-hover:text-primary-200 transition-colors duration-300">TT</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingSocialBar;
