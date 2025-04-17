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
  (response) => {
    // Si la respuesta es exitosa, simplemente la retornamos
    return response;
  },
  (error) => {
    // Aquí usamos el manejador de errores
    const handledError = handleApiError(error);
    // Podemos hacer algo con el mensaje de error, por ejemplo, mostrarlo al usuario
    console.error(handledError.message); // Puedes mostrar el mensaje en la UI o hacer logging

    // Devolvemos el error para que lo maneje quien hizo la solicitud
    return Promise.reject(handledError);
  }
);

export default axiosInstance;
