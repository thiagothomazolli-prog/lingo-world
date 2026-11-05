// API Base URL: in development or web it can be relative (''),
// but in mobile APK (Capacitor) it points to the deployed cloud server (e.g. Render / Railway).
export const API_BASE_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

