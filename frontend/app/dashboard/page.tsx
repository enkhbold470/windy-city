"use client";
import { useState } from "react";
import Charts from "@/components/Charts";
import CropForm from "@/components/CropForm";
import { formSchema } from "@/schemas/cropFormSchema";
import { toast } from "@/hooks/use-toast";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { loadingStates } from "@/lib/data";
import { motion } from "framer-motion";
import type { z } from "zod";

// Define types for API response
interface CropData {
  crop_name: string;
  technical_score: number;
  market_score: number;
  esg_score: number;
  regulatory_score: number;
  predicted_feasibility: number;
}

interface ApiResponse {
  crops: CropData[];
}

// Define types for the chart data
interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}

interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

interface CombinedChartData {
  radar: ChartData;
  bar: ChartData;
}

export default function PlantCropInput() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState<CombinedChartData | null>(null);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: ApiResponse = await response.json();
      setChartData({
        radar: {
          labels: ["Technical", "Market", "ESG", "Regulatory"],
          datasets: data.crops.map((crop: CropData) => ({
            label: crop.crop_name,
            data: [
              crop.technical_score,
              crop.market_score,
              crop.esg_score,
              crop.regulatory_score,
            ],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          })),
        },
        bar: {
          labels: data.crops.map((crop: CropData) => crop.crop_name),
          datasets: [
            {
              label: "Feasibility Score",
              data: data.crops.map(
                (crop: CropData) => crop.predicted_feasibility
              ),
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
      });

      toast({
        title: "Crop data submitted",
        description: "Your crop data has been sent for evaluation.",
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to submit crop data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="my-5 py-8 mx-20 gap-4">
      <Loader
        loadingStates={loadingStates}
        loading={loading}
        duration={200}
        loop={false}
      />
      {loading && (
        <button
          className="animate fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          Done
        </button>
      )}
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Charts
            data={
              chartData || {
                radar: { labels: [], datasets: [] },
                bar: { labels: [], datasets: [] },
              }
            }
          />
        </motion.div>
      ) : (
        <CropForm onSubmit={onSubmit} />
      )}
    </div>
  );
}
