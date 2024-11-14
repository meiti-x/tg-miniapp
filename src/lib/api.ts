import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1100",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: WebApp?.initDataUnsafe?.user?.id,
  },
});
// api.defaults.withCredentials = true;

api.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `12345`;
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
