#!/usr/bin/env node

/**
 * SOLUCIÓN FORZADA PARA ERROR REFRESHRUNTIME
 * Este script elimina todos los estados de caché y reinicia con configuración limpia
 */

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🔥 ELIMINACIÓN FORZADA DE ERROR REFRESHRUNTIME\n');

function runCommand(command, description) {
  return new Promise((resolve, reject) => {
    console.log(`⏳ ${description}...`);
    exec(command, { cwd: process.cwd() }, (error, stdout, stderr) => {
      if (error) {
        console.log(`❌ Error: ${error.message}`);
        reject(error);
        return;
      }
      if (stderr && !stderr.includes('Warning') && !stderr.includes('Browserslist')) {
        console.log(`⚠️  Stderr: ${stderr}`);
      }
      console.log(`✅ ${description} completado`);
      resolve(stdout);
    });
  });
}

async function forceCleanAndRestart() {
  try {
    console.log('🧹 FASE 1: LIMPIEZA TOTAL DE CACHÉ');
    
    // 1. Eliminar todas las cachés posibles
    const cacheDirs = [
      'node_modules/.vite',
      'node_modules/.cache', 
      'dist',
      '.vite',
      'tsconfig.tsbuildinfo'
    ];
    
    for (const dir of cacheDirs) {
      if (fs.existsSync(dir)) {
        try {
          fs.rmSync(dir, { recursive: true, force: true });
          console.log(`✅ Eliminado: ${dir}`);
        } catch (e) {
          console.log(`⚠️  No se pudo eliminar: ${dir}`);
        }
      }
    }

    // 2. Crear archivo temporal para forzar reconstrucción
    const tempFile = 'force-rebuild.tmp';
    fs.writeFileSync(tempFile, Date.now().toString());
    console.log('✅ Archivo temporal creado para forzar rebuild');
    
    // 3. Verificar que no existan archivos TikTok
    console.log('\n🔍 FASE 2: VERIFICACIÓN DE ARCHIVOS PROBLEMÁTICOS');
    
    const problematicPaths = [
      'src/components/icons/TikTokIcon.tsx',
      'src/components/icons/TikTokIcon.js', 
      'src/components/TikTokIcon.tsx',
      'src/TikTokIcon.tsx'
    ];
    
    problematicPaths.forEach(filePath => {
      if (fs.existsSync(filePath)) {
        console.log(`❌ ELIMINANDO: ${filePath}`);
        fs.rmSync(filePath, { force: true });
      } else {
        console.log(`✅ AUSENTE: ${filePath}`);
      }
    });

    // 4. Verificar compilación
    console.log('\n🔧 FASE 3: VERIFICACIÓN DE COMPILACIÓN');
    await runCommand('npm run build', 'Verificando build limpia');

    // 5. Limpiar archivo temporal
    if (fs.existsSync(tempFile)) {
      fs.rmSync(tempFile, { force: true });
      console.log('✅ Archivo temporal eliminado');
    }

    console.log('\n🎉 LIMPIEZA COMPLETA FINALIZADA');
    console.log('\n📋 PRÓXIMOS PASOS MANUALES:');
    console.log('1. 🔄 REINICIA VS CODE COMPLETAMENTE (Ctrl+Shift+P → "Developer: Reload Window")');
    console.log('2. 🌐 LIMPIA CACHÉ DEL NAVEGADOR:');
    console.log('   - Presiona F12 → Network → ✅ Disable cache');
    console.log('   - O presiona Ctrl+Shift+R (recarga forzada)');
    console.log('   - O abre en ventana de incógnito');
    console.log('3. 🚀 INICIA EL SERVIDOR:');
    console.log('   npm run dev');
    console.log('\n🎯 DESPUÉS DE ESTOS PASOS, EL ERROR REFRESHRUNTIME DEBE DESAPARECER');

  } catch (error) {
    console.log('\n❌ Error durante la limpieza:', error.message);
    console.log('\n🆘 SI EL PROBLEMA PERSISTE:');
    console.log('1. Reinicia la computadora completamente');
    console.log('2. Elimina node_modules y ejecuta: npm install');
    console.log('3. Crea un nuevo proyecto Vite y copia los archivos uno por uno');
  }
}

forceCleanAndRestart();