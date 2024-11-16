"use client";
import { useState } from "react";
import Candidates from "@/components/Candidates";
import Charts from "@/components/Charts";
import Export from "@/components/Export";
import CropForm from "@/components/CropForm";
import type { z } from "zod";
import { formSchema } from "@/schemas/cropFormSchema";
import { toast } from "@/hooks/use-toast";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { loadingStates } from "@/lib/data";
import { motion } from "framer-motion";

export default function PlantCropInput() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setLoading(true);
    toast({
      title: "Crop data submitted",
      description: "Your crop data has been sent for evaluation.",
    });
    setIsSubmitted(true);
  }

  return (
    <div className="space-y-8 mx-20">

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
      {(isSubmitted && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >

            <Candidates />
            <Charts />
            <Export />
          </motion.div>
        </>
      )) || (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex justify-between"
        >
          <CropForm onSubmit={onSubmit} />
          <CropForm onSubmit={onSubmit} />
        </motion.div>
      )}
    </div>
  );
}
