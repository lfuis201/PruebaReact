// src/components/SalesChart.tsx
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Registrar los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesChart = () => {
  // Definimos los datos para el gráfico
  const data = {
    labels: [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ], // Meses
    datasets: [
      {
        label: "Total Sales",
        data: [
          5000, 6000, 8000, 7000, 9500, 12000,
          11000, 11500, 12000, 13000, 14000, 15000,
          
        ], // Ventas de cada mes
        borderColor: "rgba(38, 113, 255, 1)", // Color azul para la línea
        backgroundColor: "rgba(38, 113, 255, 0.2)", // Color azul claro para el área debajo de la línea
        fill: true, // Relleno debajo de la línea
        tension: 0, // Línea recta (sin curvatura)
      },
    ],
  };

  // Definimos las opciones del gráfico
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Sales Trend",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `$${tooltipItem.raw.toLocaleString()}`; // Formato de ventas
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Comienza en cero
        ticks: {
          callback: function (value: any) {
            return `$${value.toLocaleString()}`; // Formato de número con $
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Sales Details</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesChart;
