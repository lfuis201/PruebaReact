import Navbar from "shared/components/Navbar";
import Sidebar from "shared/components/Sidebar";
import StatsCard from "../components/StatsCard";
import SalesChart from "../components/SalesChart";

const DashboardPage = () => {
  return (
    <div className="flex flex-col h-screen max-w-screen overflow-hidden">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:block">
          <Sidebar />
        </div>

        <main className="flex-1 p-4 sm:p-6 bg-zinc-100 overflow-y-auto">
          <header className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Dashboard</h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <StatsCard
              title="Total Users"
              value="40,689"
              changeText="8.5% Up from yesterday"
              isPositive={true}
              iconBg="bg-blue-100"
              icon={
                <svg
                  className="w-10 h-10 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.02 1.97 3.45V20h6v-3.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              }
            />
            <StatsCard
              title="New Signups"
              value="2,345"
              changeText="3.1% Up from last week"
              isPositive={true}
              iconBg="bg-green-100"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#059669"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 16.008V7.99a1.98 1.98 0 0 0-1-1.717l-7-4.008a2.02 2.02 0 0 0-2 0L4 6.273c-.619.355-1 1.01-1 1.718v8.018c0 .709.381 1.363 1 1.717l7 4.008a2.02 2.02 0 0 0 2 0l7-4.008c.619-.355 1-1.01 1-1.718M12 22V12m0 0l8.73-5.04m-17.46 0L12 12"
                  />
                </svg>
              }
            />
            <StatsCard
              title="Total Orders"
              value="10,293"
              changeText="1.2% Up from last week"
              isPositive={true}
              iconBg="bg-yellow-100"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#eab308"
                    d="m16 11.78l4.24-7.33l1.73 1l-5.23 9.05l-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8z"
                  />
                </svg>
              }
            />
            <StatsCard
              title="Total Sales"
              value="$89,000"
              changeText="4.3% Down from yesterday"
              isPositive={false}
              iconBg="bg-red-100"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-red-500"
                  viewBox="0 0 224 384"
                >
                  <path
                    fill="#e11d48"
                    d="M117 169q46 11 73 32t27 61q0 32-20.5 51T143 338v46H79v-46q-34-7-55.5-28T0 256h47q4 45 64 45q31 0 44-12t13-26q0-17-13.5-30T104 211Q4 187 4 123q0-29 21-49.5T79 46V0h64v47q32 8 49.5 30t18.5 51h-47q-2-45-53-45q-27 0-42.5 11T53 123q0 15 14 25.5t50 20.5"
                  />
                </svg>
              }
            />
          </div>
          <SalesChart />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
