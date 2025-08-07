import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Dashboard } from './components/Dashboard';
import { Appointments } from './components/Appointments';
import { HealthRecords } from './components/HealthRecords';
import { Consultations } from './components/Consultations';
import { HealthMonitoring } from './components/HealthMonitoring';
import { EmergencyAlert } from './components/EmergencyAlert';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showEmergency, setShowEmergency] = useState(false);

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
    <ThemeProvider>
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
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {renderMainContent()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Alert Modal */}
        <AnimatePresence>
          {showEmergency && (
            <EmergencyAlert onClose={() => setShowEmergency(false)} />
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;