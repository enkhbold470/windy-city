"use client";
import { useState } from "react";
import { Bar, Radar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { Search, Download, MessageSquare } from "lucide-react";

ChartJS.register(...registerables);

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data for demonstration
const topCrops = [
  {
    name: "Cotton",
    score: 0.95,
    marketValue: "High",
    esgImpact: "Medium",
    technicalComplexity: "Low",
  },
  {
    name: "Soybean",
    score: 0.92,
    marketValue: "High",
    esgImpact: "High",
    technicalComplexity: "Medium",
  },
  {
    name: "Rice",
    score: 0.88,
    marketValue: "Medium",
    esgImpact: "Medium",
    technicalComplexity: "High",
  },
  {
    name: "Wheat",
    score: 0.85,
    marketValue: "Medium",
    esgImpact: "Low",
    technicalComplexity: "Medium",
  },
  {
    name: "Corn",
    score: 0.82,
    marketValue: "High",
    esgImpact: "Medium",
    technicalComplexity: "Low",
  },
];

const radarData = {
  labels: ["Technical", "Market", "ESG", "Regulatory"],
  datasets: [
    {
      label: "Cotton",
      data: [0.9, 0.8, 0.7, 0.85],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Soybean",
      data: [0.85, 0.9, 0.8, 0.7],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

const barData = {
  labels: ["Cotton", "Soybean", "Rice", "Wheat", "Corn"],
  datasets: [
    {
      label: "Feasibility Score",
      data: [0.95, 0.92, 0.88, 0.85, 0.82],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="relative w-1/3">
            <Input
              type="search"
              placeholder="Search crops..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <div className="flex gap-4">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> Export Data
            </Button>
            <Button>
              <MessageSquare className="mr-2 h-4 w-4" /> AI Assistant
            </Button>
          </div>
        </div>

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

        <Card>
          <CardHeader>
            <CardTitle>Key Crop Candidates</CardTitle>
            <CardDescription>Top crops ranked by the AI model</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Crop Name</TableHead>
                  <TableHead>Feasibility Score</TableHead>
                  <TableHead>Market Value</TableHead>
                  <TableHead>ESG Impact</TableHead>
                  <TableHead>Technical Complexity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topCrops.map((crop) => (
                  <TableRow key={crop.name}>
                    <TableCell className="font-medium">{crop.name}</TableCell>
                    <TableCell>{crop.score.toFixed(2)}</TableCell>
                    <TableCell>{crop.marketValue}</TableCell>
                    <TableCell>{crop.esgImpact}</TableCell>
                    <TableCell>{crop.technicalComplexity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
