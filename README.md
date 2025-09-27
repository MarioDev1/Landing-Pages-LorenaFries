# 🌟 Landing Page - Lorena Fries Monleón

> **Diputada por el Distrito 10 | Comprometida con los Derechos Humanos y Justicia Social**

[![Deploy Status](https://img.shields.io/badge/Deploy-Success-brightgreen)](https://github.com/MarioDev1/Landing-Pages-LorenaFries)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-cyan)](https://tailwindcss.com/)

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación y Desarrollo

```bash
# Clonar repositorio
git clone https://github.com/MarioDev1/Landing-Pages-LorenaFries.git
cd Landing-Pages-LorenaFries/project

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

🌐 **URL de desarrollo**: `http://localhost:3000/`

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción  
npm run preview  # Preview del build
npm run lint     # Linting con ESLint
```

## ✨ Características

### 🎯 Funcionalidades Principales
- **📱 Responsive Design**: Completamente adaptable a dispositivos móviles
- **⚡ Performance Optimizada**: Build optimizado con Vite
- **🎨 Animaciones Fluidas**: CSS animations y transiciones suaves  
- **📊 Analytics Integrado**: Google Analytics 4 + Meta Pixel
- **📧 Formulario de Contacto**: Integrado con EmailJS
- **🎠 Slider Interactivo**: Trabajo legislativo con react-slick

### 🏗️ Estructura de Componentes

```
src/
├── components/
│   ├── Header.tsx           # Navegación principal
│   ├── Hero.tsx             # Sección hero con imagen principal
│   ├── About.tsx            # Sección "Quién Soy"
│   ├── Timeline.tsx         # Línea de tiempo de trayectoria
│   ├── LegislativeWork.tsx  # Slider de trabajo legislativo
│   ├── Contact.tsx          # Formulario de contacto
│   └── Footer.tsx           # Footer con información
├── assets/                  # Imágenes y recursos
├── utils/
│   └── tracking.ts          # Sistema de analytics
└── App.tsx                  # Componente principal
```

## 🔧 Tecnologías Utilizadas

### Core
- **React 18.3.1**: Framework principal
- **TypeScript 5.5.3**: Tipado estático
- **Vite 5.4.2**: Build tool y desarrollo

### Styling
- **Tailwind CSS 3.4.1**: Framework CSS utility-first
- **Custom CSS**: Animaciones personalizadas

### Librerías
- **React Slick**: Carrusel/slider de trabajo legislativo
- **Lucide React**: Iconografía moderna
- **EmailJS**: Envío de formularios sin backend

### Analytics & Tracking
- **Google Analytics 4**: Analytics web
- **Meta Pixel**: Tracking para Facebook/Instagram
- **Google Tag Manager**: Gestión de tags

## 🎨 Paleta de Colores

### Colores Principales
```css
--primary-500: #f08319    /* Naranja institucional */
--secondary-500: #403385  /* Púrpura institucional */  
--accent-500: #307fc2     /* Azul de acento */
--neutral-950: #010102    /* Negro profundo */
```

### Gradientes
- **Hero Background**: `linear-gradient(135deg, #403385, #372a6b, #2e2157)`
- **Cards**: `rgba(255, 255, 255, 0.95)` con `backdrop-filter: blur(8px)`

## 📊 Analytics y Tracking

### Eventos Trackeados
- ✅ **Page Views**: Visitas a páginas
- ✅ **Section Views**: Visualización de secciones  
- ✅ **Scroll Depth**: Profundidad de scroll (25%, 50%, 75%, 100%)
- ✅ **Time on Page**: Tiempo de permanencia
- ✅ **Contact Clicks**: Clicks en enlaces de contacto
- ✅ **Social Media**: Clicks en redes sociales
- ✅ **External Links**: Enlaces externos

### Configuración
```javascript
// Google Analytics 4
gtag('config', 'GT-T5N24F92');

// Meta Pixel  
fbq('init', 'TU_PIXEL_ID');
```

## 🚨 Solución de Problemas Comunes

### ❌ Problema: Recargas automáticas
**Solución**: ✅ **RESUELTO** - Era causado por:
- BOM corrupto en archivos TypeScript
- Sistema de tracking sin throttling adecuado  
- Event listeners mal gestionados

### ❌ Problema: Errores 404 de CSS  
**Solución**: ✅ **RESUELTO** - Archivos CSS consolidados y recreados

### ❌ Problema: Imports no utilizados
**Solución**: ✅ **RESUELTO** - Limpieza completa de imports

## 🔄 Últimas Mejoras (v2.0)

### ✅ **Optimizaciones de Performance**
- Throttling de scroll events (200ms)
- Event listeners pasivos: `{ passive: true }`
- Mejor gestión de memoria y cleanup
- Eliminación de re-renders innecesarios

### ✅ **Mejoras de Código**
- Consolidación de archivos CSS duplicados
- Eliminación de archivos de respaldo (.bak, .new)
- Imports optimizados y limpieza de código muerto
- Configuración de Vite optimizada

### ✅ **UX/UI**
- Favicon configurado con logo institucional
- Animaciones más fluidas
- Mejor responsive design
- Carga optimizada de imágenes

## 📝 Próximas Mejoras

- [ ] 🎯 **SEO**: Implementar meta tags dinámicos
- [ ] 📱 **PWA**: Convertir a Progressive Web App
- [ ] 🔄 **CMS**: Integración con CMS headless
- [ ] 🚀 **Deploy**: Automatización con GitHub Actions
- [ ] 📈 **A/B Testing**: Implementar testing de variantes

## 📞 Contacto y Soporte

### 🏛️ Oficina Parlamentaria
- **📍 Dirección**: Congreso Nacional, Valparaíso
- **☎️ Teléfono**: +56 32 250 8000
- **📧 Email**: contacto@lorenafries.cl

### 🔧 Soporte Técnico
- **👨‍💻 Desarrollador**: Mario Dev
- **📱 GitHub**: [@MarioDev1](https://github.com/MarioDev1)

---

## 🏆 Créditos

**Desarrollado con 💙 para la representación ciudadana del Distrito 10**

### 🙏 Agradecimientos
- Equipo de campaña de Lorena Fries Monleón
- Comunidad open source de React y Vite
- Contributors del proyecto

---

**© 2025 Lorena Fries Monleón | Todos los derechos reservados**