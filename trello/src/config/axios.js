import axios from "axios";
import { apiUrl } from "../constances/API";

const axiosIntance = axios.create({
  baseURL: apiUrl,
});

axiosIntance.interceptors.request.use((config) => {
  const apiKey = localStorage.getItem("apiKey");
  if (apiKey) {
    config.headers["X-Api-Key"] = apiKey;
  }
  return config;
});

export default axiosIntance;
