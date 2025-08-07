import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Upload, 
  Search, 
  Filter,
  Eye,
  Share,
  Lock,
  Calendar,
  User,
  Activity
} from 'lucide-react';

const healthRecords = [
  {
    id: 1,
    title: 'Annual Physical Exam',
    date: '2024-01-10',
    doctor: 'Dr. Sarah Wilson',
    type: 'Examination',
    status: 'completed',
    fileSize: '2.4 MB',
    category: 'General'
  },
  {
    id: 2,
    title: 'Blood Test Results',
    date: '2024-01-08',
    doctor: 'Dr. Michael Chen',
    type: 'Lab Results',
    status: 'reviewed',
    fileSize: '1.2 MB',
    category: 'Laboratory'
  },
  {
    id: 3,
    title: 'Chest X-Ray',
    date: '2024-01-05',
    doctor: 'Dr. Emily Rodriguez',
    type: 'Imaging',
    status: 'pending',
    fileSize: '5.8 MB',
    category: 'Radiology'
  },
  {
    id: 4,
    title: 'Prescription History',
    date: '2024-01-03',
    doctor: 'Dr. Sarah Wilson',
    type: 'Medication',
    status: 'active',
    fileSize: '0.8 MB',
    category: 'Pharmacy'
  },
];

const categories = ['All', 'General', 'Laboratory', 'Radiology', 'Pharmacy', 'Cardiology'];
const statusColors = {
  completed: 'bg-medical-success/10 text-medical-success',
  reviewed: 'bg-medical-primary/10 text-medical-primary',
  pending: 'bg-medical-warning/10 text-medical-warning',
  active: 'bg-medical-secondary/10 text-medical-secondary',
};

export const HealthRecords: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

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
          <h1 className="text-3xl font-bold text-light-text dark:text-dark-text">Health Records</h1>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">
            Secure access to your complete medical history
          </p>
        </div>
        <div className="flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border px-4 py-2 rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors"
          >
            <Upload className="w-4 h-4" />
            <span>Upload</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-medical-primary text-white px-4 py-2 rounded-lg hover:bg-medical-primary/90 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export All</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl p-4"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
            <input
              type="text"
              placeholder="Search records..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-primary/50"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 text-medical-success" />
            <span className="text-sm text-medical-success font-medium">HIPAA Secured</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-medical-primary text-white'
                  : 'bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text hover:bg-light-border dark:hover:bg-dark-border'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Records Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {healthRecords.map((record, index) => (
          <motion.div
            key={record.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl p-6 shadow-medical hover:shadow-medical-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-medical-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-medical-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-light-text dark:text-dark-text">{record.title}</h3>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{record.type}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[record.status as keyof typeof statusColors]}`}>
                {record.status}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
                  <span className="text-sm text-light-text dark:text-dark-text">{record.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
                  <span className="text-sm text-light-text dark:text-dark-text">{record.doctor}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
                  <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{record.category}</span>
                </div>
                <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  {record.fileSize}
                </span>
              </div>
            </div>

            <div className="flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center space-x-2 py-2 bg-medical-primary text-white rounded-lg hover:bg-medical-primary/90 transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span className="text-sm">View</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-2 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors"
              >
                <Download className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-2 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors"
              >
                <Share className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        {[
          { label: 'Total Records', value: '127', icon: FileText },
          { label: 'Recent Updates', value: '8', icon: Activity },
          { label: 'Shared Records', value: '12', icon: Share },
          { label: 'Storage Used', value: '2.1 GB', icon: Download },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
            className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl p-4 text-center"
          >
            <stat.icon className="w-6 h-6 text-medical-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-light-text dark:text-dark-text">{stat.value}</p>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};