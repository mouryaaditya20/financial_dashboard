import axios, { AxiosInstance, AxiosResponse } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor to add auth token
    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor to handle auth errors
    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('access_token');
          localStorage.removeItem('user');
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  // Auth endpoints
  async register(userData: {
    username: string;
    password: string;
    email?: string;
    role?: string;
  }): Promise<any> {
    const response: AxiosResponse = await this.api.post('/auth/register', userData);
    return response.data;
  }

  async login(credentials: { username: string; password: string }): Promise<any> {
    const response: AxiosResponse = await this.api.post('/auth/login', credentials);
    return response.data;
  }

  async getCurrentUser(): Promise<any> {
    const response: AxiosResponse = await this.api.get('/auth/me');
    return response.data;
  }

  // Appointments endpoints
  async createAppointment(appointmentData: {
    patient_name: string;
    doctor_name: string;
    date: string;
    time: string;
    reason: string;
  }): Promise<any> {
    const response: AxiosResponse = await this.api.post('/appointments', appointmentData);
    return response.data;
  }

  async getAppointments(): Promise<any> {
    const response: AxiosResponse = await this.api.get('/appointments');
    return response.data;
  }

  // Health records endpoints
  async createHealthRecord(recordData: {
    record_type: string;
    description: string;
    date?: string;
    doctor?: string;
    attachments?: string[];
  }): Promise<any> {
    const response: AxiosResponse = await this.api.post('/health-records', recordData);
    return response.data;
  }

  async getHealthRecords(): Promise<any> {
    const response: AxiosResponse = await this.api.get('/health-records');
    return response.data;
  }

  // Emergency alerts endpoints
  async createEmergencyAlert(alertData: {
    emergency_type: string;
    location: string;
    description: string;
  }): Promise<any> {
    const response: AxiosResponse = await this.api.post('/emergency-alerts', alertData);
    return response.data;
  }

  // Admin endpoints
  async getAdminAppointments(): Promise<any> {
    const response: AxiosResponse = await this.api.get('/admin/appointments');
    return response.data;
  }

  async getAdminHealthRecords(): Promise<any> {
    const response: AxiosResponse = await this.api.get('/admin/health-records');
    return response.data;
  }

  async getAdminUsers(): Promise<any> {
    const response: AxiosResponse = await this.api.get('/admin/users');
    return response.data;
  }

  async makeUserAdmin(userId: string): Promise<any> {
    const response: AxiosResponse = await this.api.post(`/admin/users/${userId}/make_admin`);
    return response.data;
  }
}

export const apiService = new ApiService();
export default apiService;
