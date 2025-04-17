// src/features/auth/infra/api.ts
import axiosInstance from "shared/api/axiosInstance";
import type { AuthPayload } from "../domain/entities/AuthPayload";

export const authApi = {
  login: async (payload: AuthPayload) => {
    const response = await axiosInstance.post("/auth/login", payload);

    // Aquí solo retornamos los datos crudos tal como los recibe desde el backend
    return response.data;
  },
};
