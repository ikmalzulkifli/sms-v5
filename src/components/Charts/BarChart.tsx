"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  LineElement,
  PointElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  data: number[];
  labels: string[];
  targetLine?: number;
  yAxisLabel?: string;
  tooltipPrefix?: string;
  tooltipSuffix?: string;
}

export function BarChart({
  data,
  labels,
  targetLine,
  yAxisLabel = "",
  tooltipPrefix = "",
  tooltipSuffix = "",
}: BarChartProps) {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        display: targetLine !== undefined,
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${tooltipPrefix}${context.parsed.y}${tooltipSuffix}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: yAxisLabel,
        },
      },
    },
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: "Value",
        data: data,
        backgroundColor: "rgba(59, 130, 246, 0.5)", // blue-500 with opacity
        borderColor: "rgb(59, 130, 246)", // blue-500
        borderWidth: 1,
      },
      targetLine !== undefined
        ? {
            label: "Target",
            data: Array(labels.length).fill(targetLine),
            type: "line" as const,
            borderColor: "rgb(234, 179, 8)", // yellow-500
            borderDash: [5, 5],
            borderWidth: 2,
            pointRadius: 0,
            fill: false,
          }
        : null,
    ].filter(Boolean),
  };

  return <Bar options={options} data={chartData} />;
} 