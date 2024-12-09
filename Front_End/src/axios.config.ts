// src/api/axiosConfig.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/", // Substitua pela URL do backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
