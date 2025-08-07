import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Video, Phone, MessageSquare, Calendar, Clock, User, Mic, MicOff, VideoOff, Settings, Users, Share, SwordIcon as Record } from 'lucide-react';

const activeConsultations = [
  {
    id: 1,
    patient: 'John Doe',
    type: 'video',
    duration: '15:32',
    status: 'active',
    reason: 'Follow-up consultation',
    startTime: '09:00 AM'
  },
  {
    id: 2,
    patient: 'Mary Johnson',
    type: 'phone',
    duration: '08:45',
    status: 'active',
    reason: 'Prescription review',
    startTime: '10:30 AM'
  },
];

const upcomingConsultations = [
  {
    id: 3,
    patient: 'Robert Smith',
    type: 'video',
    scheduledTime: '02:00 PM',
    reason: 'Initial consultation',
    status: 'scheduled'
  },
  {
    id: 4,
    patient: 'Lisa Brown',
    type: 'phone',
    scheduledTime: '03:30 PM',
    reason: 'Lab results discussion',
    status: 'scheduled'
  },
];

export const Consultations: React.FC = () => {
  const [selectedConsultation, setSelectedConsultation] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

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
          <h1 className="text-3xl font-bold text-light-text dark:text-dark-text">Consultations</h1>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">
            Manage your virtual and phone consultations
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-medical-primary text-white px-4 py-2 rounded-lg hover:bg-medical-primary/90 transition-colors"
        >
          <Calendar className="w-4 h-4" />
          <span>Schedule New</span>
        </motion.button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Consultations */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Active Sessions */}
          <div className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl p-6 shadow-medical">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-light-text dark:text-dark-text">Active Consultations</h2>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-medical-accent rounded-full animate-pulse"></div>
                <span className="text-sm text-medical-accent">Live</span>
              </div>
            </div>

            <div className="space-y-4">
              {activeConsultations.map((consultation, index) => (
                <motion.div
                  key={consultation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-light-card dark:bg-dark-card rounded-lg border-l-4 border-medical-accent"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-medical-primary/10 rounded-full flex items-center justify-center">
                      {consultation.type === 'video' ? (
                        <Video className="w-6 h-6 text-medical-primary" />
                      ) : (
                        <Phone className="w-6 h-6 text-medical-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-light-text dark:text-dark-text">{consultation.patient}</h3>
                      <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{consultation.reason}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock className="w-3 h-3 text-medical-accent" />
                        <span className="text-xs text-medical-accent font-medium">{consultation.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-medical-accent text-white rounded-lg hover:bg-medical-accent/90 transition-colors"
                    >
                      Join
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-2 bg-light-border dark:bg-dark-border rounded-lg hover:bg-light-text-secondary/10 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Video Call Interface */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-medical-primary/20 to-medical-secondary/20"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">John Doe</h3>
                    <p className="text-sm opacity-80">Follow-up consultation</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">15:32</span>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-8 mb-4 text-center">
                <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-sm opacity-80">Video call in progress</p>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMuted(!isMuted)}
                  className={`p-3 rounded-full transition-colors ${
                    isMuted ? 'bg-red-500' : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoOff(!isVideoOff)}
                  className={`p-3 rounded-full transition-colors ${
                    isVideoOff ? 'bg-red-500' : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  {isVideoOff ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                >
                  <Share className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                >
                  <Record className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-red-500 hover:bg-red-600 rounded-full transition-colors"
                >
                  <Phone className="w-5 h-5 transform rotate-[135deg]" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Upcoming Consultations */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl p-6 shadow-medical">
            <h2 className="text-xl font-bold text-light-text dark:text-dark-text mb-6">Upcoming</h2>
            <div className="space-y-4">
              {upcomingConsultations.map((consultation, index) => (
                <motion.div
                  key={consultation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="p-4 bg-light-card dark:bg-dark-card rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-medical-primary/10 rounded-full flex items-center justify-center">
                      {consultation.type === 'video' ? (
                        <Video className="w-4 h-4 text-medical-primary" />
                      ) : (
                        <Phone className="w-4 h-4 text-medical-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-light-text dark:text-dark-text">{consultation.patient}</h3>
                      <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">{consultation.reason}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-medical-primary">{consultation.scheduledTime}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 bg-medical-primary/10 text-medical-primary rounded-md text-xs hover:bg-medical-primary/20 transition-colors"
                    >
                      Prepare
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl p-6 shadow-medical">
            <h2 className="text-xl font-bold text-light-text dark:text-dark-text mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center space-x-3 p-3 bg-light-card dark:bg-dark-card rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors"
              >
                <Video className="w-5 h-5 text-medical-primary" />
                <span className="text-sm text-light-text dark:text-dark-text">Start Instant Video Call</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center space-x-3 p-3 bg-light-card dark:bg-dark-card rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors"
              >
                <Users className="w-5 h-5 text-medical-secondary" />
                <span className="text-sm text-light-text dark:text-dark-text">Group Consultation</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center space-x-3 p-3 bg-light-card dark:bg-dark-card rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors"
              >
                <Settings className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />
                <span className="text-sm text-light-text dark:text-dark-text">Call Settings</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};