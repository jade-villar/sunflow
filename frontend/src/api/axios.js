import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

let csrfToken = null;

export const getCsrfToken = async () => {
  const res = await api.get("/csrf-token");
  csrfToken = res.data.csrfToken;
};

// Attach token to every mutating request
api.interceptors.request.use((config) => {
  if (["post", "put", "patch", "delete"].includes(config.method)) {
    config.headers["x-csrf-token"] = csrfToken;
  }
  return config;
});

// Auto-refresh token after every mutating request
api.interceptors.response.use(async (response) => {
  if (["post", "put", "patch", "delete"].includes(response.config.method)) {
    await getCsrfToken();
  }
  return response;
});

export default api;
