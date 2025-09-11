import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';
import './About.css';
import lorenaImage from '../assets/Lorena-6.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Derechos Humanos',
      description: 'Compromiso inquebrantable con la dignidad y derechos de todas las personas.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Shield,
      title: 'Justicia Social',
      description: 'Trabajo constante por una sociedad más equitativa e inclusiva.',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Users,
      title: 'Equidad de Género',
      description: 'Promoción activa de la igualdad entre hombres y mujeres.',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Shield,
      title: 'Participación Ciudadana',
      description: 'Fomentando el diálogo y la participación activa en la toma de decisiones.',
      color: 'from-primary-600 to-primary-700'
    }
  ];

  return (
    <section id="quien-soy" className="pt-16 pb-20 md:pt-24 md:pb-32 relative overflow-hidden">
      {/* Fondo con patrón y elementos decorativos */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-accent-50/30 to-primary-100">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        {/* Elementos decorativos flotantes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-secondary-200/20 rounded-full blur-2xl animate-float-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-title text-secondary-500 mb-6 uppercase tracking-wider">
            Quién Soy
          </h2>
          <p className="text-lg md:text-xl text-neutral-600">
            Una líder comprometida con la transformación social y la construcción de un futuro más justo 
            para todas y todos los chilenos.
          </p>
        </div>

        {/* Contenido Principal */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen y Tag */}
          <div className="relative md:mt-8">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl 
              transform hover:scale-[1.02] transition-transform duration-700 ease-out
              relative group">
              {/* Borde decorativo animado */}
              <div className="absolute inset-0 border-2 border-white/20 rounded-2xl transform scale-[1.02] 
                group-hover:scale-[1.04] transition-transform duration-700"></div>
              
              {/* Imagen con efecto parallax */}
              <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                <img
                  src={lorenaImage}
                  alt="Lorena Fries"
                  className="w-full h-full object-cover object-center"
                />
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            
            {/* Tag sobre la imagen con mejor diseño */}
            <div className="absolute -bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl 
              shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-4 transform hover:translate-y-[-2px] 
              transition-all duration-500 border border-white/40">
              <p className="text-secondary-600 font-medium text-center tracking-wide">
                Diputada Distrito 10
              </p>
            </div>
          </div>

          {/* Contenido y Cards */}
          <div className="space-y-8">
            {/* Texto principal */}
            <div className="bg-white/80 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary-500 mb-6">
                Comprometida con el Futuro del País
              </h3>
              <div className="space-y-4">
                <p className="text-neutral-700 leading-relaxed">
                  Como diputada, mi compromiso es representar a la ciudadanía con 
                  transparencia y responsabilidad. Mi experiencia en derechos humanos 
                  y políticas públicas me permite abordar los desafíos actuales con 
                  soluciones innovadoras.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Creo firmemente en el poder de la participación ciudadana y en la 
                  construcción de puentes entre diferentes visiones para lograr consensos 
                  que beneficien a todos.
                </p>
              </div>
            </div>

            {/* Áreas de enfoque */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-2 md:mt-4">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} 
                    className="group bg-white/90 backdrop-blur-sm p-6 rounded-xl
                    shadow-[0_8px_30px_rgb(0,0,0,0.06)] 
                    hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                    border border-white/20 
                    transition-all duration-500 ease-out
                    hover:translate-y-[-4px]
                    text-center flex flex-col items-center
                    relative overflow-hidden">
                    {/* Efecto de borde con gradiente */}
                    <div className="absolute inset-0 border border-gradient-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icono con animación */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4
                      transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500
                      shadow-lg group-hover:shadow-xl`}>
                      <IconComponent className="h-7 w-7 text-white transform group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    
                    {/* Contenido con mejor tipografía */}
                    <h4 className="text-lg font-semibold text-secondary-600 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
                      {value.description}
                    </p>
                    
                    {/* Elemento decorativo en la esquina */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary-100/10 to-accent-100/10 
                      rounded-bl-3xl transform translate-x-8 translate-y-[-8px] group-hover:translate-x-6 group-hover:translate-y-[-6px]
                      transition-transform duration-500"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;