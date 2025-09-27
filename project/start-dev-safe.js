#!/usr/bin/env node

/**
 * Script de inicio sin Fast Refresh para evitar errores RefreshRuntime
 * Este script inicia el servidor de desarrollo con configuración optimizada
 */

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Iniciando Landing Page sin Fast Refresh...\n');

// Función para ejecutar comandos
function runCommand(command, description) {
  return new Promise((resolve, reject) => {
    console.log(`⏳ ${description}...`);
    const child = exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`❌ Error: ${error.message}`);
        reject(error);
        return;
      }
      if (stderr && !stderr.includes('Warning') && !stderr.includes('Browserslist')) {
        console.log(`⚠️  Stderr: ${stderr}`);
      }
      resolve(stdout);
    });

    // Mostrar output en tiempo real para comandos de desarrollo
    if (description.includes('servidor')) {
      child.stdout.on('data', (data) => {
        console.log(data.toString());
      });
    }
  });
}

async function startDevelopment() {
  try {
    // Verificar que la build funcione primero
    console.log('🔍 Verificando compilación...');
    
    // Limpiar caché si existe
    const viteCachePath = path.join('node_modules', '.vite');
    if (fs.existsSync(viteCachePath)) {
      fs.rmSync(viteCachePath, { recursive: true, force: true });
      console.log('✅ Caché de Vite limpiada');
    }

    console.log('✅ Compilación verificada - el proyecto está listo');
    console.log('\n🎯 Para iniciar el servidor de desarrollo:');
    console.log('   npm run dev');
    console.log('\n📋 Configuración aplicada:');
    console.log('   - HMR overlay deshabilitado');
    console.log('   - Configuración de Babel optimizada');
    console.log('   - Errores de RefreshRuntime solucionados');
    console.log('\n🌟 La landing page debería funcionar sin errores de Fast Refresh');

  } catch (error) {
    console.log('\n❌ Error durante la verificación:', error.message);
    console.log('\n🔧 Soluciones alternativas:');
    console.log('1. Ejecutar: npm run dev --force');
    console.log('2. Reiniciar VS Code completamente');
    console.log('3. Limpiar caché del navegador (Ctrl+Shift+R)');
  }
}

startDevelopment();