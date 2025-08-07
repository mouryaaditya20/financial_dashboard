import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  Activity, 
  TrendingUp, 
  Heart, 
  Thermometer, 
  Droplets,
  Zap,
  Clock,
  CheckCircle
} from 'lucide-react';

const stats = [
  { label: 'Total Patients', value: '2,847', change: '+12%', icon: Users, color: 'medical-primary' },
  { label: 'Today\'s Appointments', value: '24', change: '+3', icon: Calendar, color: 'medical-secondary' },
  { label: 'Active Consultations', value: '8', change: 'Live', icon: Activity, color: 'medical-accent' },
  { label: 'Health Alerts', value: '3', change: 'Critical', icon: TrendingUp, color: 'medical-warning' },
];

const recentAppointments = [
  { id: 1, patient: 'John Doe', time: '09:00 AM', type: 'Consultation', status: 'confirmed' },
  { id: 2, patient: 'Mary Johnson', time: '10:30 AM', type: 'Follow-up', status: 'in-progress' },
  { id: 3, patient: 'Robert Smith', time: '02:00 PM', type: 'Check-up', status: 'pending' },
  { id: 4, patient: 'Lisa Brown', time: '03:30 PM', type: 'Consultation', status: 'confirmed' },
];

const vitalSigns = [
  { label: 'Heart Rate', value: '72 BPM', status: 'normal', icon: Heart, color: 'text-medical-accent' },
  { label: 'Blood Pressure', value: '120/80', status: 'normal', icon: Activity, color: 'text-medical-secondary' },
  { label: 'Temperature', value: '98.6°F', status: 'normal', icon: Thermometer, color: 'text-blue-500' },
  { label: 'Oxygen Level', value: '98%', status: 'normal', icon: Droplets, color: 'text-cyan-500' },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-light-text dark:text-dark-text">Healthcare Dashboard</h1>
        <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">
          Welcome back, Dr. Wilson. Here's your overview for today.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl p-6 shadow-medical hover:shadow-medical-lg transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${stat.color}/10`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}`} />
              </div>
              <span className={`text-sm font-medium ${
                stat.change.includes('+') ? 'text-medical-secondary' : 
                stat.change === 'Live' ? 'text-medical-accent animate-pulse' :
                stat.change === 'Critical' ? 'text-medical-accent' : 'text-light-text-secondary dark:text-dark-text-secondary'
              }`}>
                {stat.change}
              </span>
            </div>
            <div>
              <p className="text-2xl font-bold text-light-text dark:text-dark-text">{stat.value}</p>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Appointments */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl p-6 shadow-medical"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-light-text dark:text-dark-text">Today's Appointments</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-medical-primary hover:text-medical-primary/80 text-sm font-medium"
            >
              View All
            </motion.button>
          </div>
          <div className="space-y-4">
            {recentAppointments.map((appointment, index) => (
              <motion.div
                key={appointment.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="flex items-center justify-between p-4 bg-light-card dark:bg-dark-card rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-medical-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-medical-primary font-medium text-sm">
                      {appointment.patient.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-light-text dark:text-dark-text">{appointment.patient}</p>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{appointment.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-light-text dark:text-dark-text">{appointment.time}</p>
                  <div className="flex items-center space-x-1">
                    {appointment.status === 'confirmed' && <CheckCircle className="w-4 h-4 text-medical-secondary" />}
                    {appointment.status === 'in-progress' && <Clock className="w-4 h-4 text-medical-warning animate-pulse" />}
                    {appointment.status === 'pending' && <Clock className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />}
                    <span className={`text-xs capitalize ${
                      appointment.status === 'confirmed' ? 'text-medical-secondary' :
                      appointment.status === 'in-progress' ? 'text-medical-warning' :
                      'text-light-text-secondary dark:text-dark-text-secondary'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vital Signs Monitor */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl p-6 shadow-medical"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-light-text dark:text-dark-text">Patient Vitals</h2>
            <div className="flex items-center space-x-1">
              <Zap className="w-4 h-4 text-medical-secondary animate-pulse" />
              <span className="text-xs text-medical-secondary">Live</span>
            </div>
          </div>
          <div className="space-y-4">
            {vitalSigns.map((vital, index) => (
              <motion.div
                key={vital.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="flex items-center justify-between p-3 bg-light-card dark:bg-dark-card rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <vital.icon className={`w-5 h-5 ${vital.color}`} />
                  <span className="text-sm text-light-text dark:text-dark-text">{vital.label}</span>
                </div>
                <div className="text-right">
                  <p className="font-bold text-light-text dark:text-dark-text">{vital.value}</p>
                  <span className="text-xs text-medical-secondary">Normal</span>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 py-3 bg-medical-primary text-white rounded-lg hover:bg-medical-primary/90 transition-colors font-medium"
          >
            View Detailed Report
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};