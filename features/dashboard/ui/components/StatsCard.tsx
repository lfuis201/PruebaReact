
type StatsCardProps = {
    title: string;
    value: string;
    icon: React.ReactNode;
    iconBg?: string; // Nueva prop para color de fondo del ícono
    changeText: string;
    isPositive?: boolean;
  };
  

const StatsCard = ({
    title,
    value,
    icon,
    iconBg = "bg-blue-100", // Valor por defecto
    changeText,
    isPositive = true,
}: StatsCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-500 text-sm mb-8">{title}</h2>
          <p className="text-3xl font-bold mb-10">{value}</p>
        </div>
        <div className={`${iconBg} p-3 rounded-3xl flex items-center justify-center `}>
          {icon}
        </div>
      </div>
      <div className="mt-2 flex items-center">
        <svg
          className={`w-4 h-4 mr-1 ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d={
              isPositive
                ? "M12 2l-10 10h3v8h14v-8h3z" // Flecha hacia arriba
                : "M12 22l10-10h-3V4H5v8H2z" // Flecha hacia abajo
            }
          />
        </svg>
        <span className="text-sm text-gray-600">{changeText}</span>
      </div>
    </div>
  );
};

export default StatsCard;
