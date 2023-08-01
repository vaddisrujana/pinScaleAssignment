import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CreditDebitBarChart = () => {
  // Function to generate random credit and debit values between 0 and 500
  const generateRandomData = () => {
    const data = [];
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 6); // Get the date 7 days ago
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const credit = Math.floor(Math.random() * 501); // Random credit between 0 and 500
      const debit = Math.floor(Math.random() * 501); // Random debit between 0 and 500
      data.push({ date: date.toISOString().slice(0, 10), credit, debit });
    }
    return data;
  };

  const data = generateRandomData();

  return (
    <div>
      <h2>Last 7 Days Credit Debit Totals</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="credit" type="number" domain={[0, 500]} />
        <YAxis dataKey="date" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="credit" fill="#8884d8" name="Credit" />
        <Bar dataKey="debit" fill="#82ca9d" name="Debit" />
      </BarChart>
    </div>
  );
};

export default CreditDebitBarChart;
