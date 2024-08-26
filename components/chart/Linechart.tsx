import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

type LineChartComponentProps = {
  data: { x: string; y: number }[];
}

export default function  LineChartComponent  ({ data }: LineChartComponentProps)  {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip
          formatter={(value: number, name: string, props: any) => {
            const xValue = props.payload.x;
            return [`${xValue}: ${value}`, name];
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="y"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

