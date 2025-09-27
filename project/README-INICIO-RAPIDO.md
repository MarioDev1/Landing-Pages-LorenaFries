# 🚀 Guía Rápida - Landing Page Lorena Fries

## ⚡ Inicio Rápido

### Opción 1: Usando el archivo batch
1. Hacer doble clic en `START-SERVER.bat`
2. Esperar a que aparezca la URL del servidor
3. Abrir navegador en `http://localhost:5173/` o `http://localhost:5174/`

### Opción 2: Desde terminal en VSCode
```bash
# En terminal integrado de VSCode (Ctrl + `)
npm run dev
```

## 🔧 Comandos Útiles

### Iniciar servidor de desarrollo
```bash
npm run dev
```

### Construir para producción
```bash
npm run build
```

### Vista previa de build
```bash
npm run preview
```

## 📱 URLs de Acceso
- **Local**: http://localhost:5173/ (o 5174 si 5173 está ocupado)
- **Red**: http://192.168.100.3:5173/ (accesible desde otros dispositivos)

## 🛠️ Solución de Problemas

### Si aparecen errores al iniciar:
```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Si el puerto está ocupado:
- Vite automáticamente usará el siguiente puerto disponible (5174, 5175, etc.)

## 📂 Estructura del Proyecto
```
project/
├── src/
│   ├── components/     # Componentes React
│   ├── assets/        # Imágenes y recursos
│   └── utils/         # Utilidades (tracking, etc.)
├── public/            # Archivos estáticos
└── dist/             # Build de producción (generado)
```

## 🎯 Estado Actual
✅ Configuración de Vite corregida
✅ Errores RefreshRuntime solucionados  
✅ WebSocket funcionando correctamente
✅ Todas las dependencias instaladas
✅ Landing page completamente operativa