import axios from "axios";

const baseURL = `${(
  import.meta.env.VITE_BASE_URL || "https://ems-backend-5czt.onrender.com"
).replace(/\/$/, "")}/api`;

const api = axios.create({
  baseURL,
});

// Attach auth token to all network requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;