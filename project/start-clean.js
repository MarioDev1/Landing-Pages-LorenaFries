#!/usr/bin/env node

/**
 * Script de inicio limpio para la landing page
 * Este script limpia la caché y inicia el servidor sin errores
 */

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Iniciando Landing Page de Lorena Fries...\n');

// Función para ejecutar comandos
function runCommand(command, description) {
  return new Promise((resolve, reject) => {
    console.log(`⏳ ${description}...`);
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`❌ Error: ${error.message}`);
        reject(error);
        return;
      }
      if (stderr) {
        console.log(`⚠️  Warning: ${stderr}`);
      }
      console.log(`✅ ${description} completado`);
      resolve(stdout);
    });
  });
}

async function startProject() {
  try {
    // Limpiar caché de Vite
    const viteCachePath = path.join('node_modules', '.vite');
    if (fs.existsSync(viteCachePath)) {
      fs.rmSync(viteCachePath, { recursive: true, force: true });
      console.log('✅ Caché de Vite limpiada');
    }

    // Verificar que las dependencias estén instaladas
    if (!fs.existsSync('node_modules')) {
      await runCommand('npm install', 'Instalando dependencias');
    }

    // Verificar compilación
    await runCommand('npm run build', 'Verificando compilación');

    console.log('\n🎉 ¡Proyecto listo!');
    console.log('\n📋 Para iniciar el servidor de desarrollo:');
    console.log('   npm run dev');
    console.log('\n📋 Para compilar para producción:');
    console.log('   npm run build');
    console.log('\n📋 Para previsualizar la build de producción:');
    console.log('   npm run preview');

  } catch (error) {
    console.log('\n❌ Error durante la inicialización:', error.message);
    process.exit(1);
  }
}

startProject();