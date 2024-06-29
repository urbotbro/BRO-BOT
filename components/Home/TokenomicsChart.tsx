import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartTypeRegistry, Chart } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const centerTextPlugin = {
  id: 'centerText',
  beforeDraw: function (chart: Chart<keyof ChartTypeRegistry>) {
    const ctx = chart.ctx;
    const width = chart.width;
    const height = chart.height;
    const centerX = width / 2;
    const centerY = height / 2;

    ctx.restore();
    const fontSize = (height / 220).toFixed(2);
    ctx.font = `${fontSize}em sans-serif`;
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgb(253, 160, 7)";

    const text = "$BRO";
    const textX = centerX - width / 2.8; 
    const textY = centerY;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }
};

ChartJS.register(centerTextPlugin);

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

  const options = {
    plugins: {
      legend: {
        position: 'right' as const, 
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default TokenomicsChart;
