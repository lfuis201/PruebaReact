import CustomInput from "./CustomInput";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-background">
      {/* Logo */}
      <div className="flex justify-center items-center w-64">
        <span className="text-2xl font-bold text-primary">DashStack</span>
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="flex items-center ml-4">
          {/* Botón de menú */}
          <button className="p-2 text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="
              #000000"
                d="M4 6h16v2H4zm0 5h16v2H4zm16 5H4v2h16z"
              />
            </svg>
          </button>

          {/* Input de búsqueda */}
          <div className="relative ml-4">
            <CustomInput
              type="text"
              placeholder="Seacrh"
              value=""
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#cccccc"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
                  />
                </svg>
              }
            />
          </div>
        </div>

        <div className="flex items-center">
          {/* Notificaciones */}
          <div className="relative ml-4">
            <button className="p-2 text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4f46e5"
                  d="M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-7-3q-.425 0-.712-.288T4 18t.288-.712T5 17h1v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.325q-.25.5-.375 1.05T13 6q0 2.075 1.463 3.538T18 11v6h1q.425 0 .713.288T20 18t-.288.713T19 19zM18 9q-1.25 0-2.125-.875T15 6t.875-2.125T18 3t2.125.875T21 6t-.875 2.125T18 9"
                />
              </svg>
            </button>
          </div>

          {/* Selector de idioma */}
          <div className="ml-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 36 36"
            >
              <path
                fill="#00247D"
                d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"
              />
              <path
                fill="#CF1B2B"
                d="m25.14 23l9.712 6.801a4 4 0 0 0 .99-1.749L28.627 23zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943zm10-10h2.141l9.711-6.8a4 4 0 0 0-1.937-1.085L23 12.057zm-12.141 0L1.148 6.2a4 4 0 0 0-.991 1.749L7.372 13z"
              />
              <path
                fill="#EEE"
                d="M36 21H21v10h2v-5.836L31.335 31H32a4 4 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21zM36 9a3.98 3.98 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4 4 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059zM13 5v5.837L4.664 5H4a4 4 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A4 4 0 0 0 0 9v.059L5.628 13H0v2h15V5z"
              />
              <path fill="#CF1B2B" d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z" />
            </svg>
            <span className="text-muted-foreground ml-4">English</span>
            <button className="ml-4 text-muted-foreground hover:text-foreground">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </button>
          </div>

          {/* Avatar de usuario */}

          <div className="flex items-center ml-6">
            <div className="bg-blue-400 w-12 h-12 flex items-center justify-center rounded-full mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5M20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1z"
                />
              </svg>
            </div>
            <div className="flex flex-col ml-2">
              <span className="text-foreground font-semibold">Moni Roy</span>
              <span className="text-muted-foreground">Admin</span>
            </div>
            <button className="ml-4 text-muted-foreground hover:text-foreground">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
