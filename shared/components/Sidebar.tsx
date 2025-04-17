import { useNavigate } from "react-router";
import CustomButton from "./CustomButton";

// Definir el array de secciones con sus botones
const sidebarSections = [
  {
    title: "",
    items: [
      {
        text: "Dashboard",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M9 5H8V4h1v1zm4 3h-1v1h1V8zM6 5H5v1h1V5zM5 8H4v1h1V8zm11-5.5l-.5-.5L9 7c-.06-.02-1 0-1 0c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-.92l6-5.58zm-1.59 4.09c.19.61.3 1.25.3 1.91c0 3.42-2.78 6.2-6.2 6.2c-3.42 0-6.21-2.78-6.21-6.2c0-3.42 2.78-6.2 6.2-6.2c1.2 0 2.31.34 3.27.94l.94-.94A7.459 7.459 0 0 0 8.51 1C4.36 1 1 4.36 1 8.5C1 12.64 4.36 16 8.5 16c4.14 0 7.5-3.36 7.5-7.5c0-1.03-.2-2.02-.59-2.91l-1 1z" fill="#333333"/></svg>
        ),
        path: "/",
      },
      {
        text: "Products",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#333333"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M8.557 2.75H4.682A1.93 1.93 0 0 0 2.75 4.682v3.875a1.94 1.94 0 0 0 1.932 1.942h3.875a1.94 1.94 0 0 0 1.942-1.942V4.682A1.94 1.94 0 0 0 8.557 2.75m10.761 0h-3.875a1.94 1.94 0 0 0-1.942 1.932v3.875a1.943 1.943 0 0 0 1.942 1.942h3.875a1.94 1.94 0 0 0 1.932-1.942V4.682a1.93 1.93 0 0 0-1.932-1.932m0 10.75h-3.875a1.94 1.94 0 0 0-1.942 1.933v3.875a1.94 1.94 0 0 0 1.942 1.942h3.875a1.94 1.94 0 0 0 1.932-1.942v-3.875a1.93 1.93 0 0 0-1.932-1.932M8.557 13.5H4.682a1.943 1.943 0 0 0-1.932 1.943v3.875a1.93 1.93 0 0 0 1.932 1.932h3.875a1.94 1.94 0 0 0 1.942-1.932v-3.875a1.94 1.94 0 0 0-1.942-1.942"
            />
          </svg>
        ),
        path: "/products",
      },
      {
        text: "Favorites",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#333333"
              d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7zm0-2.7q2.4-2.15 3.95-3.687t2.45-2.675t1.25-2.026T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662T12.95 7h-1.9q-.375-1.025-1.375-1.687T7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025t2.45 2.675T12 18.3m0-6.825"
            />
          </svg>
        ),
        path: "/favorites",
      },
      {
        text: "Inbox",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="-2 -2.5 24 24"
          >
            <path
              fill="#333333"
              d="M3.656 17.979A1 1 0 0 1 2 17.243V15a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8.003zm.844-3.093a.54.54 0 0 0 .26-.069l2.355-1.638A1 1 0 0 1 7.686 13H12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5c0 .54.429.982 1 1c.41.016.707.083.844.226c.128.134.135.36.156.79c.003.063.003.177 0 .37a.5.5 0 0 0 .5.5m11.5-4.87a7 7 0 0 0 0 .37zc.02-.43.028-.656.156-.79c.137-.143.434-.21.844-.226c.571-.018 1-.46 1-1V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5V2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2v2.243a1 1 0 0 1-1.656.736L16 13.743z"
            />
          </svg>
        ),
        path: "/favorites",
      },
      {
        text: "Order Lists",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#333333"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M11 6h10m-10 6h10m-10 6h10M3 7.393S4 8.045 4.5 9C4.5 9 6 5.25 8 4M3 18.393S4 19.045 4.5 20c0 0 1.5-3.75 3.5-5"
              color="#333333"
            />
          </svg>
        ),
        path: "/favorites",
      },
      {
        text: "Product Stock",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 32 32"
          >
            <path
              fill="#333333"
              d="M6 4v24h20V4zm2 2h16v5H8zm0 7h16v6H8zm0 8h16v5H8z"
            />
          </svg>
        ),
        path: "/favorites",
      },
    ],
  },
  {
    title: "PAGES",
    items: [
      {
        text: "Pricing",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#333333"
              d="M22 12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h3.17A3 3 0 0 1 6 5a3 3 0 0 1 3-3c1 0 1.88.5 2.43 1.24v-.01L12 4l.57-.77v.01C13.12 2.5 14 2 15 2a3 3 0 0 1 3 3a3 3 0 0 1-.17 1H21a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1M4 20h7v-8H4zm16 0v-8h-7v8zM9 4a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m6 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M3 8v2h8V8zm10 0v2h8V8z"
            />
          </svg>
        ),
        path: "/inbox",
      },
      {
        text: "Calendar",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#333333"
              d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"
            />
            <path
              fill="#333333"
              d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2M19 8l.001 12H5V8z"
            />
          </svg>
        ),
        path: "/order-lists",
      },
      {
        text: "To-Do",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 16 16"
          >
            <path
              fill="#333333"
              fill-rule="evenodd"
              d="M3 13.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.25a.75.75 0 0 0 0-1.5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5zm12.78-8.82a.75.75 0 0 0-1.06-1.06L9.162 9.177L7.289 7.241a.75.75 0 1 0-1.078 1.043l2.403 2.484a.75.75 0 0 0 1.07.01z"
              clip-rule="evenodd"
            />
          </svg>
        ),
        path: "/product-stock",
      },
      {
        text: "Contact",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#333333"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 20c0-1.742-1.67-3.223-4-3.773M15 20c0-2.21-2.686-4-6-4s-6 1.79-6 4m12-7a4 4 0 0 0 0-8m-6 8a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
            />
          </svg>
        ),
        path: "/product-stock",
      },
    ],
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  // Función para manejar la navegación
  const handleNavigation = (path: string) => {
    navigate(path); // Navegar a la ruta deseada
  };

  return (
    <aside className="w-64 bg-white border-r border-zinc-200 max-h-screen overflow-y-auto">
      <nav className="p-4">
        {/* Iterar sobre las secciones */}
        {sidebarSections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className={`${
              sectionIndex < sidebarSections.length - 1
                ? "mb-6 pb-6 border-b border-gray-200"
                : "mb-6"
            }`}
          >
            {/* Título de la sección */}
            <h3 className="text-lg font-semibold text-gray-800 mb-4 ml-8">
              {section.title}
            </h3>

            {/* Iterar sobre los elementos de cada sección */}
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="py-2">
                  <CustomButton
                    icon={item.icon}
                    text={item.text}
                    onClick={() => handleNavigation(item.path)}
                    className="text-gray-600 text-lg rounded-lg  p-4 space-x-2 bg-white hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
