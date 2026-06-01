@echo off
cd /d "%~dp0"
echo Stopping anything on port 3000...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3000" ^| findstr "LISTENING"') do taskkill /F /PID %%a >nul 2>&1
echo.
echo Clearing Next.js cache...
if exist .next rmdir /s /q .next
echo.
echo Starting Honos website...
echo Open http://127.0.0.1:3000 after you see Ready.
echo.
npm run dev
pause
