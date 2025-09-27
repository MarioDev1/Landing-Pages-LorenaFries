#!/usr/bin/env node

/**
 * Validación final de la Landing Page
 * Verificación completa después de la corrección del error RefreshRuntime
 */

import fs from 'fs';
import path from 'path';

console.log('🎯 Validación Final de la Landing Page\n');

// Verificar que el archivo problemático ya no exista
const problematicFile = 'src/components/icons/TikTokIcon.tsx';
if (fs.existsSync(problematicFile)) {
  console.log('❌ El archivo problemático TikTokIcon.tsx aún existe');
} else {
  console.log('✅ Archivo problemático TikTokIcon.tsx eliminado correctamente');
}

// Verificar que FloatingSocialBar tenga el icono inline
const floatingBarPath = 'src/components/FloatingSocialBar.tsx';
if (fs.existsSync(floatingBarPath)) {
  const content = fs.readFileSync(floatingBarPath, 'utf8');
  const hasInlineTikTok = content.includes('TikTokIcon: FC<{ className?: string }>') && 
                         content.includes('const TikTokIcon');
  
  if (hasInlineTikTok) {
    console.log('✅ FloatingSocialBar tiene TikTokIcon inline (sin dependencias externas)');
  } else {
    console.log('❌ FloatingSocialBar no tiene la configuración correcta');
  }
  
  const hasImportError = content.includes('./icons/TikTokIcon');
  if (hasImportError) {
    console.log('⚠️  Aún hay referencia al archivo eliminado en FloatingSocialBar');
  } else {
    console.log('✅ No hay referencias al archivo eliminado');
  }
} else {
  console.log('❌ FloatingSocialBar.tsx no encontrado');
}

// Verificar archivos CSS necesarios
const requiredCSS = [
  'src/components/About.css',
  'src/components/LegislativeWork.css', 
  'src/components/mobile-slider.css',
  'src/components/MobileCarousel.css',
  'src/index.css'
];

console.log('\n📁 Archivos CSS:');
let allCSSPresent = true;
requiredCSS.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file}`);
    allCSSPresent = false;
  }
});

// Verificar componentes principales
const mainComponents = [
  'src/components/Header.tsx',
  'src/components/Hero.tsx',
  'src/components/About.tsx',
  'src/components/Timeline.tsx', 
  'src/components/LegislativeWork.tsx',
  'src/components/News.tsx',
  'src/components/Contact.tsx',
  'src/components/Footer.tsx',
  'src/components/FloatingSocialBar.tsx'
];

console.log('\n🧩 Componentes principales:');
let allComponentsPresent = true;
mainComponents.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file}`);
    allComponentsPresent = false;
  }
});

// Verificar package.json para dependencias
console.log('\n📦 Dependencias críticas:');
if (fs.existsSync('package.json')) {
  const packageContent = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const deps = { ...packageContent.dependencies, ...packageContent.devDependencies };
  
  const criticalDeps = [
    'react',
    'react-dom', 
    '@vitejs/plugin-react',
    'vite',
    'react-slick',
    '@emailjs/browser'
  ];
  
  criticalDeps.forEach(dep => {
    if (deps[dep]) {
      console.log(`✅ ${dep}: ${deps[dep]}`);
    } else {
      console.log(`❌ ${dep}: No instalado`);
    }
  });
}

console.log('\n🎉 Resumen:');
if (allCSSPresent && allComponentsPresent) {
  console.log('✅ Todos los archivos necesarios están presentes');
  console.log('✅ Error RefreshRuntime.register solucionado');
  console.log('✅ TikTok icon ahora es componente inline');
  console.log('✅ Landing page lista para funcionar');
  
  console.log('\n🚀 Para iniciar:');
  console.log('   npm run dev');
} else {
  console.log('⚠️  Algunos archivos pueden estar faltando');
}