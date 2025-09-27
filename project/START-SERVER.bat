@echo off
echo ==========================================
echo   INICIANDO SERVIDOR LORENA FRIES
echo ==========================================
echo.
echo Verificando Node.js y npm...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js no encontrado. Instala Node.js desde https://nodejs.org/
    pause
    exit /b 1
)

npm --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: npm no encontrado. Reinstala Node.js
    pause
    exit /b 1
)

echo Navegando al directorio del proyecto...
cd /d "%~dp0"
if not exist package.json (
    echo ERROR: package.json no encontrado en este directorio
    echo Directorio actual: %CD%
    pause
    exit /b 1
)

echo.
echo Verificando dependencias...
if not exist node_modules (
    echo Instalando dependencias...
    npm install
)

echo.
echo Iniciando servidor de desarrollo...
echo La pagina estara disponible en: http://localhost:5173/ o http://localhost:5174/
echo.
echo Presiona Ctrl+C para detener el servidor
echo.
npm run dev
pause