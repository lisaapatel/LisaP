#!/bin/bash

# Make sure we're in the correct directory
cd "$(dirname "$0")"

# Build the site
npm run build

# Create .nojekyll file (only if out directory exists)
if [ -d "out" ]; then
  touch out/.nojekyll
else
  echo "Error: 'out' directory not found after build"
  exit 1
fi

# Add and commit changes
git add out/
git commit -m "Deploy updates to GitHub Pages"

# Push to gh-pages branch
git subtree push --prefix out origin gh-pages

echo "Deployment complete!" 