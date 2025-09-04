import React from 'react';
import { Heart, Shield, Users, BookOpen, Award, Star } from 'lucide-react';

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
      icon: BookOpen,
      title: 'Educación',
      description: 'Acceso universal a una educación de calidad para todos.',
      color: 'from-primary-600 to-primary-700'
    },
    {
      icon: Award,
      title: 'Transparencia',
      description: 'Gobierno abierto y rendición de cuentas clara.',
      color: 'from-secondary-600 to-secondary-700'
    },
    {
      icon: Star,
      title: 'Innovación',
      description: 'Soluciones creativas para los desafíos del futuro.',
      color: 'from-accent-600 to-accent-700'
    }
  ];

  return (
    <section id="quien-soy" className="py-20 bg-primary-200/20 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-6">
            Quién Soy
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Una líder comprometida con la transformación social y la construcción de un futuro más justo 
            para todas y todos los chilenos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-left">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-secondary-500">
                Comprometida con el Futuro del País
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Como diputada por el Distrito 10, mi compromiso es representar a la ciudadanía con 
                transparencia, responsabilidad y visión de futuro. Mi experiencia en derechos humanos 
                y políticas públicas me permite abordar los desafíos actuales con soluciones innovadoras.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Creo firmemente en el poder de la participación ciudadana y en la importancia de 
                construir puentes entre diferentes visiones para lograr consensos que beneficien a todos.
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-200/30 to-accent-200/30 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-primary-100/10 to-accent-100/10 rounded-3xl p-8 border border-primary-200/20 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 hover:scale-[1.02]">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-2xl bg-accent-200/40 hover:bg-accent-200/60 transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-secondary-600 mb-2">Derechos Humanos</h4>
                    <p className="text-sm text-neutral-600">Especialización y experiencia</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-2xl bg-accent-200/40 hover:bg-accent-200/60 transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-secondary-600 mb-2">Políticas Públicas</h4>
                    <p className="text-sm text-neutral-600">Diseño e implementación</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-2xl bg-accent-200/40 hover:bg-accent-200/60 transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-secondary-600 mb-2">Participación Ciudadana</h4>
                    <p className="text-sm text-neutral-600">Inclusión y diálogo</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-2xl bg-accent-200/40 hover:bg-accent-200/60 transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-secondary-600 mb-2">Educación</h4>
                    <p className="text-sm text-neutral-600">Acceso y calidad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up delay-300">
          <h3 className="text-3xl font-bold text-secondary-500 text-center mb-12">
            Mis Valores y Principios
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={value.title}
                  className="group bg-accent-200/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover-lift border border-accent-300/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-secondary-500 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;