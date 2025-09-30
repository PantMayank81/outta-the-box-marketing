#!/usr/bin/env node

/**
 * WebP Conversion Script for Performance Optimization
 * Converts all PNG/JPG images in assets/images/ to WebP format
 * 
 * Usage: node convert-to-webp.js
 * 
 * Requirements: sharp package
 * Install: npm install sharp
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = './assets/images';
const OUTPUT_DIR = './assets/images/webp';

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Image conversion configuration
const CONVERSION_CONFIGS = {
  // Logo images - high quality, no compression
  logo: {
    quality: 95,
    format: 'webp',
    options: {
      lossless: false,
      effort: 6
    }
  },
  // Service images - optimized for web
  service: {
    quality: 85,
    format: 'webp',
    options: {
      lossless: false,
      effort: 4
    }
  },
  // Testimonial images - balanced quality/size
  testimonial: {
    quality: 80,
    format: 'webp',
    options: {
      lossless: false,
      effort: 4
    }
  },
  // Case study images - optimized
  caseStudy: {
    quality: 85,
    format: 'webp',
    options: {
      lossless: false,
      effort: 4
    }
  }
};

// Image categorization
const IMAGE_CATEGORIES = {
  'logo': ['Colorful Brain Digital World Technology Logo.png', 'Logo.png'],
  'service': [
    'Strategy & Consulting.png',
    'Technology & Automation.png',
    'Content & Creative.png',
    'Performance & Analytics.png',
    'Growth Hacking.png'
  ],
  'testimonial': [
    'LuxeSneakers.png',
    'EcoGlow Skincare.png',
    'Artisan Coffee Co.png'
  ],
  'caseStudy': [
    'AI-Powered Marketing Automation.png',
    'Digital Marketing Strategy & Consulting.png',
    'Marketing Technology Integration.png',
    'PPC & Paid Media Management.png',
    'SEO & Content Marketing.png',
    'Performance Marketing Audits.png',
    'Growth Hacking & Conversion Optimization.png'
  ]
};

async function convertImage(inputPath, outputPath, config) {
  try {
    const inputBuffer = fs.readFileSync(inputPath);
    
    // Get image metadata
    const metadata = await sharp(inputBuffer).metadata();
    console.log(`Converting: ${path.basename(inputPath)} (${metadata.width}x${metadata.height})`);
    
    // Convert to WebP
    await sharp(inputBuffer)
      .webp({
        quality: config.quality,
        ...config.options
      })
      .toFile(outputPath);
    
    // Calculate compression ratio
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(outputPath).size;
    const compressionRatio = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(outputPath)} - ${compressionRatio}% smaller (${originalSize} → ${webpSize} bytes)`);
    
    return {
      success: true,
      originalSize,
      webpSize,
      compressionRatio: parseFloat(compressionRatio)
    };
  } catch (error) {
    console.error(`❌ Failed to convert ${inputPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function generateResponsiveImages(inputPath, baseName, config) {
  const responsiveSizes = [
    { width: 400, suffix: '-mobile' },
    { width: 768, suffix: '-tablet' },
    { width: 1024, suffix: '-desktop' },
    { width: 1440, suffix: '-large' }
  ];
  
  const results = [];
  
  for (const size of responsiveSizes) {
    const outputPath = path.join(OUTPUT_DIR, `${baseName}${size.suffix}.webp`);
    
    try {
      await sharp(inputPath)
        .resize(size.width, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({
          quality: config.quality,
          ...config.options
        })
        .toFile(outputPath);
      
      results.push({
        size: size.width,
        path: outputPath,
        success: true
      });
      
      console.log(`✅ Generated responsive image: ${path.basename(outputPath)} (${size.width}px)`);
    } catch (error) {
      console.error(`❌ Failed to generate responsive image:`, error.message);
      results.push({
        size: size.width,
        success: false,
        error: error.message
      });
    }
  }
  
  return results;
}

async function main() {
  console.log('🚀 Starting WebP conversion for performance optimization...\n');
  
  const allResults = [];
  let totalOriginalSize = 0;
  let totalWebpSize = 0;
  
  // Process each image category
  for (const [category, imageNames] of Object.entries(IMAGE_CATEGORIES)) {
    console.log(`\n📁 Processing ${category} images:`);
    
    for (const imageName of imageNames) {
      const inputPath = path.join(IMAGES_DIR, imageName);
      
      if (!fs.existsSync(inputPath)) {
        console.log(`⚠️  Image not found: ${imageName}`);
        continue;
      }
      
      const baseName = path.parse(imageName).name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const outputPath = path.join(OUTPUT_DIR, `${baseName}.webp`);
      
      const config = CONVERSION_CONFIGS[category];
      const result = await convertImage(inputPath, outputPath, config);
      
      if (result.success) {
        totalOriginalSize += result.originalSize;
        totalWebpSize += result.webpSize;
        
        // Generate responsive versions for service images
        if (category === 'service') {
          await generateResponsiveImages(inputPath, baseName, config);
        }
      }
      
      allResults.push({
        category,
        image: imageName,
        ...result
      });
    }
  }
  
  // Summary
  console.log('\n📊 CONVERSION SUMMARY:');
  console.log('='.repeat(50));
  
  const totalCompressionRatio = ((totalOriginalSize - totalWebpSize) / totalOriginalSize * 100).toFixed(1);
  console.log(`Total size reduction: ${totalCompressionRatio}%`);
  console.log(`Original total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`WebP total: ${(totalWebpSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Space saved: ${((totalOriginalSize - totalWebpSize) / 1024 / 1024).toFixed(2)} MB`);
  
  const successfulConversions = allResults.filter(r => r.success).length;
  console.log(`\n✅ Successfully converted: ${successfulConversions}/${allResults.length} images`);
  
  if (successfulConversions === allResults.length) {
    console.log('\n🎉 All images converted successfully!');
    console.log('\n📝 Next steps:');
    console.log('1. Update HTML to use WebP images with <picture> elements');
    console.log('2. Test image loading on different devices');
    console.log('3. Monitor Core Web Vitals improvements');
  } else {
    console.log('\n⚠️  Some conversions failed. Check the errors above.');
  }
  
  // Generate WebP manifest
  const webpManifest = {
    generated: new Date().toISOString(),
    totalImages: successfulConversions,
    totalSizeReduction: `${totalCompressionRatio}%`,
    images: allResults.filter(r => r.success).map(r => ({
      original: r.image,
      webp: path.basename(path.join(OUTPUT_DIR, path.parse(r.image).name.toLowerCase().replace(/[^a-z0-9]/g, '-') + '.webp')),
      category: r.category,
      compressionRatio: `${r.compressionRatio}%`
    }))
  };
  
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'webp-manifest.json'),
    JSON.stringify(webpManifest, null, 2)
  );
  
  console.log('\n📄 WebP manifest generated: assets/images/webp/webp-manifest.json');
}

// Handle errors
process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled error:', error);
  process.exit(1);
});

// Run the conversion
main().catch(console.error);
