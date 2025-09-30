const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Function to convert images to WebP
async function convertToWebP(inputDir, outputDir) {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const ext = path.extname(file).toLowerCase();
    
    // Only convert JPG, PNG, JPEG files
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const baseName = path.basename(file, ext);
      const outputPath = path.join(outputDir, `${baseName}.webp`);
      
      try {
        await sharp(inputPath)
          .webp({ quality: 85 }) // Good quality, smaller file size
          .toFile(outputPath);
        
        console.log(`✅ Converted: ${file} → ${baseName}.webp`);
      } catch (error) {
        console.log(`❌ Failed to convert: ${file}`, error.message);
      }
    }
  }
}

// Convert images from your assets directory
const assetsDir = './assets/images';
const outputDir = './assets/images';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

convertToWebP(assetsDir, outputDir)
  .then(() => console.log('🎉 All images converted to WebP!'))
  .catch(error => console.error('❌ Conversion failed:', error));
