import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Flag, Heart, Users } from 'lucide-react';
import { trackContactClick, trackCampaignSignup } from '../utils/tracking';
import FloatingSocialBar from './FloatingSocialBar';
import logo from '../assets/Logo.png';
import contactBg from '../assets/quiensoy.jpg';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    commune: '',
    interest: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_email: 'Lorenafriesd10@gmail.com', // Cambiado de mariofuentes1904@gmail.com
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        commune: formData.commune,
        interest: formData.interest,
        message: formData.message,
      };

      await emailjs.send(
        'service_sgcc4ni',
        'template_1zdxjkq',
        templateParams,
        '5yKYwb2qiEXzmwH38'
      );

      // Tracking de conversión
      trackCampaignSignup();
      
      // Reset del formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        commune: '',
        interest: '',
        message: ''
      });
      
      alert('¡Gracias por sumarte a la campaña! Te contactaremos pronto.');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 relative overflow-hidden">
      {/* Background image with enhanced glass effect */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'contrast(115%) brightness(1.1)',
        }}
      ></div>
      
      {/* Gradient overlays for improved readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/80 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-secondary-500/5 to-accent-500/10"></div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent-500/15 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      {/* Additional subtle lighting effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-6">
            ¡Únete a la Campaña!
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
            Tu apoyo es fundamental para construir un futuro mejor. 
            Suma tu voz y ayúdame a representar los valores que compartimos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
          {/* Formulario de campaña */}
          <div className="glass bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <Flag className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-500 mb-2">
                ¡Súmate a la Campaña!
              </h3>
              <p className="text-neutral-600">
                Déjame tus datos para contactarte y trabajar juntos por el Distrito 10
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 
                    ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 
                    ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+56912345678"
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 
                    ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="commune" className="block text-sm font-medium text-gray-700">Comuna</label>
                <input
                  type="text"
                  id="commune"
                  name="commune"
                  value={formData.commune}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700">Área de interés *</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 
                    ${errors.interest ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="volunteer">Quiero ser voluntario/a</option>
                  <option value="donate">Quiero donar</option>
                  <option value="info">Quiero más información</option>
                  <option value="other">Otro</option>
                </select>
                {errors.interest && (
                  <p className="mt-1 text-sm text-red-600">{errors.interest}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-500 text-white font-semibold py-4 px-6 rounded-lg hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Heart className="mr-2 h-5 w-5" />
                    ¡Me sumo a la campaña!
                  </>
                )}
              </button>
              
              <p className="text-xs text-neutral-500 text-center">
                Al enviar este formulario, aceptas que te contactemos para coordinar tu participación en la campaña.
              </p>
            </form>
          </div>

          {/* Columna de información y redes sociales */}
          <div className="flex flex-col gap-8">
            {/* Panel principal con información y redes sociales */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 flex-grow">
              {/* Información de contacto */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-secondary-500 mb-6">
                  Información de contacto
                </h3>
                <div className="flex items-center space-x-4 bg-white/50 rounded-xl p-4">
                  <Mail className="h-6 w-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-secondary-500">Correo Electrónico</p>
                    <a 
                      href="mailto:Lorenafriesd10@gmail.com" 
                      onClick={() => trackContactClick('email')}
                      className="text-accent-500 hover:text-accent-600 transition-colors"
                    >
                      Lorenafriesd10@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-secondary-500 mb-6">
                  Sígueme en redes sociales
                </h3>
                <div className="bg-white/50 rounded-xl p-6">
                  <FloatingSocialBar className="justify-center gap-6" />
                </div>
              </div>

              {/* Mensaje motivacional */}
              <div className="text-center bg-white/50 rounded-xl p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-500 mb-4">
                  ¡Juntos somos más fuertes!
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-8">
                  Tu participación en esta campaña puede marcar la diferencia. 
                  Cada persona que se suma nos acerca más a construir el futuro 
                  que queremos para el Distrito 10 y para Chile.
                </p>
                
                {/* Logo */}
                <div className="flex justify-center">
                  <div className="w-32 h-32 bg-white/50 rounded-full p-4 shadow-lg">
                    <img 
                      src={logo} 
                      alt="Logo Lorena Fries" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;