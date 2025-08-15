# Healthcare Management System

A modern, full-stack healthcare management system built with React, TypeScript, Flask, and MongoDB. This system provides comprehensive healthcare management capabilities including patient appointments, health records, emergency alerts, and administrative functions.

## 🚀 Features

### Core Features
- **User Authentication & Authorization**: Secure login/register system with role-based access (Patient, Doctor, Admin)
- **Appointment Management**: Schedule, view, and manage medical appointments
- **Health Records**: Digital health record management with secure storage
- **Emergency Alerts**: Real-time emergency notification system
- **Dashboard Analytics**: Comprehensive healthcare analytics and insights
- **Responsive Design**: Modern, mobile-friendly interface with dark/light theme support

### Technical Features
- **Frontend**: React 18 with TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Flask REST API with JWT authentication
- **Database**: MongoDB with PyMongo
- **Security**: JWT tokens, password hashing, CORS protection
- **Deployment**: Docker containerization with Nginx
- **Real-time Updates**: WebSocket support for live notifications

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Axios** - HTTP client
- **React Hook Form** - Form management
- **React Hot Toast** - Notifications

### Backend
- **Flask** - Web framework
- **Flask-JWT-Extended** - JWT authentication
- **Flask-CORS** - Cross-origin resource sharing
- **Flask-PyMongo** - MongoDB integration
- **Werkzeug** - Security utilities
- **Gunicorn** - WSGI server
- **Python-dotenv** - Environment management

### Database
- **MongoDB** - NoSQL database
- **PyMongo** - MongoDB driver

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Web server
- **Gunicorn** - Application server

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Docker** (v20.10+)
- **Docker Compose** (v2.0+)
- **Node.js** (v18+) - for development
- **Python** (v3.11+) - for development
- **MongoDB** (v6.0+) - for development

## 🚀 Quick Start

### Option 1: Docker Deployment (Recommended)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd healthcare-management-system
   ```

2. **Set up environment variables**
   ```bash
   cp backend/env.example backend/.env
   # Edit backend/.env with your configuration
   ```

3. **Run the deployment script**
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MongoDB: localhost:27017

### Option 2: Development Setup

#### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

5. **Start MongoDB** (if not using Docker)
   ```bash
   # Install and start MongoDB locally
   ```

6. **Run the backend**
   ```bash
   python app.py
   ```

#### Frontend Setup

1. **Navigate to project directory**
   ```bash
   cd project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:5173

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the backend directory:

```env
# Flask Configuration
FLASK_ENV=development
FLASK_APP=app.py

# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/healthcare_db

# JWT Configuration
JWT_SECRET_KEY=your_super_secret_jwt_key_change_this_in_production

# Production Settings
PORT=5000
```

### Frontend Configuration

Create a `.env` file in the project directory:

```env
VITE_API_URL=http://localhost:5000/api
```

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user info

### Appointment Endpoints

- `POST /api/appointments` - Create appointment
- `GET /api/appointments` - Get user appointments

### Health Records Endpoints

- `POST /api/health-records` - Create health record
- `GET /api/health-records` - Get user health records

### Emergency Alerts Endpoints

- `POST /api/emergency-alerts` - Create emergency alert

### Admin Endpoints

- `GET /api/admin/appointments` - Get all appointments
- `GET /api/admin/health-records` - Get all health records
- `GET /api/admin/users` - Get all users
- `POST /api/admin/users/{id}/make_admin` - Promote user to admin

## 🏗️ Project Structure

```
healthcare-management-system/
├── backend/                 # Flask backend
│   ├── app.py              # Main Flask application
│   ├── config.py           # Configuration settings
│   ├── requirements.txt    # Python dependencies
│   ├── Dockerfile          # Backend container
│   ├── wsgi.py             # WSGI entry point
│   └── env.example         # Environment variables example
├── project/                # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── contexts/       # React contexts
│   │   ├── services/       # API services
│   │   └── App.tsx         # Main app component
│   ├── package.json        # Node dependencies
│   ├── Dockerfile          # Frontend container
│   └── nginx.conf          # Nginx configuration
├── docker-compose.yml      # Multi-container setup
├── deploy.sh               # Deployment script
└── README.md               # This file
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt password encryption
- **CORS Protection**: Cross-origin request security
- **Input Validation**: Server-side data validation
- **Error Handling**: Comprehensive error management
- **Logging**: Detailed application logging
- **Environment Variables**: Secure configuration management

## 🚀 Deployment

### Production Deployment

1. **Update environment variables** for production
2. **Set up SSL certificates** for HTTPS
3. **Configure domain names** in nginx.conf
4. **Set up monitoring** and logging
5. **Run deployment script**:
   ```bash
   ./deploy.sh
   ```

### Cloud Deployment

The application can be deployed to various cloud platforms:

- **AWS**: Using ECS or EC2
- **Google Cloud**: Using GKE or Compute Engine
- **Azure**: Using AKS or App Service
- **DigitalOcean**: Using App Platform or Droplets

## 🧪 Testing

### Backend Testing

```bash
cd backend
python -m pytest
```

### Frontend Testing

```bash
cd project
npm test
```

## 📊 Monitoring

### Logs

View application logs:

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f frontend
```

### Health Checks

- Backend: http://localhost:5000/
- Frontend: http://localhost:3000/

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:

1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information

## 🔄 Updates

To update the application:

```bash
# Pull latest changes
git pull origin main

# Rebuild and restart services
docker-compose down
docker-compose up --build -d
```

## 📈 Roadmap

- [ ] Real-time chat between patients and doctors
- [ ] Video consultation integration
- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Integration with external healthcare systems
- [ ] AI-powered health insights
- [ ] Multi-language support
- [ ] Advanced reporting system

---

**Built with ❤️ for better healthcare management**
