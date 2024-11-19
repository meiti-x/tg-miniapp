import WebApp from "@twa-dev/sdk";
import axios from "axios";

const api = axios.create({
  baseURL: "https://qbc8.boloorin.top",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
// api.defaults.withCredentials = true;

api.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = WebApp?.initDataUnsafe?.user?.id;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
