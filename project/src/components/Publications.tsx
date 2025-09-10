import React from 'react';
import { Download, ExternalLink, BookOpen, FileText, Scale } from 'lucide-react';
import { trackResourceClick, trackExternalLinkClick, trackDownload } from '../utils/tracking';

const Publications = () => {
  return (
    <section className="py-20 bg-gradient-to-tr from-primary-50/90 via-secondary-50/30 to-white">
      <div className="container mx-auto px-4">
  const publications = [
    {
      title: "Manual de Derechos Humanos para Empresas",
      type: "Publicación Académica",
      description: "Guía práctica para la implementación de estándares de derechos humanos en el sector privado.",
      year: "2023",
      icon: <Scale className="h-6 w-6" />,
      downloadable: true
    },
    {
      title: "Moción: Prevención del Reclutamiento de Menores",
      type: "Documento Legislativo",
      description: "Proyecto de ley para fortalecer la protección de menores frente al crimen organizado.",
      year: "2023",
      icon: <FileText className="h-6 w-6" />,
      downloadable: true
    },
    {
      title: "Estudio: Participación Política de las Mujeres en Chile",
      type: "Investigación",
      description: "Análisis sobre los avances y desafíos en la participación política femenina en el país.",
      year: "2022",
      icon: <BookOpen className="h-6 w-6" />,
      downloadable: true
    },
    {
      title: "Informe: Estado de los DD.HH. en Chile",
      type: "Informe Institucional",
      description: "Evaluación del estado actual de los derechos humanos durante mi gestión en el INDH.",
      year: "2016",
      icon: <Scale className="h-6 w-6" />,
      downloadable: false
    }
  ];

  const resources = [
    {
      name: "Biblioteca del Congreso Nacional",
      description: "Accede a todas las mociones y proyectos de ley",
      url: "https://www.bcn.cl",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      name: "Cámara de Diputadas y Diputados",
      description: "Seguimiento de sesiones y votaciones",
      url: "https://www.camara.cl",
      icon: <ExternalLink className="h-6 w-6" />
    },
    {
      name: "Instituto Nacional de DD.HH.",
      description: "Informes y estudios sobre derechos humanos",
      url: "https://www.indh.cl",
      icon: <Scale className="h-6 w-6" />
    }
  ];

  const handleDownload = (fileName: string, fileType: string) => {
    trackDownload(fileName, fileType);
    // Aquí puedes agregar la lógica real de descarga
    console.log(`Descargando: ${fileName}`);
  };

  const handleResourceClick = (resourceName: string, resourceType: string) => {
    trackResourceClick(resourceType, resourceName);
  };

  const handleExternalLinkClick = (url: string, linkText: string) => {
    trackExternalLinkClick(url, linkText);
  };

  return (
    <section id="publicaciones" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-500">
            Publicaciones y Recursos
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Accede a documentos académicos, mociones legislativas y recursos 
            relevantes para profundizar en los temas que trabajo.
          </p>
        </div>

        {/* Publications */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-secondary-500 mb-8 text-center">
            Documentos y Publicaciones
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent-100 text-accent-500 rounded-full">
                      {pub.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 bg-primary-100 text-secondary-500 rounded-full text-sm font-medium">
                        {pub.type}
                      </span>
                      <span className="text-sm text-neutral-500">{pub.year}</span>
                    </div>
                    <h4 className="text-xl font-bold text-secondary-500 mb-3">
                      {pub.title}
                    </h4>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {pub.description}
                    </p>
                    <div className="flex space-x-3">
                      {pub.downloadable && (
                        <button 
                          onClick={() => handleDownload(pub.title, pub.type)}
                          className="inline-flex items-center px-4 py-2 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors duration-200"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Descargar PDF
                        </button>
                      )}
                      <button 
                        onClick={() => handleResourceClick(pub.title, 'ver_online')}
                        className="inline-flex items-center px-4 py-2 border-2 border-secondary-500 text-secondary-500 font-semibold rounded-lg hover:bg-secondary-500 hover:text-white transition-colors duration-200"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver online
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* External Resources */}
        <div>
          <h3 className="text-2xl font-bold text-secondary-500 mb-8 text-center">
            Recursos Útiles
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleExternalLinkClick(resource.url, resource.name)}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-secondary-100 text-secondary-500 rounded-full mb-4 group-hover:bg-secondary-500 group-hover:text-white transition-colors duration-200">
                  {resource.icon}
                </div>
                <h4 className="text-lg font-bold text-secondary-500 mb-2 group-hover:text-accent-500 transition-colors duration-200">
                  {resource.name}
                </h4>
                <p className="text-neutral-600 text-sm">
                  {resource.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;