const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Get all source files
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}');

// Find all import statements
const importRegex = /from\s+['"]([^'"]+)['"]/g;
const imageRegex = /src=\{?['"]\/?([^'"{}]+)['"]\}?/g;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Check imports
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    if (importPath.startsWith('.')) {
      const fullPath = path.resolve(path.dirname(file), importPath);
      if (!fs.existsSync(fullPath) && !fs.existsSync(fullPath + '.ts') && !fs.existsSync(fullPath + '.tsx')) {
        console.error(`In ${file}: Import not found: ${importPath}`);
      }
    }
  }
  
  // Check image paths
  while ((match = imageRegex.exec(content)) !== null) {
    const imagePath = match[1];
    if (imagePath && !imagePath.startsWith('http')) {
      const fullPath = path.resolve('public', imagePath);
      if (!fs.existsSync(fullPath)) {
        console.error(`In ${file}: Image not found: ${imagePath}`);
      }
    }
  }
}); 