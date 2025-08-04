#!/bin/bash

echo "🚀 JSON Analyser Deployment Script"
echo "=================================="

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "📦 Building the project first..."
    npm run build
fi

echo ""
echo "✅ Your app is built and ready to deploy!"
echo ""
echo "📁 Built files are in the 'dist/' folder:"
ls -la dist/

echo ""
echo "🌐 Choose your deployment method:"
echo ""
echo "1. 🎯 Netlify Drag & Drop (Easiest)"
echo "   → Go to: https://app.netlify.com/drop"
echo "   → Drag the 'dist' folder to deploy"
echo ""
echo "2. ⚡ Serve locally to test:"
echo "   → Run: npx serve dist/"
echo "   → Or: python3 -m http.server 8000 --directory dist/"
echo ""
echo "3. 🔄 Other options:"
echo "   → See DEPLOYMENT.md for Vercel, GitHub Pages, Surge, Firebase"
echo ""

# Open dist folder in finder (macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "📂 Opening dist folder in Finder..."
    open dist/
fi

echo "🎉 Happy deploying!"
