
type InputProps = {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "password" | "email";
  placeholder: string;
  icon?: React.ReactNode; // Icono opcional
};

const CustomInput = ({ value, onChange, type, placeholder, icon }: InputProps) => {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-4 top-5 text-gray-400">{icon}</div> // Coloca el icono
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="border border-zinc-300 text-black rounded-full p-4 pl-10 w-full" // Añadimos el padding extra a la izquierda
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
