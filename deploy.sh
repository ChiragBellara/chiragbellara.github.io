#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Variables
BUILD_DIR=build
REPO_URL=https://github.com/ChiragBellara/chiragbellara.github.io

echo "📦 Building the React app..."
npm run build

echo "🚚 Moving into the build directory..."
cd $BUILD_DIR

echo "🧹 Initializing a fresh Git repo..."
git init
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"

echo "📁 Adding and committing build files..."
git add .
git commit -m "Deploy updated React site"

echo "🚀 Pushing to GitHub Pages (main branch)..."
git branch -M main
git push -f origin main

echo "✅ Deployment complete! Visit: https://chiragbellara.github.io"