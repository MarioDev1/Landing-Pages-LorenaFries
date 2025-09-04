import React from 'react';
import logo from '../assets/Logo.png';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Navegación',
      links: [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Quién Soy', href: '#quien-soy' },
        { name: 'Trabajo Legislativo', href: '#trabajo-legislativo' }
      ]
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Noticias', href: '#noticias' },
        { name: 'Publicaciones', href: '#publicaciones' },
        { name: 'Contacto', href: '#contacto' },
        { name: 'Cámara de Diputados', href: 'https://www.camara.cl' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Política de Privacidad', href: '#' },
        { name: 'Términos de Uso', href: '#' },
        { name: 'Transparencia', href: '#' },
        { name: 'Accesibilidad', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo section */}
        <div className="flex justify-center mb-12">
          <div className="w-20 h-20">
            <img 
              src={logo} 
              alt="Logo Lorena Fries" 
              className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Enlaces de navegación */}
          {footerLinks.map((column, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-primary-400">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;