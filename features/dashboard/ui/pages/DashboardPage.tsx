import Navbar from "shared/components/Navbar";
import Sidebar from "shared/components/Sidebar";
import StatsCard from "../components/StatsCard";
import SalesChart from "../components/SalesChart";

const DashboardPage = () => {
  return (
    <div>
      {/* Navbar en la parte superior */}
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 bg-zinc-100">
          <header className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Dashboard</h2>
           
          </header>

          {/* Estadísticas */}
          {/* ✅ Cards de estadísticas */}
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
                  className="w-10 h-10 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
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
                  className="w-10 h-10 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm0-2c1.66 0 3-1.34 3-3S8.66 10 7 10s-3 1.34-3 3 1.34 3 3 3zm10 2c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zm0-2c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" />
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
                  className="w-10 h-10 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4v1h-1.5c-1.66 0-3 1.34-3 3h2c0-.55.45-1 1-1H12v4h-1c-.55 0-1 .45-1 1h-2c0 1.66 1.34 3 3 3H12v1h2v-1h1c1.66 0 3-1.34 3-3h-2c0 .55-.45 1-1 1h-1v-4h1c.55 0 1 .45 1 1h2c0-1.66-1.34-3-3-3h-1V4h-2z" />
                </svg>
              }
            />
         
          </div>
          {/* Gráfico de ventas */}
          <SalesChart />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
