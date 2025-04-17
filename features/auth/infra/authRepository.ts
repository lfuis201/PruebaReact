// src/features/auth/infra/authRepository.ts
import type { AuthPayload } from "../domain/entities/AuthPayload";
import type { AuthResponse } from "../domain/entities/AuthResponse";
import { authApi } from "./api";

// El repositorio maneja la persistencia de datos
export const authRepository = {
  // Función para hacer login
  login: async (username: string, password: string): Promise<AuthResponse> => {
    // Creamos el payload de acuerdo a la interfaz AuthPayload
    const payload: AuthPayload = {
      username,
      password,
      expiresInMins: 30, // O puedes pasarlo como un argumento si lo necesitas
    };

    // Llamamos al API para obtener la respuesta cruda
    const response: AuthResponse = await authApi.login(payload);

    // Guardamos el token y la información del usuario en localStorage
    localStorage.setItem("token", response.accessToken);
    localStorage.setItem("user", JSON.stringify({
      id: response.id,
      name: `${response.firstName} ${response.lastName}`,
      email: response.email,
      avatarUrl: response.image,
    }));

    // Retornamos la respuesta cruda de la API
    return response;
  },

  // Función para hacer logout
  logout: () => {
    // Borrar el token y la información del usuario de localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    console.log("Usuario desconectado con éxito");
  },
};
