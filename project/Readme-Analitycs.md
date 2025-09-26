# 🔍 **GUÍA DE CONFIGURACIÓN - IDs DE TRACKING**

## 📋 **ESTADO ACTUAL:**
✅ **Meta Pixel** - Implementado con placeholder  
✅ **Google Tag Manager** - Implementado con placeholder  
✅ **Google Analytics 4** - Implementado con placeholder  
✅ **Google Ads** - 100% funcional  

## 🔧 **PLACEHOLDERS A REEMPLAZAR:**

### **1. Meta Pixel (Facebook/Instagram Ads)**
**Archivo:** `index.html`  
**Buscar:** `PLACEHOLDER_META_PIXEL_ID`  
**Reemplazar con:** Tu ID de Meta Pixel (ej: `123456789012345`)

**Ubicaciones:**
```html
fbq('init', 'PLACEHOLDER_META_PIXEL_ID');
src="https://www.facebook.com/tr?id=PLACEHOLDER_META_PIXEL_ID&ev=PageView&noscript=1"
```

### **2. Google Tag Manager**
**Archivo:** `index.html`  
**Buscar:** `GTM-PLACEHOLDER_ID`  
**Reemplazar con:** Tu ID de GTM (ej: `GTM-ABCDEFG`)

**Ubicaciones:**
```html
'https://www.googletagmanager.com/gtm.js?id='+i+dl; // GTM-PLACEHOLDER_ID
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PLACEHOLDER_ID"
```

### **3. Google Analytics 4**
**Archivo:** `index.html` y `src/utils/tracking.ts`  
**Buscar:** `G-PLACEHOLDER_GA4_ID`  
**Reemplazar con:** Tu ID de GA4 (ej: `G-ABCDEFGHIJ`)

**Ubicaciones:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER_GA4_ID"></script>
gtag('config', 'G-PLACEHOLDER_GA4_ID');
```

```typescript
// En src/utils/tracking.ts
window.gtag('config', 'G-PLACEHOLDER_GA4_ID', {
```

## 🚀 **CÓMO OBTENER LOS IDs:**

### **Meta Pixel ID:**
1. Ve a [Facebook Business Manager](https://business.facebook.com/)
2. **Píxeles** → **Crear píxel**
3. Copia el ID numérico

### **Google Tag Manager ID:**
1. Ve a [Google Tag Manager](https://tagmanager.google.com/)
2. **Crear cuenta** → **Crear contenedor**
3. Copia el ID (formato: GTM-XXXXXXX)

### **Google Analytics 4 ID:**
1. Ve a [Google Analytics](https://analytics.google.com/)
2. **Crear cuenta** → **Crear propiedad**
3. Copia el ID (formato: G-XXXXXXXXXX)

## 📊 **LO QUE FUNCIONA DESPUÉS DE REEMPLAZAR:**

### **Meta Pixel:**
- ✅ Tracking de conversiones en Facebook Ads
- ✅ Eventos de engagement
- ✅ Retargeting de audiencias
- ✅ Optimización de campañas

### **Google Tag Manager:**
- ✅ Gestión centralizada de etiquetas
- ✅ Fácil implementación de nuevos tracking
- ✅ Testing de etiquetas
- ✅ Control de versiones

### **Google Analytics 4:**
- ✅ Métricas de usuarios
- ✅ Comportamiento en el sitio
- ✅ Conversiones y objetivos
- ✅ Reportes detallados

## ⚠️ **IMPORTANTE:**

1. **Reemplaza TODOS** los placeholders del mismo tipo
2. **No mezcles** IDs de diferentes cuentas
3. **Verifica** que no haya espacios extra
4. **Prueba** el sitio después de cada cambio

## 🔍 **VERIFICACIÓN:**

### **Meta Pixel:**
- Abre consola del navegador
- Busca: `fbq('init', 'TU_ID_REAL')`
- No debe haber errores

### **Google Tag Manager:**
- Abre consola del navegador
- Busca: `GTM-XXXXXXX`
- No debe haber errores

### **Google Analytics:**
- Abre consola del navegador
- Busca: `G-XXXXXXXXXX`
- No debe haber errores

## 💡 **RECOMENDACIÓN:**

**Reemplaza los IDs uno por uno** y verifica que cada uno funcione antes de continuar con el siguiente.

---

**¿Necesitas ayuda para obtener alguno de los IDs o tienes preguntas sobre la configuración?**