// domain/usecases/loginUser.ts
import type { AuthResponse } from "../entities/AuthResponse";

export const loginUser = async (
  username: string,
  password: string,
  repo: { login: (username: string, password: string) => Promise<AuthResponse> }
): Promise<AuthResponse> => {
  if (!username || !password) throw new Error("Campos requeridos");
  return await repo.login(username, password);
};
