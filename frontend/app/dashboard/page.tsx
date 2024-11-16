"use client";
import { useState } from "react";
import Candidates from "@/components/Candidates";
import Charts from "@/components/Charts";
import Export from "@/components/Export";
import CropForm from "@/components/CropForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/schemas/cropFormSchema";
import { toast } from "@/hooks/use-toast";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { loadingStates } from "@/lib/data";
export default function PlantCropInput() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // progress bar

  const [loading, setLoading] = useState(false);
  // form
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

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
      <div className="flex justify-between">
        <CropForm onSubmit={onSubmit} />
        <CropForm onSubmit={onSubmit} />
      </div>
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
      {isSubmitted && (
        <>
          <Candidates />
          <Charts />
          <Export />
        </>
      )}
    </div>
  );
}
