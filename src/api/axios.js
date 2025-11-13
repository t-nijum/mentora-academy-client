// src/api/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://mentora-academy-server.vercel.app",
});

export default axiosInstance;
