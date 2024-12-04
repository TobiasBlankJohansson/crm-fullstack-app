import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getSales, saleObject } from "@/api/sales";

export function SalesChart() {
  const [salesData, setSalesData] = useState<saleObject[]>([]);

  useEffect(() => {
    async function fetchSales() {
      try {
        const data = await getSales();
        setSalesData(data);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    }
    fetchSales();
  }, []);

  const chartData = salesData.map((sale) => ({
    name: sale.name,
    amount: Number(sale.sale),
  }));

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-[1000px] mx-auto">
      <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">
        Sales Overview
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 10 }} // Adjust the font size of the tick labels
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="rgba(30, 144, 255, 0.8)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}