// features/auth/ui/pages/LoginPage.tsx
import LoginForm from "../components/LoginForm";
import { loginUser } from "../../domain/usecases/loginUser";
import { useState } from "react";
import { authRepository } from "features/auth/infra/authRepository";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (email: string, password: string) => {
    try {
      const user: any = await loginUser(email, password, authRepository);
      localStorage.setItem("token", user.token);
      navigate("/dashboard");
    } catch (err: any) {
      setError("Credenciales inválidas");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-gradient-to-b from-blue-500 to-blue-800 text-white flex flex-col justify-center items-center p-10">
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

        {error && <p className="text-red-600 mt-2">{error}</p>}
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
}
