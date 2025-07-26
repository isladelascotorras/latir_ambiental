@echo off
for /f "tokens=5" %%a in ('netstat -ano ^| findstr 8002') do (
    taskkill /PID %%a /F
)
echo Servidor detenido
pause