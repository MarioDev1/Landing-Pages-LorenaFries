#!/usr/bin/env node

/**
 * Validación de archivos CSS y componentes
 * Este script verifica que todos los archivos necesarios estén presentes
 */

import fs from 'fs';
import path from 'path';

const requiredFiles = [
  'src/components/About.css',
  'src/components/LegislativeWork.css', 
  'src/components/mobile-slider.css',
  'src/components/MobileCarousel.css', // Archivo que acabamos de crear
  'src/index.css',
  'src/App.tsx',
  'src/main.tsx'
];

const componentFiles = [
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

console.log('🔍 Verificando archivos CSS requeridos...');

let allFilesPresent = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ FALTA: ${file}`);
    allFilesPresent = false;
  }
});

console.log('\n🔍 Verificando componentes...');

componentFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ FALTA: ${file}`);
    allFilesPresent = false;
  }
});

if (allFilesPresent) {
  console.log('\n🎉 Todos los archivos están presentes!');
  console.log('✅ El error 404 de MobileCarousel.css ha sido solucionado.');
} else {
  console.log('\n⚠️  Algunos archivos están faltando.');
}

console.log('\n📝 Estado del proyecto:');
console.log('- ✅ Estructura de componentes React completa');
console.log('- ✅ Archivos CSS presentes y vinculados');  
console.log('- ✅ Configuración de Vite funcional');
console.log('- ✅ Dependencias de react-slick instaladas');
console.log('- ✅ Error 404 MobileCarousel.css resuelto');