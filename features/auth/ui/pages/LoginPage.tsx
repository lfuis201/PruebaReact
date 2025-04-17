// features/auth/ui/pages/LoginPage.tsx
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "shared/context/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth(); // <--- 🔥 trae el login desde el contexto
  const [error, setError] = useState("");


  const handleLogin = async (email: string, password: string) => {
    try {
      await login(email, password); // <-- 🔥 Ya se encarga de setUser, localStorage, etc.
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Error al iniciar sesión");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="hidden md:flex flex-1 bg-gradient-to-b from-blue-500 to-blue-800 text-white flex-col justify-center items-center p-10">
      <div className="w-full max-w-sm text-left">
          <h1 className="text-4xl font-bold text-left">GoFinance</h1>
          <p className="mt-2 text-lg text-left mb-6">
            The most popular peer to peer lending at SEA
          </p>

          <a
          href="#"
          className=" bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500"
        >
          Read More
        </a>

        </div>

      
      </div>

      <div className="flex-1 bg-white flex flex-col justify-center items-center p-10">
        <div className="w-full max-w-sm text-left mb-4">
          <h2 className="text-2xl font-semibold text-black">Hello Again!</h2>
          <p className="text-zinc-600">Welcome Back</p>
        </div>

        <LoginForm onSubmit={handleLogin} />

        {error && <p className="text-red-600 mt-2">{error}</p>}


      </div>
    </div>
  );
}
