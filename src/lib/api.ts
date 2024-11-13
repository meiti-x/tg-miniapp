import WebApp from "@twa-dev/sdk";
import axios from "axios";

const api = axios.create({
  baseURL: "https://qbc8.boloorin.top:8080",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: WebApp?.initDataUnsafe?.user?.id,
  },
});
api.defaults.withCredentials = true;

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Example token from localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/login"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

export default api;
