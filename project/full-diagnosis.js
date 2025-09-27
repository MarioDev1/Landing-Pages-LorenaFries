#!/usr/bin/env node

/**
 * Diagnóstico Completo del Proyecto
 * Identifica todos los errores y problemas existentes
 */

import fs from 'fs';
import path from 'path';

console.log('🔍 DIAGNÓSTICO COMPLETO DEL PROYECTO\n');

// 1. Verificar estructura de archivos
console.log('📁 1. ESTRUCTURA DE ARCHIVOS:');

const checkFile = (filePath, shouldExist = true) => {
  const exists = fs.existsSync(filePath);
  const status = shouldExist ? (exists ? '✅' : '❌') : (exists ? '❌' : '✅');
  const message = shouldExist ? 
    (exists ? 'EXISTS' : 'MISSING') : 
    (exists ? 'SHOULD NOT EXIST' : 'CORRECTLY ABSENT');
  console.log(`   ${status} ${filePath} - ${message}`);
  return exists;
};

// Archivos que deben existir
const requiredFiles = [
  'src/App.tsx',
  'src/main.tsx',
  'src/index.css',
  'src/components/Header.tsx',
  'src/components/Hero.tsx',
  'src/components/About.tsx',
  'src/components/Timeline.tsx',
  'src/components/LegislativeWork.tsx',
  'src/components/News.tsx',
  'src/components/Contact.tsx',
  'src/components/Footer.tsx',
  'src/components/FloatingSocialBar.tsx',
  'src/components/About.css',
  'src/components/LegislativeWork.css',
  'src/components/mobile-slider.css',
  'src/components/MobileCarousel.css',
  'package.json',
  'vite.config.ts'
];

console.log('\n   Archivos requeridos:');
let allRequiredExist = true;
requiredFiles.forEach(file => {
  const exists = checkFile(file, true);
  if (!exists) allRequiredExist = false;
});

// Archivos que NO deben existir (problemáticos)
console.log('\n   Archivos problemáticos (no deben existir):');
const problematicFiles = [
  'src/components/icons/TikTokIcon.tsx',
  'src/components/icons/TikTokIcon.js',
  'src/components/TikTokIcon.tsx'
];

let noProblematicFiles = true;
problematicFiles.forEach(file => {
  const exists = checkFile(file, false);
  if (exists) noProblematicFiles = false;
});

// 2. Verificar importaciones problemáticas
console.log('\n📦 2. IMPORTACIONES PROBLEMÁTICAS:');

const checkImports = (filePath, problematicImports) => {
  if (!fs.existsSync(filePath)) return false;
  
  const content = fs.readFileSync(filePath, 'utf8');
  let hasProblems = false;
  
  problematicImports.forEach(importStr => {
    if (content.includes(importStr)) {
      console.log(`   ❌ ${filePath} contains: ${importStr}`);
      hasProblems = true;
    }
  });
  
  if (!hasProblems) {
    console.log(`   ✅ ${filePath} - No problematic imports`);
  }
  
  return hasProblems;
};

const problematicImports = [
  './icons/TikTokIcon',
  'from \'./icons/TikTokIcon\'',
  'import { TikTokIcon } from \'./icons/TikTokIcon\''
];

let hasImportProblems = false;
const filesToCheck = [
  'src/components/FloatingSocialBar.tsx',
  'src/components/Header.tsx',
  'src/App.tsx'
];

filesToCheck.forEach(file => {
  const problems = checkImports(file, problematicImports);
  if (problems) hasImportProblems = true;
});

// 3. Verificar dependencias
console.log('\n📦 3. DEPENDENCIAS:');
if (fs.existsSync('package.json')) {
  const packageContent = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const deps = { ...packageContent.dependencies, ...packageContent.devDependencies };
  
  const criticalDeps = [
    'react',
    'react-dom',
    '@vitejs/plugin-react',
    'vite',
    'typescript',
    'react-slick',
    '@emailjs/browser',
    'lucide-react'
  ];
  
  let allDepsPresent = true;
  criticalDeps.forEach(dep => {
    if (deps[dep]) {
      console.log(`   ✅ ${dep}: ${deps[dep]}`);
    } else {
      console.log(`   ❌ ${dep}: MISSING`);
      allDepsPresent = false;
    }
  });
}

// 4. Verificar configuración de Vite
console.log('\n⚙️ 4. CONFIGURACIÓN VITE:');
if (fs.existsSync('vite.config.ts')) {
  const viteConfig = fs.readFileSync('vite.config.ts', 'utf8');
  
  const checks = [
    { check: viteConfig.includes('@vitejs/plugin-react'), name: 'React plugin configured' },
    { check: viteConfig.includes('hmr'), name: 'HMR configuration present' },
    { check: viteConfig.includes('overlay: false'), name: 'Overlay disabled for stability' }
  ];
  
  checks.forEach(({ check, name }) => {
    console.log(`   ${check ? '✅' : '⚠️ '} ${name}`);
  });
}

// 5. Resumen final
console.log('\n🎯 RESUMEN DEL DIAGNÓSTICO:');
console.log(`   📁 Archivos requeridos: ${allRequiredExist ? '✅ TODOS PRESENTES' : '❌ FALTAN ARCHIVOS'}`);
console.log(`   🚫 Archivos problemáticos: ${noProblematicFiles ? '✅ NINGUNO PRESENTE' : '❌ HAY ARCHIVOS PROBLEMÁTICOS'}`);
console.log(`   📦 Importaciones: ${!hasImportProblems ? '✅ LIMPIAS' : '❌ HAY IMPORTACIONES PROBLEMÁTICAS'}`);

console.log('\n🚀 RECOMENDACIONES:');

if (!allRequiredExist) {
  console.log('   • Crear archivos faltantes identificados arriba');
}

if (!noProblematicFiles) {
  console.log('   • Eliminar archivos problemáticos de TikTokIcon');
}

if (hasImportProblems) {
  console.log('   • Corregir importaciones problemáticas en los archivos identificados');
}

console.log('   • Cerrar VS Code completamente y reiniciar');
console.log('   • Limpiar caché del navegador (Ctrl+Shift+R)');
console.log('   • Ejecutar: npm run dev --force');

console.log('\n🔧 EL ERROR REFRESHRUNTIME PUEDE DEBERSE A:');
console.log('   1. VS Code tiene pestañas abiertas del archivo eliminado');
console.log('   2. Caché del navegador con archivos viejos');
console.log('   3. HMR (Hot Module Replacement) con estado inconsistente');
console.log('   4. Importaciones fantasma en archivos no detectados');

console.log('\n✨ SOLUCIÓN RECOMENDADA:');
console.log('   1. Cerrar VS Code completamente');
console.log('   2. Eliminar carpeta node_modules\\.vite');
console.log('   3. Limpiar caché del navegador');
console.log('   4. Abrir VS Code de nuevo');
console.log('   5. Ejecutar: npm run dev');