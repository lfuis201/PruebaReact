import type { AuthResponse } from "features/auth/domain/entities/AuthResponse";
import type { User } from "features/auth/domain/entities/User";
import { loginUser } from "features/auth/domain/usecases/loginUser";
import { authRepository } from "features/auth/infra/authRepository";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    const response: AuthResponse = await loginUser(username, password, authRepository);
    const userData: User = {
      name: `${response.firstName} ${response.lastName}`,
      email: response.email,
      avatarUrl: response.image,
    };
    setUser(userData);
  };

  const logout = () => {
    authRepository.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
