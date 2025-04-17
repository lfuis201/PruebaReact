export const handleApiError = (error: any) => {
    if (error.response) {
      // Error de la respuesta de la API
      switch (error.response.status) {
        case 400:
          return { message: "Petición incorrecta. Revise los datos enviados." };
        case 401:
          return { message: "No autorizado. Token inválido o expirado." };
        case 404:
          return { message: "Recurso no encontrado." };
        case 500:
          return { message: "Error en el servidor. Intente más tarde." };
        default:
          return { message: "Ocurrió un error inesperado." };
      }
    } else if (error.request) {
      // Error de la solicitud, probablemente no hay respuesta del servidor
      return { message: "No se pudo conectar con el servidor. Intente más tarde." };
    } else {
      // Otro tipo de error
      return { message: `Error: ${error.message}` };
    }
  };
  