import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bar, Radar } from "react-chartjs-2";
import { useState, useEffect } from "react";

import { radarData, barData } from "@/lib/data";

export default function Charts({ data = null }) {
  const [animatedRadarData, setAnimatedRadarData] = useState({
    labels: [],
    datasets: [],
  });

  const [animatedBarData, setAnimatedBarData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    // If no data provided, use default data
    const chartData = data || {
      radar: radarData,
      bar: barData,
    };

    // Animate radar chart
    const radarAnimation = {
      labels: chartData.radar.labels,
      datasets: chartData.radar.datasets.map((dataset) => ({
        ...dataset,
        data: new Array(dataset.data.length).fill(0),
      })),
    };

    // Animate bar chart
    const barAnimation = {
      labels: chartData.bar.labels,
      datasets: [
        {
          ...chartData.bar.datasets[0],
          data: new Array(chartData.bar.datasets[0].data.length).fill(0),
        },
      ],
    };

    setAnimatedRadarData(radarAnimation);
    setAnimatedBarData(barAnimation);

    // Animate over 3 seconds
    const startTime = Date.now();
    const duration = 3000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Update radar data
      setAnimatedRadarData({
        labels: chartData.radar.labels,
        datasets: chartData.radar.datasets.map((dataset) => ({
          ...dataset,
          data: dataset.data.map((value) => value * progress),
        })),
      });

      // Update bar data
      setAnimatedBarData({
        labels: chartData.bar.labels,
        datasets: [
          {
            ...chartData.bar.datasets[0],
            data: chartData.bar.datasets[0].data.map(
              (value) => value * progress
            ),
          },
        ],
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>Crop Comparison</CardTitle>
          <CardDescription>
            Compare multiple crops across dimensions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Radar data={animatedRadarData} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Feasibility Scores</CardTitle>
          <CardDescription>Top crops ranked by AI analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <Bar data={animatedBarData} />
        </CardContent>
      </Card>
    </div>
  );
}
