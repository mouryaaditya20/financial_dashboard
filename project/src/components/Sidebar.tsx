import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Calendar, 
  FileText, 
  Video, 
  Activity, 
  AlertTriangle,
  ChevronLeft, 
  ChevronRight,
  Heart
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigation = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'appointments', label: 'Appointments', icon: Calendar },
  { id: 'records', label: 'Health Records', icon: FileText },
  { id: 'consultations', label: 'Consultations', icon: Video },
  { id: 'monitoring', label: 'Health Monitoring', icon: Activity },
  { id: 'emergency', label: 'Emergency', icon: AlertTriangle, isEmergency: true },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.div
      initial={{ width: 280 }}
      animate={{ width: isCollapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-sm border-r border-light-border dark:border-dark-border flex flex-col h-full"
    >
      {/* Header */}
      <div className="p-6 border-b border-light-border dark:border-dark-border flex items-center justify-between">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="flex items-center space-x-3"
        >
          {!isCollapsed && (
            <>
              <div className="w-8 h-8 bg-medical-primary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white animate-heartbeat" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-medical-primary">MediConnect</h1>
                <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">Healthcare Platform</p>
              </div>
            </>
          )}
        </motion.div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-full hover:bg-light-card dark:hover:bg-dark-card transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all relative group ${
              activeSection === item.id
                ? item.isEmergency 
                  ? 'bg-medical-accent/10 text-medical-accent'
                  : 'bg-medical-primary/10 text-medical-primary'
                : 'text-light-text dark:text-dark-text hover:bg-light-card dark:hover:bg-dark-card'
            } ${item.isEmergency ? 'hover:bg-medical-accent/10 hover:text-medical-accent' : 'hover:text-medical-primary'}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`relative ${activeSection === item.id ? 'drop-shadow-lg' : ''}`}>
              <item.icon className={`w-6 h-6 ${item.isEmergency && activeSection !== item.id ? 'animate-pulse' : ''}`} />
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeGlow"
                  className={`absolute inset-0 ${item.isEmergency ? 'bg-medical-accent/20' : 'bg-medical-primary/20'} rounded-full blur-sm`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: isCollapsed ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="font-medium"
              >
                {item.label}
              </motion.span>
            )}
            {activeSection === item.id && (
              <motion.div
                layoutId="activeIndicator"
                className={`absolute right-0 w-1 h-8 ${item.isEmergency ? 'bg-medical-accent' : 'bg-medical-primary'} rounded-l-full`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </nav>

      {/* Patient Info */}
      <div className="p-4 border-t border-light-border dark:border-dark-border">
        <div className="flex items-center space-x-3 p-3 bg-light-card dark:bg-dark-card rounded-xl">
          <div className="w-10 h-10 bg-medical-secondary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">JS</span>
          </div>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: isCollapsed ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-sm font-medium text-light-text dark:text-dark-text">Jane Smith</p>
              <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">Patient ID: #12345</p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};