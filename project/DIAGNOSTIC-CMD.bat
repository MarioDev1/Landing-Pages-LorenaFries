@echo off
echo ==========================================
echo    DIAGNOSTICO CMD vs POWERSHELL
echo ==========================================
echo.
echo === VERSIONES ===
echo Node.js version:
node --version
echo.
echo npm version:
npm --version
echo.
echo === PATH ACTUAL ===
echo %PATH%
echo.
echo === DIRECTORIO ACTUAL ===
echo %CD%
echo.
echo === CONTENIDO DEL PACKAGE.JSON ===
if exist package.json (
    type package.json | findstr "scripts"
) else (
    echo ERROR: package.json no encontrado
)
echo.
echo === INTENTANDO EJECUTAR NPM RUN DEV ===
npm run dev
pause