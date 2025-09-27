#!/usr/bin/env node

/**
 * Diagnóstico de componentes React
 * Verifica que todos los componentes estén correctamente estructurados
 */

import fs from 'fs';
import path from 'path';

console.log('🔍 Diagnosticando componentes React...\n');

const componentsDir = 'src/components';
const iconsDir = 'src/components/icons';

// Función para verificar si un archivo es un componente React válido
function checkReactComponent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const hasReactImport = content.includes('import React') || content.includes('import { React') || content.includes('from \'react\'');
    const hasExport = content.includes('export') || content.includes('export default');
    const hasJSX = content.includes('return (') && (content.includes('<') || content.includes('/>'));
    
    return {
      hasReactImport,
      hasExport,
      hasJSX,
      isValid: hasReactImport && hasExport
    };
  } catch (error) {
    return {
      hasReactImport: false,
      hasExport: false,
      hasJSX: false,
      isValid: false,
      error: error.message
    };
  }
}

// Verificar componentes principales
const mainComponents = [
  'Header.tsx',
  'Hero.tsx', 
  'About.tsx',
  'Timeline.tsx',
  'LegislativeWork.tsx',
  'News.tsx',
  'Contact.tsx',
  'Footer.tsx',
  'FloatingSocialBar.tsx'
];

console.log('📁 Componentes principales:');
mainComponents.forEach(component => {
  const filePath = path.join(componentsDir, component);
  if (fs.existsSync(filePath)) {
    const check = checkReactComponent(filePath);
    const status = check.isValid ? '✅' : '❌';
    console.log(`${status} ${component} ${check.isValid ? '' : '(Problema detectado)'}`);
    
    if (!check.isValid) {
      console.log(`   - React import: ${check.hasReactImport ? '✅' : '❌'}`);
      console.log(`   - Export: ${check.hasExport ? '✅' : '❌'}`);
      console.log(`   - JSX: ${check.hasJSX ? '✅' : '❌'}`);
      if (check.error) {
        console.log(`   - Error: ${check.error}`);
      }
    }
  } else {
    console.log(`❌ ${component} (No encontrado)`);
  }
});

console.log('\n🎯 Componentes de iconos:');
if (fs.existsSync(iconsDir)) {
  const iconFiles = fs.readdirSync(iconsDir).filter(file => file.endsWith('.tsx'));
  
  iconFiles.forEach(icon => {
    const filePath = path.join(iconsDir, icon);
    const check = checkReactComponent(filePath);
    const status = check.isValid ? '✅' : '❌';
    console.log(`${status} ${icon} ${check.isValid ? '' : '(Problema detectado)'}`);
    
    if (!check.isValid) {
      console.log(`   - React import: ${check.hasReactImport ? '✅' : '❌'}`);
      console.log(`   - Export: ${check.hasExport ? '✅' : '❌'}`);
      console.log(`   - JSX: ${check.hasJSX ? '✅' : '❌'}`);
      if (check.error) {
        console.log(`   - Error: ${check.error}`);
      }
    }
  });
} else {
  console.log('❌ Directorio icons no encontrado');
}

console.log('\n🎉 Diagnóstico completado!');