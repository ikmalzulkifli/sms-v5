"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface LineChartProps {
  data: number[];
  labels: string[];
  targetLine?: number;
  yAxisLabel?: string;
  tooltipPrefix?: string;
  tooltipSuffix?: string;
}

export function LineChart({
  data,
  labels,
  targetLine,
  yAxisLabel = "",
  tooltipPrefix = "",
  tooltipSuffix = "",
}: LineChartProps) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: targetLine !== undefined,
        position: "top" as const,
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "black",
        bodyColor: "black",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: (context: any) => {
            return `${tooltipPrefix}${context.parsed.y}${tooltipSuffix}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: false,
        grid: {
          color: "#e5e7eb",
        },
        ticks: {
          font: {
            size: 12,
          },
          callback: (value: number) => `${value}${yAxisLabel}`,
        },
      },
    },
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: "Actual",
        data: data,
        borderColor: "rgb(59, 130, 246)", // blue-500
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        fill: true,
      },
      targetLine !== undefined
        ? {
            label: "Target",
            data: Array(labels.length).fill(targetLine),
            borderColor: "rgb(234, 179, 8)", // yellow-500
            borderDash: [5, 5],
            borderWidth: 2,
            pointRadius: 0,
            fill: false,
          }
        : null,
    ].filter(Boolean),
  };

  return <Line options={options} data={chartData} />;
} 