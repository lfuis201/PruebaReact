import axios from "axios";
import { handleApiError } from "./errorHandler";

// Crear la instancia de axios
const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar el token si existe
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Si hay un error en la solicitud, retornamos el error
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de las respuestas
axiosInstance.interceptors.response.use(
  res => res,
  err => {
    // Convierte el error crudo en un Error con mensaje amigable
    const friendlyError = handleApiError(err);
    return Promise.reject(friendlyError);
  }
);
export default axiosInstance;
