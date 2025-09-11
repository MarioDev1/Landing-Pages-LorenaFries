import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { trackExternalLinkClick } from '../utils/tracking';
import Slider from 'react-slick';
import './LegislativeWork.css';

const LegislativeWork: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Empresas y Derechos Humanos",
      subtitle: "Empresas responsables, comunidades protegidas",
      description: "Este proyecto de ley busca que las empresas medianas y grandes en Chile respeten los derechos humanos en todas sus operaciones. ¿Cómo? Obligándolas a identificar, prevenir y reparar los impactos que puedan causar en las personas y comunidades, desde daños ambientales hasta conflictos con pueblos originarios. Con esta iniciativa avanzamos hacia un país donde la actividad económica se desarrolle con transparencia, justicia y respeto por la dignidad de todas y todos",
      link: "https://camara.cl/legislacion/ProyectosDeLey/tramitacion.aspx?prmID=18160&prmBOLETIN=17520-17"
    },
    {
      id: 2,
      title: "Ley Dalgi",
      subtitle: "Reconocimiento a los perros de asistencia psiquiátrica",
      description: "Hoy en Chile la ley solo reconoce a los perros guía y de asistencia para discapacidad física, dejando fuera a los perros de asistencia psiquiátrica, que son un apoyo vital para muchas personas. La Ley Dalgi busca corregir esa exclusión, reconociendo a los perros de asistencia psiquiátrica dentro de la legislación sobre discapacidad. Con esto se asegura igualdad en el acceso a derechos y servicios, combatiendo la discriminación y avanzando hacia una sociedad más inclusiva, justa y que reconozca la salud mental como parte fundamental del bienestar",
      link: "https://camara.cl/legislacion/ProyectosDeLey/tramitacion.aspx?prmID=16192&prmBOLETIN=15662-11"
    },
    {
      id: 3,
      title: "Violencia Intrafamiliar y Armas",
      subtitle: "Proteger a víctimas de violencia intrafamiliar retirando armas a los agresores",
      description: "Prevenir antes que lamentar: Si alguien es denunciado por violencia intrafamiliar y tiene un arma, el juez le prohibirá la tenencia de armas como medida cautelar, para proteger a mujeres, niñas, niños y personas mayores. Los datos son claros: un arma en el hogar multiplica el riesgo de tragedias, y con este proyecto podemos actuar antes para salvar vidas. Actualmente el proyecto se encuentra en el Senado y esperamos que pronto sea Ley.",
      link: "https://camara.cl/legislacion/ProyectosDeLey/tramitacion.aspx?prmID=16474&prmBOLETIN=15936-18"
    },
      {
      id: 4,
      title: "Reclutamiento de Niños, Niñas y Adolescentes",
      subtitle: "Niñez protegida frente al crimen organizado",
      description: "Este proyecto de ley tipifica como delito el reclutamiento de niños, niñas y adolescentes por parte de bandas criminales, sancionando a los adultos que los utilicen para cometer ilícitos. Hoy, nuestra legislación no contempla esta práctica de forma específica, dejando un vacío frente a una de las formas más graves de expansión del crimen organizado. Con esta iniciativa se establecen penas claras para castigar a quienes recluten menores, resguardando sus derechos y fortaleciendo la lucha contra la delincuencia organizada en Chile",
      link: "https://camara.cl/legislacion/ProyectosDeLey/tramitacion.aspx?prmID=18281&prmBOLETIN=17637-07"
    },
    {
      id: 5,
      title: "Igualdad en el Sistema Electoral",
      subtitle: "Igualdad real en la política",
      description: "Este proyecto de reforma constitucional busca asegurar que el sistema electoral garantice la igualdad sustantiva entre hombres y mujeres en todas sus etapas. La iniciativa propone que el principio de igualdad quede establecido en la Constitución, y que el Servicio Electoral dicte las normas necesarias para su cumplimiento antes de cada elección. Con esto avanzamos hacia una democracia más justa, inclusiva y representativa, donde las mujeres tengan las mismas oportunidades reales de participar y decidir en la vida política del país ",
      link: "https://www.camara.cl/legislacion/ProyectosDeLey/tramitacion.aspx?prmID=17965&prmBOLETIN=17343-07"
    }
       ,
      {
      id: 6,
      title: "Ley Requisas",
      subtitle: "Municipios con más herramientas para recuperar espacios públicos",
      description: "Este proyecto de ley entrega a los municipios la facultad de requisar temporalmente inmuebles abandonados que estén siendo utilizados para delitos o representen un riesgo a la seguridad pública. Hoy, las municipalidades solo pueden declararlos como “propiedades abandonadas”, lo que limita su acción. Con esta iniciativa, los municipios podrán actuar con mayor rapidez y eficacia frente a las casas tomadas por el crimen organizado, protegiendo a las comunidades y recuperando espacios para el bienestar de los vecinos",
      link: "https://www.camara.cl/legislacion/ProyectosDeLey/tramitacion.aspx?prmID=16452&prmBOLETIN=15913-25"
    }
       ,
      {
      id: 7,
      title: "Desmonumentalización",
      subtitle: "Retiro de símbolos de la dictadura en espacios públicos",
      description: "Este proyecto de ley busca retirar del espacio público los monumentos, objetos y nombres de calles que exalten o rindan homenaje a la dictadura civil y militar ocurrida entre 1973 y 1990. La iniciativa fortalece la memoria histórica, protege los derechos humanos y garantiza que los espacios públicos reflejen valores democráticos. Con esta medida se refuerza la garantía de no repetición y se promueve una sociedad que reconozca y aprenda de su pasado para construir un futuro basado en justicia y democracia ",
      link: "https://www.camara.cl/legislacion/ProyectosDeLey/tramitacion.aspx?prmID=16850&prmBOLETIN=16295-24"
    }
       ,
      {
      id: 8,
      title: "Levantamiento del Secreto Bancario",
      subtitle: "Más herramientas contra el crimen organizado",
      description: "Este proyecto de ley amplía los delitos por los cuales el Ministerio Público puede solicitar levantar el secreto bancario en investigaciones penales. El objetivo es facilitar la persecución de organizaciones criminales, el lavado de activos y delitos graves como sicariato, extorsión, trata de personas y tráfico de drogas, asegurando que la justicia tenga los instrumentos necesarios para desbaratar estas redes y proteger a la ciudadanía",
      link: "https://www.camara.cl/legislacion/ProyectosDeLey/tramitacion.aspx?prmID=16517&prmBOLETIN=15978-07"
    }
       ,
      {
      id: 9,
      title: "Estadios Seguros",
      subtitle: "Seguridad primero en los estadios",
      description: "Este proyecto de ley busca aumentar las multas a los organizadores de partidos de fútbol profesional cuando pongan en riesgo la seguridad de las y los asistentes. Queremos que los espectáculos se desarrollen sin violencia, protegiendo la vida y la integridad de quienes asisten, y asegurando que los clubes cumplan con sus responsabilidades. Con esta iniciativa avanzamos hacia estadios más seguros y organizados",
      link: "https://www.camara.cl/legislacion/ProyectosDeLey/tramitacion.aspx?prmID=16441&prmBOLETIN=15904-29"
    }
       ,
      {
      id: 10,
      title: "No me llames",
      subtitle: "Fin a las llamadas publicitarias sin consentimiento",
      description: "Este proyecto de ley busca proteger a las y los consumidores de llamadas publicitarias no solicitadas. ¿Cómo? Prohibiendo que los proveedores se comuniquen sin autorización expresa y sancionando a quienes incumplan con multas significativas. Con esta iniciativa avanzamos hacia un país donde la privacidad y los derechos de las personas sean respetados",
      link: "https://www.camara.cl/legislacion/ProyectosDeLey/tramitacion.aspx?prmID=16136&prmBOLETIN=15610-03"
    }
       ,
      {
      id: 11,
      title: "Fin a la Pena de Muerte en la Justicia Militar",
      subtitle: "Chile dice adiós a la pena de muerte",
      description: "¿Sabías que la pena de muerte aún existe en Chile? El Código de Justicia Militar todavía la contempla para delitos cometidos en tiempos de guerra. Este proyecto de ley busca eliminarla completamente, reemplazándola por presidio militar perpetuo calificado. Con esta iniciativa, avanzamos hacia un sistema judicial coherente, ético y respetuoso de la vida y los derechos humanos",
      link: "https://www.camara.cl/legislacion/ProyectosDeLey/tramitacion.aspx?prmID=15512&prmBOLETIN=15006-07"
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000, // 4 segundos para desktop
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2000, // 2 segundos para móvil
        }
      }
    ]
  };

  const handleExternalLinkClick = (url: string, title: string) => {
    trackExternalLinkClick(url, `legislative_work_${title.toLowerCase().replace(/ /g, '_')}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="legislative-work" className="legislative-work-container">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-title mb-6 text-white">
            Trabajo Legislativo
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Proyectos de ley que buscan construir un Chile más justo, inclusivo y democrático
          </p>
        </div>
        
        <div className="mb-12">
          <Slider {...sliderSettings} className="legislative-slider">
            {projects.map((project) => (
              <div key={project.id} className="px-4">
                <div className={`legislative-card bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl 
                  transition-all duration-500 ease-in-out transform hover:-translate-y-1
                  overflow-hidden border border-primary-100/20
                  ${expandedCard === project.id ? 'ring-2 ring-accent-500/30' : ''}`}
                >
                  <div 
                    className="p-6 cursor-pointer group relative overflow-hidden"
                    onClick={() => toggleCard(project.id)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <h3 className="text-xl font-bold text-secondary-700 mb-2 group-hover:text-secondary-500 
                      transition-colors duration-300 relative">
                      {project.title}
                    </h3>
                    <p className="text-secondary-500 font-medium mb-4 relative">
                      {project.subtitle}
                    </p>
                    
                    <div className="flex items-center justify-between relative">
                      <button
                        className={`inline-flex items-center gap-2 font-medium transition-all duration-300
                          ${expandedCard === project.id 
                            ? 'text-accent-600 hover:text-accent-700' 
                            : 'text-primary-500 hover:text-primary-600'}`}
                        aria-expanded={expandedCard === project.id}
                      >
                        {expandedCard === project.id ? (
                          <>
                            <span>Ver menos</span>
                            <ChevronUp className="h-5 w-5 transition-transform duration-300" />
                          </>
                        ) : (
                          <>
                            <span>Ver más</span>
                            <ChevronDown className="h-5 w-5 transition-transform duration-300" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {expandedCard === project.id && (
                    <div 
                      className="px-6 pb-6 animate-[fadeIn_0.5s_ease-out] relative"
                      style={{
                        animation: 'slideDown 0.5s ease-out'
                      }}
                    >
                      <p className="text-secondary-600 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleExternalLinkClick(project.link, project.title);
                        }}
                        className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 
                          font-medium transition-colors duration-300 group bg-accent-50/50 px-4 py-2 rounded-lg
                          hover:bg-accent-100/50"
                      >
                        <span>Lee el proyecto completo</span>
                        <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default LegislativeWork;
