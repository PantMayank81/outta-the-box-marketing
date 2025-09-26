#!/bin/bash

echo "🚀 Setting up Outta The Box Marketing project..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete! You can now run:"
    echo "   npm run dev    # Start development server"
    echo "   npm run build  # Build for production"
    echo "   npm run start  # Start production server"
    echo "   npm run lint   # Run linting"
    echo ""
    echo "🌐 Open http://localhost:3000 to view your app"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
