// src/shared/api/errorHandler.ts
export function handleApiError(error: any): Error {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        return new Error("Petición incorrecta. Revise los datos enviados.");
      case 401:
        return new Error("No autorizado. Token inválido o expirado.");
      case 404:
        return new Error("Recurso no encontrado.");
      case 500:
        return new Error("Error en el servidor. Intente más tarde.");
      default:
        return new Error("Ocurrió un error inesperado.");
    }
  } else if (error.request) {
    return new Error("No se pudo conectar con el servidor. Intente más tarde.");
  } else {
    return new Error(`Error: ${error.message}`);
  }
}
