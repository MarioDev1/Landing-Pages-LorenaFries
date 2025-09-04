import React from 'react';
import { Calendar, Award, Users, Shield, Heart, Star, Flag } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      year: '2022',
      title: 'Diputada por el Distrito 10',
      description: 'Electa con 11.519 votos (2,52%) por Convergencia Social. Integra las comisiones de DDHH y Pueblos Originarios, Seguridad Ciudadana, y Mujeres y Equidad de Género.',
      icon: Shield,
      color: 'bg-secondary-500'
    },
    {
      year: '2021',
      title: 'Candidata a Diputada',
      description: 'Se postula por el Distrito 10 bajo cupo de Convergencia Social (CS) como independiente dentro del conglomerado "Apruebo Dignidad".',
      icon: Flag,
      color: 'bg-accent-500'
    },
    {
      year: '2020',
      title: 'Fundadora del Movimiento Unir',
      description: 'Renuncia al Partido Socialista por discrepancias y funda el Movimiento Unir junto a otros exmilitantes, asumiendo como coordinadora general.',
      icon: Users,
      color: 'bg-primary-500'
    },
    {
      year: '2016-2018',
      title: 'Primera Subsecretaria de DDHH',
      description: 'Designada por Michelle Bachelet como la primera subsecretaria de Derechos Humanos, cargo que ejerció hasta marzo de 2018.',
      icon: Heart,
      color: 'bg-accent-600'
    },
    {
      year: '2010-2016',
      title: 'Directora del Instituto Nacional de DDHH',
      description: 'Primera directora del INDH desde su creación. Reelegida en 2013, completó dos periodos consecutivos al frente de la institución.',
      icon: Award,
      color: 'bg-secondary-600'
    },
    {
      year: '2005',
      title: 'Licenciada en Derecho',
      description: 'Se graduó de la Universidad de Chile, iniciando su carrera en la defensa de los derechos humanos.',
      icon: Calendar,
      color: 'bg-primary-600'
    }
  ];

  return (
    <section id="trayectoria" className="py-20 bg-primary-200/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-6">
            Mi Trayectoria
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Una vida dedicada al servicio público, la defensa de los derechos humanos 
            y la construcción de una sociedad más justa e inclusiva.
          </p>
        </div>

        <div className="relative">
          {/* Línea de tiempo vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-200 to-accent-200 h-full"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div key={event.year} className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                  {/* Contenido del evento */}
                  <div className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${event.color} text-white rounded-full mb-4 ${isLeft ? 'ml-auto' : 'mr-auto'}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-500 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Año en el centro */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="bg-white border-4 border-primary-200 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                      <span className="text-sm font-bold text-secondary-500 text-center leading-tight px-1">
                        {event.year}
                      </span>
                    </div>
                  </div>

                  {/* Espacio vacío para el lado derecho */}
                  {isLeft && <div className="w-5/12"></div>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Información adicional sobre su trabajo actual */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center mr-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary-500">Comisiones Actuales</h3>
            </div>
            <ul className="space-y-2 text-neutral-600">
              <li>• Derechos Humanos y Pueblos Originarios</li>
              <li>• Seguridad Ciudadana</li>
              <li>• Mujeres y Equidad de Género</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl p-8 border border-accent-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent-500 text-white rounded-full flex items-center justify-center mr-4">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary-500">Logros Destacados</h3>
            </div>
            <ul className="space-y-2 text-neutral-600">
              <li>• Primera directora del INDH</li>
              <li>• Primera subsecretaria de DDHH</li>
              <li>• Electa con 11.519 votos</li>
              <li>• Lideresa del Movimiento Unir</li>
            </ul>
          </div>
        </div>

        {/* CTA al final */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-secondary-500 mb-4">
              ¿Te gustaría conocer más sobre mi trabajo?
            </h3>
            <p className="text-neutral-600 mb-6">
              Descubre las iniciativas y proyectos que he impulsado como diputada
            </p>
            <a
              href="#trabajo-legislativo"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-600 transition-colors duration-200"
            >
              Ver mi trabajo legislativo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline; 