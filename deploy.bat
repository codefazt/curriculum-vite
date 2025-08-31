@echo off
rem Abort on errors
setlocal enabledelayedexpansion

echo "Building project..."
call npm run build
if !errorlevel! neq 0 (
    echo "Build failed!"
    exit /b !errorlevel!
)

echo "Navigating to dist folder..."
cd dist

echo "Deploying to GitHub Pages..."
git init
git add -A
git commit -m "deploy: new version"
git push -f https://github.com/codefazt/curriculum-vite.git master:gh-pages

echo "Deployment finished."