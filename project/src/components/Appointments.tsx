import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Video, 
  Phone, 
  MapPin, 
  Plus,
  Filter,
  Search
} from 'lucide-react';

const appointments = [
  {
    id: 1,
    patient: 'John Doe',
    time: '09:00 AM',
    date: '2024-01-15',
    type: 'Video Consultation',
    status: 'confirmed',
    reason: 'Follow-up checkup',
    duration: '30 min',
    icon: Video
  },
  {
    id: 2,
    patient: 'Mary Johnson',
    time: '10:30 AM',
    date: '2024-01-15',
    type: 'In-Person',
    status: 'in-progress',
    reason: 'Annual physical exam',
    duration: '45 min',
    icon: MapPin
  },
  {
    id: 3,
    patient: 'Robert Smith',
    time: '02:00 PM',
    date: '2024-01-15',
    type: 'Phone Call',
    status: 'pending',
    reason: 'Lab results discussion',
    duration: '15 min',
    icon: Phone
  },
  {
    id: 4,
    patient: 'Lisa Brown',
    time: '03:30 PM',
    date: '2024-01-15',
    type: 'Video Consultation',
    status: 'confirmed',
    reason: 'Medication review',
    duration: '20 min',
    icon: Video
  },
];

const statusColors = {
  confirmed: 'bg-medical-secondary/10 text-medical-secondary',
  'in-progress': 'bg-medical-warning/10 text-medical-warning',
  pending: 'bg-light-text-secondary/10 text-light-text-secondary dark:text-dark-text-secondary',
  completed: 'bg-medical-primary/10 text-medical-primary',
};

export const Appointments: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('2024-01-15');
  const [filterStatus, setFilterStatus] = useState('all');

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
          <h1 className="text-3xl font-bold text-light-text dark:text-dark-text">Appointments</h1>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">
            Manage your patient appointments and consultations
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-medical-primary text-white px-4 py-2 rounded-lg hover:bg-medical-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>New Appointment</span>
        </motion.button>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-between bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl p-4"
      >
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
            <input
              type="text"
              placeholder="Search appointments..."
              className="pl-10 pr-4 py-2 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-primary/50 w-64"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-primary/50"
          >
            <option value="all">All Status</option>
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-2 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-primary/50"
          />
        </div>
      </motion.div>

      {/* Appointments List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {appointments.map((appointment, index) => (
          <motion.div
            key={appointment.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl p-6 shadow-medical hover:shadow-medical-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-medical-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-medical-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-light-text dark:text-dark-text">{appointment.patient}</h3>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{appointment.reason}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[appointment.status as keyof typeof statusColors]}`}>
                {appointment.status.replace('-', ' ')}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
                  <span className="text-sm text-light-text dark:text-dark-text">{appointment.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <appointment.icon className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
                  <span className="text-sm text-light-text dark:text-dark-text">{appointment.type}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  Duration: {appointment.duration}
                </span>
                <div className="flex space-x-2">
                  {appointment.status === 'confirmed' && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 bg-medical-secondary text-white rounded-md text-xs hover:bg-medical-secondary/90 transition-colors"
                    >
                      Start
                    </motion.button>
                  )}
                  {appointment.status === 'in-progress' && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 bg-medical-accent text-white rounded-md text-xs hover:bg-medical-accent/90 transition-colors animate-pulse"
                    >
                      Join
                    </motion.button>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-md text-xs hover:bg-light-border dark:hover:bg-dark-border transition-colors"
                  >
                    Reschedule
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Calendar View Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl p-6 text-center"
      >
        <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-2">Calendar View</h3>
        <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
          Switch to calendar view for better scheduling overview
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-medical-primary text-white rounded-lg hover:bg-medical-primary/90 transition-colors"
        >
          Open Calendar
        </motion.button>
      </motion.div>
    </div>
  );
};