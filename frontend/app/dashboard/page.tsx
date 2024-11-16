"use client";
import { useState, useEffect } from "react";
import Candidates from "@/components/Candidates";
import Charts from "@/components/Charts";
import Export from "@/components/Export";
import CropForm from "@/components/CropForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/schemas/cropFormSchema";
import { toast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";

export default function PlantCropInput() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // progress bar

  // form
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

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
