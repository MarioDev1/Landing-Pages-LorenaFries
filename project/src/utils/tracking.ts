// Sistema de tracking centralizado para Google Ads, Google Analytics 4 y Meta Pixel
declare global {
  interface Window {
    gtag: (command: string, action: string, params: Record<string, string | number>) => void;
    fbq: (command: string, action: string, params?: Record<string, string | number | boolean>) => void;
  }
}

// Función base para tracking - envía a ambos: Google Ads y Google Analytics
const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Enviar a Google Analytics 4
    window.gtag('event', action, {
      'event_category': category,
      'event_label': label || '',
      'value': value || 1
    });
  }
};

// Función para tracking de Meta Pixel
const trackMetaPixel = (eventName: string, params?: Record<string, string | number | boolean>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
};

// Tracking de clicks en enlaces de contacto
export const trackContactClick = (contactType: string) => {
  trackEvent('click', 'contact_links', contactType);
  trackMetaPixel('Contact', { contact_type: contactType });
};

// Tracking de tiempo en página
export const trackPageEngagement = (pageName: string, timeSpent: number) => {
  trackEvent('engagement', 'page_time', pageName, Math.round(timeSpent / 1000)); // Convertir a segundos
  trackMetaPixel('PageView', { page_name: pageName, time_spent: Math.round(timeSpent / 1000) });
};

// Tracking de clicks en redes sociales
export const trackSocialMediaClick = (platform: string) => {
  trackEvent('click', 'social_media', platform);
  trackMetaPixel('SocialClick', { platform: platform });
};

// Tracking de clicks en enlaces externos
export const trackExternalLinkClick = (url: string, linkText: string) => {
  trackEvent('click', 'external_links', `${linkText} - ${url}`);
  trackMetaPixel('ExternalLink', { url: url, link_text: linkText });
};

// Tracking de clicks en enlaces de recursos
export const trackResourceClick = (resourceType: string, resourceName: string) => {
  trackEvent('click', 'resources', `${resourceType} - ${resourceName}`);
  trackMetaPixel('ResourceClick', { resource_type: resourceType, resource_name: resourceName });
};

// Tracking de reproducción de videos
export const trackVideoPlay = (videoTitle: string) => {
  trackEvent('play', 'video', videoTitle);
  trackMetaPixel('VideoPlay', { video_title: videoTitle });
};

// Tracking de clicks en botones de llamada a la acción
export const trackCTAClick = (buttonText: string, section: string) => {
  trackEvent('click', 'call_to_action', `${buttonText} - ${section}`);
  trackMetaPixel('CTAClick', { button_text: buttonText, section: section });
};

// Tracking de formulario de campaña (conversión principal)
export const trackCampaignSignup = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Enviar conversión a Google Ads
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17499492782/OfW8CKiPxYsbEK6jtJhB',
      'value': 1.0,
      'currency': 'CLP'
    });
    
    // Enviar evento a Google Analytics 4
    window.gtag('event', 'campaign_signup', {
      'event_category': 'conversions',
      'event_label': 'formulario_campaña',
      'value': 1
    });
  }
  
  // Enviar evento a Meta Pixel (conversión importante)
  trackMetaPixel('Lead', { 
    content_name: 'Formulario de Campaña',
    content_category: 'Política',
    value: 1.0,
    currency: 'CLP'
  });
};

// Tracking de scroll en secciones
export const trackSectionView = (sectionName: string) => {
  trackEvent('view', 'section_visibility', sectionName);
  trackMetaPixel('ViewContent', { content_name: sectionName });
};

// Tracking de descargas
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('download', 'documents', `${fileType} - ${fileName}`);
  trackMetaPixel('Download', { content_name: fileName, content_type: fileType });
};

// Tracking de página vista
export const trackPageView = (pageTitle: string, pagePath: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-PLACEHOLDER_GA4_ID', {
      'page_title': pageTitle,
      'page_path': pagePath
    });
  }
  
  // Meta Pixel ya trackea PageView automáticamente
};

// Tracking de scroll en página
export const trackScroll = (scrollPercentage: number) => {
  trackEvent('scroll', 'page_scroll', `scroll_${scrollPercentage}%`, scrollPercentage);
  
  // Trackear scroll profundo en Meta Pixel
  if (scrollPercentage >= 75) {
    trackMetaPixel('ScrollDepth', { scroll_percentage: scrollPercentage });
  }
};

// Tracking de tiempo en sección
export const trackSectionTime = (sectionName: string, timeSpent: number) => {
  trackEvent('engagement', 'section_time', sectionName, Math.round(timeSpent / 1000));
  
  // Trackear tiempo significativo en Meta Pixel
  if (timeSpent >= 30000) { // 30 segundos o más
    trackMetaPixel('Engagement', { 
      content_name: sectionName, 
      time_spent: Math.round(timeSpent / 1000) 
    });
  }
};

// Función para inicializar Meta Pixel (llamar cuando tengas el ID real)
export const initializeMetaPixel = (pixelId: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('init', pixelId);
    console.log('Meta Pixel inicializado con ID:', pixelId);
  }
}; 