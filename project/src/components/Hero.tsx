import React from 'react';
import { ArrowRight, Sparkles, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { trackCTAClick, trackSocialMediaClick } from '../utils/tracking';
import lorenaImage from '../assets/Lorena-4.jpg';
import logo from '../assets/Logo.png';

const Hero = () => {
  const handleCTAClick = (buttonText: string) => {
    trackCTAClick(buttonText, 'hero');
  };

  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-secondary-500 via-secondary-600 to-accent-600 text-white relative overflow-hidden">
      {/* Elementos decorativos modernos */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Efectos de luz */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-200/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary-300/20 rounded-full blur-2xl animate-bounce delay-500"></div>
        
        {/* Logo decorativo central grande */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] 
          opacity-[0.08] transform rotate-6 hover:rotate-0 transition-all duration-1000 
          hover:opacity-10 select-none pointer-events-none">
          <img 
            src={logo} 
            alt="Logo Decorativo" 
            className="w-full h-full object-contain filter contrast-150"
            style={{ mixBlendMode: 'soft-light' }}
          />
        </div>

        {/* Logo decorativo izquierdo */}
        <div className="absolute left-10 top-1/3 w-72 h-72 opacity-15 -rotate-12 transform hover:rotate-0 
          transition-all duration-1000 hover:opacity-20 hover:scale-110 select-none">
          <img 
            src={logo} 
            alt="Logo Decorativo" 
            className="w-full h-full object-contain filter contrast-150"
            style={{ mixBlendMode: 'soft-light' }}
          />
        </div>

        {/* Logo decorativo derecho */}
        <div className="absolute -right-10 bottom-1/4 w-96 h-96 opacity-15 rotate-12 transform hover:rotate-0 
          transition-all duration-1000 hover:opacity-20 hover:scale-110 select-none">
          <img 
            src={logo} 
            alt="Logo Decorativo" 
            className="w-full h-full object-contain filter contrast-150"
            style={{ mixBlendMode: 'soft-light' }}
          />
        </div>

        {/* Efecto de brillo adicional */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              {/* Badge de identidad */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-ping"></div>
                <span className="text-primary-300 text-sm font-medium tracking-wider uppercase">Diputada Distrito 10</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">
                  Lorena Fries
                </span>
                <span className="block text-primary-400 mt-2">Monleón</span>
              </h1>
              
              <p className="text-xl text-gray-200 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary-300 animate-pulse" />
                Comprometida con el futuro del país
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-primary-500/25">
              <p className="text-lg leading-relaxed text-gray-100">
                Comprometida con los derechos humanos, la equidad de género y la justicia social. 
                Trabajando por una sociedad más justa e inclusiva para todas y todos.
              </p>
            </div>

            {/* Botones CTA existentes */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#quien-soy"
                onClick={() => handleCTAClick('Conoce mi trabajo')}
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-2xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/30"
              >
                <span className="mr-2">Conoce mi trabajo</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              
              <a
                href="#contacto"
                onClick={() => handleCTAClick('Contáctame')}
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white hover:text-secondary-600 hover:border-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                Contáctame
              </a>
            </div>

            {/* Redes Sociales */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-white/20"></div>
                <span className="text-white/80 text-sm font-medium">Sígueme en redes sociales</span>
                <div className="h-px flex-1 bg-white/20"></div>
              </div>

              <div className="flex items-center justify-center gap-6">
                <a
                  href="https://bit.ly/Instagram-Lore-Fries"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialMediaClick('instagram')}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                </a>

                <a
                  href="https://bit.ly/X-Lore-Fries"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialMediaClick('twitter')}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <Twitter className="w-5 h-5 text-white" />
                  </div>
                </a>

                <a
                  href="https://bit.ly/Facebook-Lore-Fries"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialMediaClick('facebook')}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                </a>

                <a
                  href="https://bit.ly/YouTube-Lore-Fries"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialMediaClick('youtube')}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <Youtube className="w-5 h-5 text-white" />
                  </div>
                </a>

                <a
                  href="https://bit.ly/TikTok-Lore-Fries"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialMediaClick('tiktok')}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-black rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <span className="text-white font-bold text-sm">TT</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up delay-300">
            <div className="relative">
              {/* Marco decorativo moderno */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-3xl blur-xl"></div>
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary-200/20 to-accent-200/20 backdrop-blur-md border border-white/30 flex items-center justify-center overflow-hidden shadow-2xl hover:shadow-primary-500/25 transition-all duration-500">
                <img
                  src={lorenaImage}
                  alt="Lorena Fries Monleón"
                  className="w-4/5 h-4/5 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay de gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/20 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Elementos flotantes decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-400 rounded-full animate-bounce delay-700"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-400 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;