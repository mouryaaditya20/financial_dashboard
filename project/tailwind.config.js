/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Medical theme colors
        'medical-primary': '#0066CC',
        'medical-secondary': '#00A86B',
        'medical-accent': '#FF6B6B',
        'medical-warning': '#FFA500',
        'medical-success': '#28A745',
        
        // Dark theme
        'dark-bg': '#0F172A',
        'dark-surface': '#1E293B',
        'dark-card': '#334155',
        'dark-border': '#475569',
        'dark-text': '#F8FAFC',
        'dark-text-secondary': '#CBD5E1',
        
        // Light theme
        'light-bg': '#F8FAFC',
        'light-surface': '#FFFFFF',
        'light-card': '#F1F5F9',
        'light-border': '#E2E8F0',
        'light-text': '#1E293B',
        'light-text-secondary': '#64748B',
      },
      fontFamily: {
        'medical': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'medical': '0 4px 6px -1px rgba(0, 102, 204, 0.1), 0 2px 4px -1px rgba(0, 102, 204, 0.06)',
        'medical-lg': '0 10px 15px -3px rgba(0, 102, 204, 0.1), 0 4px 6px -2px rgba(0, 102, 204, 0.05)',
        'glow': '0 0 20px rgba(0, 102, 204, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
};