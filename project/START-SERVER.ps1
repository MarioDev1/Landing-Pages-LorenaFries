# PowerShell Script para Lorena Fries Landing Page
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "   INICIANDO SERVIDOR LORENA FRIES" -ForegroundColor Cyan  
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar Node.js
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js detectado: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ ERROR: Node.js no encontrado" -ForegroundColor Red
    Write-Host "Instala Node.js desde: https://nodejs.org/" -ForegroundColor Yellow
    pause
    exit 1
}

# Verificar npm
try {
    $npmVersion = npm --version
    Write-Host "✅ npm detectado: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ ERROR: npm no encontrado" -ForegroundColor Red
    pause
    exit 1
}

# Navegar al directorio del proyecto
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath
Write-Host "📂 Directorio del proyecto: $scriptPath" -ForegroundColor Yellow

# Verificar package.json
if (-not (Test-Path "package.json")) {
    Write-Host "❌ ERROR: package.json no encontrado" -ForegroundColor Red
    Write-Host "Directorio actual: $(Get-Location)" -ForegroundColor Yellow
    pause
    exit 1
}

# Verificar node_modules
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Instalando dependencias..." -ForegroundColor Yellow
    npm install
}

Write-Host ""
Write-Host "🚀 Iniciando servidor de desarrollo..." -ForegroundColor Green
Write-Host "📱 La página estará disponible en: http://localhost:5173/ o http://localhost:5174/" -ForegroundColor Cyan
Write-Host "⏹️  Presiona Ctrl+C para detener el servidor" -ForegroundColor Yellow
Write-Host ""

# Iniciar servidor
npm run dev