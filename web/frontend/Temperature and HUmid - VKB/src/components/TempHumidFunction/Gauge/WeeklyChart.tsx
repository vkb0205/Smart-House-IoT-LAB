import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { day: "Mon", temp: 90 },
  { day: "Tue", temp: 80 },
  { day: "Wed", temp: 78 },
  { day: "Thu", temp: 15 },
  { day: "Fri", temp: 20 },
  { day: "Sat", temp: 75 },
  { day: "Sun", temp: 35 },
];

const WeeklyChart = () => (
  <div className="bg-white rounded-xl p-4 shadow-md">
    <h3 className="text-md font-semibold mb-2">Weekly Average Temperature</h3>
    <BarChart width={300} height={150} data={data}>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="temp" fill="#4ade80" />
    </BarChart>
  </div>
);

export default WeeklyChart;
