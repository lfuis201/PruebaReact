
import { Navigate } from "react-router";

// Comprobar si el usuario está autenticado
export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("token");
  return !!token;
};

// El componente ProtectedRoute sirve como un guard para las rutas protegidas
export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};
