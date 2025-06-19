// components/dashboard/TicketStatusChart.jsx
import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

export default function TicketStatusChart() {
  const data = [
    { name: 'Approved', value: 8 },
    { name: 'Pending', value: 5 },
    { name: 'Rejected', value: 2 },
  ];

  const COLORS = ['#4ade80', '#facc15', '#f87171']; // green, yellow, red

  return (
    <div className="bg-base-300 p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Ticket Status Summary</h2>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
