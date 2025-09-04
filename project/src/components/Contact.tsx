import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Instagram, Twitter, Facebook, Youtube, Flag, Heart, Users } from 'lucide-react';
import { trackContactClick, trackSocialMediaClick, trackCampaignSignup } from '../utils/tracking';
import logo from '../assets/Logo.png';

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
    <section id="contacto" className="py-20 bg-primary-200/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-500">
            ¡Únete a la Campaña!
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Tu apoyo es fundamental para construir un futuro mejor. 
            Suma tu voz y ayúdame a representar los valores que compartimos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Formulario de campaña */}
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl border border-primary-100">
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

          {/* Información de contacto y redes sociales */}
          <div className="space-y-8">
            {/* Información de contacto */}
            <div className="bg-accent-200/30 rounded-2xl p-8 shadow-lg border border-accent-300/20">
              <h3 className="text-2xl font-bold text-secondary-500 mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-500" />
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
            </div>

            {/* Redes sociales */}
            <div className="bg-accent-200/30 rounded-2xl p-8 shadow-lg border border-accent-300/20">
              <h3 className="text-2xl font-bold text-secondary-500 mb-6">
                Sígueme en redes sociales
              </h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://bit.ly/Instagram-Lore-Fries"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialMediaClick('instagram')}
                  className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://bit.ly/X-Lore-Fries"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialMediaClick('twitter')}
                  className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="https://bit.ly/Facebook-Lore-Fries"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialMediaClick('facebook')}
                  className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://bit.ly/YouTube-Lore-Fries"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialMediaClick('youtube')}
                  className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                >
                  <Youtube className="h-6 w-6" />
                </a>
                <a
                  href="https://bit.ly/TikTok-Lore-Fries"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialMediaClick('tiktok')}
                  className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                >
                  <span className="text-xl">TikTok</span>
                </a>
              </div>
            </div>

            {/* Mensaje motivacional */}
            <div className="bg-accent-200/30 rounded-2xl p-8 shadow-lg border border-accent-300/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-500 mb-4">
                  ¡Juntos somos más fuertes!
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Tu participación en esta campaña puede marcar la diferencia. 
                  Cada persona que se suma nos acerca más a construir el futuro 
                  que queremos para el Distrito 10 y para Chile.
                </p>
                
                {/* Logo prominente en el área vacía */}
                <div className="flex justify-center">
                  <div className="w-44 h-44 p-4 rounded-3xl overflow-visible">
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