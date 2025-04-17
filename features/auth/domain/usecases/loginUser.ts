// domain/usecases/loginUser.ts
import type { User } from "../entities/User";

export const loginUser = async (
  username: string,
  password: string,
  repo: { login: (username: string, password: string) => Promise<User> }
): Promise<User> => {
  if (!username || !password) throw new Error("Campos requeridos");
  return await repo.login(username, password);
};
