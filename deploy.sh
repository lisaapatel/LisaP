#!/bin/bash

# Build the project
npm run build

# Check if the build directory exists and cd into it
if [ -d "out" ]; then
    cd out
elif [ -d ".next/out" ]; then
    cd .next/out
else
    echo "Build directory not found"
    exit 1
fi

# Check if the build was successful
if [ $? -ne 0 ]; then
  echo "Build failed"
  exit 1
fi

# Create or update .nojekyll file to bypass Jekyll processing
touch out/.nojekyll

echo "Build successful! Files ready in the 'out' directory"

git add out/
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix out origin gh-pages 