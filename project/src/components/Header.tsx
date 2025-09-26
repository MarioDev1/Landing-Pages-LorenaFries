import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Logo.png';
import FloatingSocialBar from './FloatingSocialBar';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#quien-soy', label: 'Quién Soy' },
    { href: '#trayectoria', label: 'Trayectoria' },
    { href: '#trabajo-legislativo', label: 'Trabajo Legislativo' },
    { href: '#noticias', label: 'Noticias' },
    { href: '#contacto', label: 'Contacto' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo y nombre */}
          <div className="flex items-center">
            <a href="#inicio" className="flex items-center group">
              <div className="w-24 h-24 p-2 rounded-xl overflow-visible">
                <img 
                  src={logo} 
                  alt="Logo Lorena Fries" 
                  className="w-full h-full object-contain group-hover:scale-115 transition-transform duration-300 ease-in-out"
                />
              </div>
            </a>
          </div>

          {/* Redes sociales versión móvil */}
          <div className="lg:hidden flex-shrink-0">
            <FloatingSocialBar className="scale-[0.75] -mx-1" />
          </div>

          {/* Navegación desktop y redes sociales */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-neutral-600 hover:text-secondary-500 font-medium transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Barra de redes sociales desktop */}
            <div className="border-l border-neutral-200 pl-8">
              <FloatingSocialBar />
            </div>
          </div>

          {/* Botón de menú móvil */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-neutral-600 hover:text-secondary-500 hover:bg-neutral-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-100 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-neutral-600 hover:text-secondary-500 font-medium transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-neutral-50"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;