import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, 
  Phone, 
  MapPin, 
  Clock,
  User,
  Heart,
  X,
  Send
} from 'lucide-react';

interface EmergencyAlertProps {
  onClose: () => void;
}

const emergencyContacts = [
  { name: 'Emergency Services', number: '911', type: 'emergency' },
  { name: 'Dr. Sarah Wilson', number: '+1 (555) 123-4567', type: 'doctor' },
  { name: 'Emergency Contact', number: '+1 (555) 987-6543', type: 'family' },
];

const emergencyTypes = [
  { id: 'cardiac', label: 'Cardiac Emergency', icon: Heart, color: 'bg-red-500' },
  { id: 'breathing', label: 'Breathing Difficulty', icon: AlertTriangle, color: 'bg-orange-500' },
  { id: 'injury', label: 'Serious Injury', icon: AlertTriangle, color: 'bg-yellow-500' },
  { id: 'other', label: 'Other Emergency', icon: AlertTriangle, color: 'bg-purple-500' },
];

export const EmergencyAlert: React.FC<EmergencyAlertProps> = ({ onClose }) => {
  const [selectedEmergency, setSelectedEmergency] = useState<string | null>(null);
  const [location, setLocation] = useState('Getting location...');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    // Simulate getting location
    setTimeout(() => {
      setLocation('123 Main St, City, State 12345');
    }, 2000);
  }, []);

  const handleEmergencyCall = (number: string) => {
    // In a real app, this would initiate a call
    console.log(`Calling ${number}`);
  };

  const handleSubmitEmergency = async () => {
    setIsSubmitting(true);
    // Simulate emergency submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-medical-accent/20 rounded-full flex items-center justify-center animate-pulse">
                <AlertTriangle className="w-6 h-6 text-medical-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-medical-accent">Emergency Alert</h2>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Get immediate help</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 hover:bg-light-card dark:hover:bg-dark-card rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />
            </motion.button>
          </div>

          {/* Emergency Contacts */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-4">Quick Call</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {emergencyContacts.map((contact, index) => (
                <motion.button
                  key={contact.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleEmergencyCall(contact.number)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    contact.type === 'emergency' 
                      ? 'border-medical-accent bg-medical-accent/10 hover:bg-medical-accent/20' 
                      : 'border-light-border dark:border-dark-border hover:border-medical-primary'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Phone className={`w-5 h-5 ${contact.type === 'emergency' ? 'text-medical-accent' : 'text-medical-primary'}`} />
                    <div className="text-left">
                      <p className="font-medium text-light-text dark:text-dark-text">{contact.name}</p>
                      <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{contact.number}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Emergency Type Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-4">Emergency Type</h3>
            <div className="grid grid-cols-2 gap-3">
              {emergencyTypes.map((type, index) => (
                <motion.button
                  key={type.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedEmergency(type.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedEmergency === type.id
                      ? 'border-medical-primary bg-medical-primary/10'
                      : 'border-light-border dark:border-dark-border hover:border-medical-primary/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 ${type.color} rounded-full flex items-center justify-center`}>
                      <type.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-light-text dark:text-dark-text">{type.label}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-4">Current Location</h3>
            <div className="flex items-center space-x-3 p-4 bg-light-card dark:bg-dark-card rounded-xl">
              <MapPin className="w-5 h-5 text-medical-primary" />
              <div>
                <p className="font-medium text-light-text dark:text-dark-text">Your Location</p>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{location}</p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-4">Additional Information</h3>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe the emergency situation (optional)..."
              className="w-full p-4 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-primary/50 resize-none h-24"
            />
          </div>

          {/* Patient Info */}
          <div className="mb-6 p-4 bg-medical-primary/5 rounded-xl">
            <div className="flex items-center space-x-3 mb-3">
              <User className="w-5 h-5 text-medical-primary" />
              <h3 className="font-bold text-light-text dark:text-dark-text">Patient Information</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-light-text-secondary dark:text-dark-text-secondary">Name</p>
                <p className="font-medium text-light-text dark:text-dark-text">Jane Smith</p>
              </div>
              <div>
                <p className="text-light-text-secondary dark:text-dark-text-secondary">Age</p>
                <p className="font-medium text-light-text dark:text-dark-text">32 years</p>
              </div>
              <div>
                <p className="text-light-text-secondary dark:text-dark-text-secondary">Blood Type</p>
                <p className="font-medium text-light-text dark:text-dark-text">O+</p>
              </div>
              <div>
                <p className="text-light-text-secondary dark:text-dark-text-secondary">Allergies</p>
                <p className="font-medium text-light-text dark:text-dark-text">Penicillin</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="flex-1 py-3 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text hover:bg-light-border dark:hover:bg-dark-border transition-colors"
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmitEmergency}
              disabled={isSubmitting}
              className="flex-1 flex items-center justify-center space-x-2 py-3 bg-medical-accent text-white rounded-xl hover:bg-medical-accent/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sending Alert...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Emergency Alert</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Emergency Timer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 flex items-center justify-center space-x-2 text-medical-accent"
          >
            <Clock className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-medium">Emergency services will be notified immediately</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};