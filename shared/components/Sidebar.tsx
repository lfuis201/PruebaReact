import { useNavigate } from "react-router";
import CustomButton from "./CustomButton";

// Definir el array de objetos para los botones
const sidebarItems = [
  {
    text: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path d="M3 12l2-2 5 5L17 7l2 2-9 9L3 12z" />
      </svg>
    ),
    path: "/",
  },
  {
    text: "Products",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path d="M12 2L2 7h3v8h3v3h6v-3h3V7h3L12 2z" />
      </svg>
    ),
    path: "/products",
  },
  {
    text: "Favorites",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path d="M12 21l-8-8 3-3 5 5 5-5 3 3-8 8z" />
      </svg>
    ),
    path: "/favorites",
  },
  {
    text: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path d="M3 12l2-2 5 5L17 7l2 2-9 9L3 12z" />
      </svg>
    ),
    path: "/",
  },
  {
    text: "Products",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path d="M12 2L2 7h3v8h3v3h6v-3h3V7h3L12 2z" />
      </svg>
    ),
    path: "/products",
  },
  {
    text: "Favorites",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path d="M12 21l-8-8 3-3 5 5 5-5 3 3-8 8z" />
      </svg>
    ),
    path: "/favorites",
  },
  {
    text: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path d="M3 12l2-2 5 5L17 7l2 2-9 9L3 12z" />
      </svg>
    ),
    path: "/",
  },
  {
    text: "Products",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path d="M12 2L2 7h3v8h3v3h6v-3h3V7h3L12 2z" />
      </svg>
    ),
    path: "/products",
  },
  {
    text: "Favorites",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path d="M12 21l-8-8 3-3 5 5 5-5 3 3-8 8z" />
      </svg>
    ),
    path: "/favorites",
  },
  {
    text: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path d="M3 12l2-2 5 5L17 7l2 2-9 9L3 12z" />
      </svg>
    ),
    path: "/",
  },
  {
    text: "Products",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path d="M12 2L2 7h3v8h3v3h6v-3h3V7h3L12 2z" />
      </svg>
    ),
    path: "/products",
  },
  {
    text: "Favorites",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path d="M12 21l-8-8 3-3 5 5 5-5 3 3-8 8z" />
      </svg>
    ),
    path: "/favorites",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  // Función para manejar la navegación
  const handleNavigation = (path: string) => {
    navigate(path); // Navegar a la ruta deseada
  };

  return (
    <aside className="w-64 bg-white border-r border-zinc-200">
      <nav className="p-4">
        <ul>
          {/* Iterar sobre el array sidebarItems para renderizar los botones dinámicamente */}
          {sidebarItems.map((item, index) => (
            <li key={index} className="py-2">
              <CustomButton
                icon={item.icon}
                text={item.text}
                onClick={() => handleNavigation(item.path)}
                className="text-gray-600 text-lg rounded-lg flex items-center justify-center p-4 space-x-2 bg-white hover:bg-blue-600 hover:text-white transition-colors duration-200"
                />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
