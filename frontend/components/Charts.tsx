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

import { radarData, barData } from "@/lib/data";

export default function Charts() {
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
          <Radar data={radarData} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Feasibility Scores</CardTitle>
          <CardDescription>Top crops ranked by AI analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <Bar data={barData} />
        </CardContent>
      </Card>
    </div>
  );
}
