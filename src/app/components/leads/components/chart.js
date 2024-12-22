import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Won 18m", value: 32, color: "#4caf50" },
  { name: "Committed $8m", value: 20, color: "#2196f3" },
  { name: "Qualified $3m", value: 8, color: "#e91e63" },
  { name: "Best case $7m", value: 8, color: " #FBC02D" },
  { name: "Leads $75m", value: 32, color: "#9e9e9e" },
];

const Chart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius="80%"
        isAnimationActive={true}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
);

export default Chart;
