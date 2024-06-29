// components/TokenomicsChart.tsx
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TokenomicsChart = () => {
  const data = {
    labels: [
      "Presale",
      "Liquidity",
      "Founders, Developers & Incentivising Team/Maintaining Project",
      "Marketing & Treasury, Collaboration",
      "Airdrops",
      "CEX",
      "Trading Pools ROI",
      "Rewards",
    ],
    datasets: [
      {
        label: "Tokenomics",
        data: [40, 20, 10, 10, 5, 5, 5, 5],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FD7F20",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FFCD56",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FD7F20",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FFCD56",
        ],
      },
    ],
  };

  return <Pie data={data} />;
};

export default TokenomicsChart;
