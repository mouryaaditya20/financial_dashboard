import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Dashboard } from './components/Dashboard';
import { Appointments } from './components/Appointments';
import { HealthRecords } from './components/HealthRecords';
import { Consultations } from './components/Consultations';
import { HealthMonitoring } from './components/HealthMonitoring';
import { EmergencyAlert } from './components/EmergencyAlert';
import Login from './components/Login';
import Register from './components/Register';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-medical-primary"></div>
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

// Main Dashboard Layout
const DashboardLayout: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('dashboard');
  const [showEmergency, setShowEmergency] = React.useState(false);

  const renderMainContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'appointments':
        return <Appointments />;
      case 'records':
        return <HealthRecords />;
      case 'consultations':
        return <Consultations />;
      case 'monitoring':
        return <HealthMonitoring />;
      case 'emergency':
        setShowEmergency(true);
        return <Dashboard />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-medical transition-colors duration-300">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-medical-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-medical-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="flex h-screen relative">
        {/* Sidebar */}
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          <TopBar onEmergencyClick={() => setShowEmergency(true)} />
          
          {/* Content Area */}
          <div className="flex-1 overflow-auto">
            <div className="p-6">
              {renderMainContent()}
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Alert Modal */}
      {showEmergency && (
        <EmergencyAlert onClose={() => setShowEmergency(false)} />
      )}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="App">
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
                success: {
                  duration: 3000,
                  iconTheme: {
                    primary: '#10B981',
                    secondary: '#fff',
                  },
                },
                error: {
                  duration: 5000,
                  iconTheme: {
                    primary: '#EF4444',
                    secondary: '#fff',
                  },
                },
              }}
            />
            
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route 
                path="/" 
                element={
                  <ProtectedRoute>
                    <DashboardLayout />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;