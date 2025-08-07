import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Activity, 
  Thermometer, 
  Droplets,
  Zap,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Clock
} from 'lucide-react';

const vitalSigns = [
  {
    id: 1,
    name: 'Heart Rate',
    value: '72',
    unit: 'BPM',
    status: 'normal',
    trend: 'stable',
    icon: Heart,
    color: 'text-medical-accent',
    bgColor: 'bg-medical-accent/10',
    lastUpdate: '2 min ago',
    range: '60-100 BPM'
  },
  {
    id: 2,
    name: 'Blood Pressure',
    value: '120/80',
    unit: 'mmHg',
    status: 'normal',
    trend: 'down',
    icon: Activity,
    color: 'text-medical-secondary',
    bgColor: 'bg-medical-secondary/10',
    lastUpdate: '5 min ago',
    range: '<120/80 mmHg'
  },
  {
    id: 3,
    name: 'Body Temperature',
    value: '98.6',
    unit: '°F',
    status: 'normal',
    trend: 'stable',
    icon: Thermometer,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    lastUpdate: '10 min ago',
    range: '97.8-99.1°F'
  },
  {
    id: 4,
    name: 'Blood Oxygen',
    value: '98',
    unit: '%',
    status: 'normal',
    trend: 'up',
    icon: Droplets,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    lastUpdate: '1 min ago',
    range: '95-100%'
  },
];

const healthMetrics = [
  { label: 'Steps Today', value: '8,432', target: '10,000', percentage: 84 },
  { label: 'Calories Burned', value: '2,156', target: '2,500', percentage: 86 },
  { label: 'Sleep Quality', value: '7.2h', target: '8h', percentage: 90 },
  { label: 'Water Intake', value: '6 glasses', target: '8 glasses', percentage: 75 },
];

const alerts = [
  {
    id: 1,
    type: 'warning',
    message: 'Heart rate elevated during exercise',
    time: '2 hours ago',
    severity: 'medium'
  },
  {
    id: 2,
    type: 'info',
    message: 'Daily step goal achieved',
    time: '4 hours ago',
    severity: 'low'
  },
  {
    id: 3,
    type: 'success',
    message: 'Blood pressure reading normal',
    time: '6 hours ago',
    severity: 'low'
  },
];

export const HealthMonitoring: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-light-text dark:text-dark-text">Health Monitoring</h1>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">
            Real-time health metrics and vital signs tracking
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-medical-success/10 text-medical-success px-3 py-2 rounded-lg">
            <Zap className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-medium">Live Monitoring</span>
          </div>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-primary/50"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>
      </motion.div>

      {/* Vital Signs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {vitalSigns.map((vital, index) => (
          <motion.div
            key={vital.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl p-6 shadow-medical hover:shadow-medical-lg transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${vital.bgColor}`}>
                <vital.icon className={`w-6 h-6 ${vital.color} ${vital.name === 'Heart Rate' ? 'animate-heartbeat' : ''}`} />
              </div>
              <div className="flex items-center space-x-1">
                {vital.trend === 'up' && <TrendingUp className="w-4 h-4 text-medical-secondary" />}
                {vital.trend === 'down' && <TrendingDown className="w-4 h-4 text-medical-accent" />}
                {vital.trend === 'stable' && <div className="w-4 h-1 bg-light-text-secondary dark:text-dark-text-secondary rounded" />}
                <span className={`text-xs ${
                  vital.status === 'normal' ? 'text-medical-success' : 
                  vital.status === 'warning' ? 'text-medical-warning' : 'text-medical-accent'
                }`}>
                  {vital.status}
                </span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-light-text dark:text-dark-text">{vital.value}</span>
                <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{vital.unit}</span>
              </div>
              <p className="text-sm font-medium text-light-text dark:text-dark-text">{vital.name}</p>
              <div className="space-y-1">
                <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">Normal: {vital.range}</p>
                <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">Updated: {vital.lastUpdate}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Health Metrics */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl p-6 shadow-medical"
        >
          <h2 className="text-xl font-bold text-light-text dark:text-dark-text mb-6">Daily Health Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-light-text dark:text-dark-text">{metric.label}</span>
                  <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{metric.percentage}%</span>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-bold text-light-text dark:text-dark-text">{metric.value}</span>
                  <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">/ {metric.target}</span>
                </div>
                <div className="w-full bg-light-card dark:bg-dark-card rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.percentage}%` }}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    className={`h-2 rounded-full ${
                      metric.percentage >= 90 ? 'bg-medical-success' :
                      metric.percentage >= 70 ? 'bg-medical-secondary' :
                      'bg-medical-warning'
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Health Alerts */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl p-6 shadow-medical"
        >
          <h2 className="text-xl font-bold text-light-text dark:text-dark-text mb-6">Health Alerts</h2>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="flex items-start space-x-3 p-3 bg-light-card dark:bg-dark-card rounded-lg"
              >
                <div className={`p-1 rounded-full ${
                  alert.type === 'warning' ? 'bg-medical-warning/20' :
                  alert.type === 'success' ? 'bg-medical-success/20' :
                  'bg-medical-primary/20'
                }`}>
                  {alert.type === 'warning' && <AlertTriangle className="w-4 h-4 text-medical-warning" />}
                  {alert.type === 'success' && <CheckCircle className="w-4 h-4 text-medical-success" />}
                  {alert.type === 'info' && <Activity className="w-4 h-4 text-medical-primary" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-light-text dark:text-dark-text">{alert.message}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Clock className="w-3 h-3 text-light-text-secondary dark:text-dark-text-secondary" />
                    <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary">{alert.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 py-3 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg text-light-text dark:text-dark-text hover:bg-light-border dark:hover:bg-dark-border transition-colors"
          >
            View All Alerts
          </motion.button>
        </motion.div>
      </div>

      {/* Chart Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl p-6 shadow-medical"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-light-text dark:text-dark-text">Health Trends</h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-medical-primary text-white rounded-md text-sm">Heart Rate</button>
            <button className="px-3 py-1 bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text rounded-md text-sm">Blood Pressure</button>
            <button className="px-3 py-1 bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text rounded-md text-sm">Temperature</button>
          </div>
        </div>
        <div className="h-64 bg-light-card dark:bg-dark-card rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Activity className="w-12 h-12 text-light-text-secondary dark:text-dark-text-secondary mx-auto mb-4" />
            <p className="text-light-text-secondary dark:text-dark-text-secondary">Interactive health charts would be displayed here</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};