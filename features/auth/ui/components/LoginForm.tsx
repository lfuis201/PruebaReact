// features/auth/ui/components/LoginForm.tsx
import { useState } from "react";
import CustomInput from "shared/components/CustomInput";

type Props = {
  onSubmit: (email: string, password: string) => void;
};

export default function LoginForm({ onSubmit }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className="w-full max-w-sm mt-6"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(email, password);
      }}
    >
      <div className="mb-4">
        <CustomInput
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 24 24"
            >
              <path
                fill="#cccccc"
                d="m16.484 11.976l6.151-5.344v10.627zm-7.926.905l2.16 1.875c.339.288.781.462 1.264.462h.017h-.001h.014c.484 0 .926-.175 1.269-.465l-.003.002l2.16-1.875l6.566 5.639H1.995zM1.986 5.365h20.03l-9.621 8.356a.6.6 0 0 1-.38.132h-.014h.001h-.014a.6.6 0 0 1-.381-.133l.001.001zm-.621 1.266l6.15 5.344l-6.15 5.28zm21.6-2.441c-.24-.12-.522-.19-.821-.19H1.859a1.9 1.9 0 0 0-.835.197l.011-.005A1.86 1.86 0 0 0 0 5.855v12.172a1.86 1.86 0 0 0 1.858 1.858h20.283a1.86 1.86 0 0 0 1.858-1.858V5.855c0-.727-.419-1.357-1.029-1.66l-.011-.005z"
              />
            </svg>
          }
        />
      </div>
      <div className="mb-4">
        <CustomInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"

              viewBox="0 0 1152 1408"
            >
              <path
                fill="#cccccc"
                d="M320 640h512V448q0-106-75-181t-181-75t-181 75t-75 181zm832 96v576q0 40-28 68t-68 28H96q-40 0-68-28t-28-68V736q0-40 28-68t68-28h32V448q0-184 132-316T576 0t316 132t132 316v192h32q40 0 68 28t28 68"
              />
            </svg>
          }
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white p-4 rounded-full w-full hover:bg-blue-500"
      >
        Login
      </button>
      <p className="mt-4 text-center text-zinc-600">
        <a href="#" className=" hover:underline">
          Forgot Password?
        </a>
      </p>
    </form>
  );
}
