"use client";

interface ChartProps {
  data: number[];
  labels: string[];
}

export function LineChart({ data, labels }: ChartProps) {
  // Implement line chart using your preferred charting library
  return <div>Line Chart Implementation</div>;
}

export function BarChart({ data, labels }: ChartProps) {
  // Implement bar chart using your preferred charting library
  return <div>Bar Chart Implementation</div>;
} 