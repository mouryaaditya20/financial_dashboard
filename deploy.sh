#!/bin/bash

# Healthcare Management System Deployment Script
# This script automates the deployment process for both backend and frontend

set -e  # Exit on any error

echo "🚀 Starting Healthcare Management System Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Check if .env file exists
if [ ! -f "backend/.env" ]; then
    print_warning ".env file not found in backend directory. Creating from example..."
    if [ -f "backend/env.example" ]; then
        cp backend/env.example backend/.env
        print_status "Created .env file from example. Please update with your actual values."
    else
        print_error "env.example file not found. Please create a .env file manually."
        exit 1
    fi
fi

# Stop existing containers
print_status "Stopping existing containers..."
docker-compose down --remove-orphans

# Build and start services
print_status "Building and starting services..."
docker-compose up --build -d

# Wait for services to be ready
print_status "Waiting for services to be ready..."
sleep 30

# Check if services are running
print_status "Checking service status..."
if docker-compose ps | grep -q "Up"; then
    print_status "✅ All services are running successfully!"
else
    print_error "❌ Some services failed to start. Check logs with: docker-compose logs"
    exit 1
fi

# Display service information
echo ""
print_status "🎉 Deployment completed successfully!"
echo ""
echo "📋 Service Information:"
echo "   Frontend: http://localhost:3000"
echo "   Backend API: http://localhost:5000"
echo "   MongoDB: localhost:27017"
echo ""
echo "🔧 Useful Commands:"
echo "   View logs: docker-compose logs -f"
echo "   Stop services: docker-compose down"
echo "   Restart services: docker-compose restart"
echo "   Update services: docker-compose pull && docker-compose up -d"
echo ""
print_status "🌐 Access your Healthcare Management System at: http://localhost:3000"
