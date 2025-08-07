import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Search, Shield, AlertTriangle } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface TopBarProps {
  onEmergencyClick: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onEmergencyClick }) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-sm border-b border-light-border dark:border-dark-border px-6 py-4 flex items-center justify-between sticky top-0 z-50"
    >
      {/* Left section */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
          <input
            type="text"
            placeholder="Search patients, appointments..."
            className="pl-10 pr-4 py-2 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-primary/50 focus:border-medical-primary transition-colors w-80"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4">
        {/* Emergency Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEmergencyClick}
          className="flex items-center space-x-2 bg-medical-accent/10 text-medical-accent px-4 py-2 rounded-lg hover:bg-medical-accent/20 transition-colors animate-pulse"
        >
          <AlertTriangle className="w-4 h-4" />
          <span className="text-sm font-medium">Emergency</span>
        </motion.button>

        {/* Security Badge */}
        <div className="flex items-center space-x-2 bg-medical-success/10 text-medical-success px-3 py-2 rounded-lg">
          <Shield className="w-4 h-4" />
          <span className="text-xs font-medium">HIPAA Compliant</span>
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Notifications */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-2 bg-light-card dark:bg-dark-card rounded-lg hover:bg-medical-primary/10 transition-colors"
        >
          <Bell className="w-5 h-5 text-light-text dark:text-dark-text" />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-medical-accent rounded-full"
          />
        </motion.button>

        {/* Doctor Profile */}
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-sm font-medium text-light-text dark:text-dark-text">Dr. Sarah Wilson</p>
            <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">Cardiologist</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-10 h-10 bg-medical-primary rounded-full flex items-center justify-center cursor-pointer"
          >
            <span className="text-white font-bold text-sm">SW</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};