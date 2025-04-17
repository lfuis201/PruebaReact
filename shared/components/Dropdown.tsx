import { useState, useRef, useEffect } from "react";
import NotificationItem from "./NotificationItem";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cierra el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative ml-4" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="text-muted-foreground hover:text-foreground "
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 9l6 6 6-6"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-4 w-96 bg-white p-4 rounded-lg shadow-md z-50">
          <h2 className="text-lg font-semibold mb-4">Notification</h2>
          <div className="space-y-3">
            <NotificationItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"
                  />
                </svg>
              }
              title="Settings"
              description="Update Dashboard"
              bgColor="bg-blue-300 hover:bg-blue-200"
            />
            <NotificationItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25.846153846153847"
                  viewBox="0 0 1664 1792"
                >
                  <path
                    fill="#ffffff"
                    d="M128 1664h288v-288H128zm352 0h320v-288H480zm-352-352h288V992H128zm352 0h320V992H480zM128 928h288V640H128zm736 736h320v-288H864zM480 928h320V640H480zm768 736h288v-288h-288zm-384-352h320V992H864zM512 448V160q0-13-9.5-22.5T480 128h-64q-13 0-22.5 9.5T384 160v288q0 13 9.5 22.5T416 480h64q13 0 22.5-9.5T512 448m736 864h288V992h-288zM864 928h320V640H864zm384 0h288V640h-288zm32-480V160q0-13-9.5-22.5T1248 128h-64q-13 0-22.5 9.5T1152 160v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5m384-64v1280q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V384q0-52 38-90t90-38h128v-96q0-66 47-113T416 0h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90"
                  />
                </svg>
              }
              title="Event Update"
              description="An event date update again"
              bgColor="bg-pink-300 hover:bg-blue-200"
            />
            <NotificationItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    fill-rule="evenodd"
                    d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z"
                    clip-rule="evenodd"
                  />
                </svg>
              }
              title="Profile"
              description="Update your Profile"
              bgColor="bg-purple-400"
            />
            <NotificationItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M256 80c-8.66 0-16.58 7.36-16 16l8 216a8 8 0 0 0 8 8h0a8 8 0 0 0 8-8l8-216c.58-8.64-7.34-16-16-16"
                  />
                  <circle
                    cx="256"
                    cy="416"
                    r="16"
                    fill="none"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                </svg>
              }
              title="Application Error"
              description="Check ypur runing application"
              bgColor="bg-orange-300"
            />
          </div>
          <button className="mt-4 w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg">
            See all notifications
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
