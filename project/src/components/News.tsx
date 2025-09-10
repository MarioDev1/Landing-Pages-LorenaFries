// // import React from 'react';
// // import { Play, Image, ExternalLink } from 'lucide-react';
// // import { trackResourceClick, trackVideoPlay } from '../utils/tracking';

// // const News = () => {
// //   const newsItems = [
// //     {
// //       title: "Presentación de Proyecto de Ley sobre Derechos Humanos",
// //       description: "Nueva iniciativa legislativa para fortalecer la protección de los derechos fundamentales en Chile.",
// //       date: "15 Marzo 2024",
// //       type: "news"
// //     },
// //     {
// //       title: "Entrevista en Canal 13 sobre Políticas de Género",
// //       description: "Participación en programa matinal discutiendo las nuevas políticas públicas para la equidad de género.",
// //       date: "12 Marzo 2024",
// //       type: "video"
// //     },
// //     {
// //       title: "Visita a Comuna de Providencia",
// //       description: "Reunión con vecinos y organizaciones comunitarias para escuchar sus necesidades y propuestas.",
// //       date: "10 Marzo 2024",
// //       type: "news"
// //     },
// //     {
// //       title: "Participación en Comisión de Seguridad Ciudadana",
// //       description: "Análisis y discusión de nuevas medidas para mejorar la seguridad en el Distrito 10.",
// //       date: "8 Marzo 2024",
// //       type: "news"
// //     },
// //     {
// //       title: "Entrevista en Radio Cooperativa",
// //       description: "Conversación sobre los desafíos actuales de la política chilena y las soluciones propuestas.",
// //       date: "5 Marzo 2024",
// //       type: "video"
// //     },
// //     {
// //       title: "Reunión con Organizaciones de Pueblos Originarios",
// //       description: "Diálogo sobre políticas públicas para el reconocimiento y protección de los pueblos originarios.",
// //       date: "3 Marzo 2024",
// //       type: "news"
// //     }
// //   ];

// //   const handleNewsClick = (type: string, title: string) => {
// //     if (type === 'video') {
// //       trackVideoPlay(title);
// //     } else {
// //       trackResourceClick(title, 'noticias');
// //     }
// //   };

// //   const handleGalleryClick = () => {
// //     trackResourceClick('Galería completa', 'noticias');
// //   };

// //   return (
//     <section id="noticias" className="py-20 bg-gradient-to-tr from-primary-50/80 to-secondary-50/60 relative overflow-hidden">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// //         <div className="text-center space-y-6 mb-16">
// //           <h2 className="text-4xl lg:text-5xl font-bold text-secondary-500">
// //             Noticias y Actividades
// //           </h2>
// //           <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
// //             Mantente informado sobre mi trabajo como diputada, las iniciativas que impulso 
// //             y las actividades que realizo en el Distrito 10.
// //           </p>
// //         </div>

// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {newsItems.map((item, index) => (
// //             <div 
// //               key={index}
// //               className="group bg-accent-200/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-accent-300/20"
// //             >
// //               <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
// //                 {item.type === 'video' ? (
// //                   <div className="text-center">
// //                     <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
// //                       <Play className="h-8 w-8 text-white" />
// //                     </div>
// //                     <p className="text-primary-600 font-medium">Video</p>
// //                   </div>
// //                 ) : (
// //                   <div className="text-center">
// //                     <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-3">
// //                       <Image className="h-8 w-8 text-white" />
// //                     </div>
// //                     <p className="text-accent-600 font-medium">Noticia</p>
// //                   </div>
// //                 )}
// //               </div>
              
// //               <div className="p-6">
// //                 <div className="flex items-center justify-between mb-3">
// //                   <span className="text-sm text-primary-500 font-medium">
// //                     {item.date}
// //                   </span>
// //                   <span className={`px-3 py-1 rounded-full text-xs font-medium ${
// //                     item.type === 'video' 
// //                       ? 'bg-primary-100 text-primary-600' 
// //                       : 'bg-accent-100 text-accent-600'
// //                   }`}>
// //                     {item.type === 'video' ? 'Video' : 'Noticia'}
// //                   </span>
// //                 </div>
                
// //                 <h3 className="text-lg font-bold text-secondary-500 mb-3 group-hover:text-primary-600 transition-colors duration-300">
// //                   {item.title}
// //                 </h3>
                
// //                 <p className="text-neutral-600 leading-relaxed mb-4">
// //                   {item.description}
// //                 </p>
                
// //                 <button
// //                   onClick={() => item.type === 'video' ? handleNewsClick('video', item.title) : handleNewsClick('news', item.title)}
// //                   className="w-full bg-primary-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center"
// //                 >
// //                   {item.type === 'video' ? 'Ver Video' : 'Leer Más'}
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="text-center mt-12">
// //           <button
// //             onClick={handleGalleryClick}
// //             className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white font-semibold rounded-2xl hover:bg-accent-600 transition-colors duration-200 hover:scale-105"
// //           >
// //             Ver galería completa
// //             <ExternalLink className="ml-2 h-5 w-5" />
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default News;