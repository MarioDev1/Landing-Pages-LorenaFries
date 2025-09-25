# Favicon Setup para Lorena Fries

## Estado Actual
✅ El favicon básico ya está configurado usando el logo existente (`Logo.png`)
✅ Se agregaron las referencias necesarias en `index.html`
✅ Se creó el archivo `manifest.json` para dispositivos móviles

## Para Optimizar el Favicon (Opcional)

### Opción 1: Usar herramientas online
1. Ve a https://favicon.io/favicon-converter/
2. Sube el archivo `public/logo.png`
3. Descarga el paquete de favicons generado
4. Reemplaza los archivos en la carpeta `public/`

### Opción 2: Usar herramientas locales
Si tienes ImageMagick instalado:
```bash
# Crear favicon.ico con múltiples tamaños
convert public/logo.png -resize 16x16 favicon-16.png
convert public/logo.png -resize 32x32 favicon-32.png
convert public/logo.png -resize 48x48 favicon-48.png
convert favicon-16.png favicon-32.png favicon-48.png public/favicon.ico

# Crear otros tamaños
convert public/logo.png -resize 192x192 public/android-chrome-192x192.png
convert public/logo.png -resize 512x512 public/android-chrome-512x512.png
convert public/logo.png -resize 180x180 public/apple-touch-icon.png
```

## Archivos Generados
- `public/logo.png` - Logo principal usado como favicon
- `public/manifest.json` - Manifiesto para PWA
- `index.html` - Actualizado con referencias al favicon

## Referencias Agregadas al HTML
```html
<link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
<link rel="manifest" href="/manifest.json" />
<meta name="theme-color" content="#1f2937" />
<meta name="msapplication-TileColor" content="#1f2937" />
<meta name="msapplication-TileImage" content="/logo.png" />
```

El favicon debería aparecer correctamente en el navegador al ejecutar la aplicación.