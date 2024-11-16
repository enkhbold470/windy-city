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
// import { Spinner } from "@/components/ui/spinner"; // Assuming you have a Spinner component

export default function PlantCropInput() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsLoading(true); // Set loading to true on submit
    toast({
      title: "Crop data submitted",
      description: "Your crop data has been sent for evaluation.",
    });
    setIsSubmitted(true);
    setIsLoading(false); // Reset loading after submission
  }

  return (
    <div className="space-y-8 mx-20">
      <div className="flex justify-between">
        <CropForm onSubmit={onSubmit} />
        <CropForm onSubmit={onSubmit} />
      </div>
      {isLoading ? ( // Show loading animation while loading
        <div className="flex justify-center">
          {/* <Spinner /> Loading spinner component */}
        </div>
      ) : (
        isSubmitted && (
          <>
            <Candidates />
            <Charts />
            <Export />
          </>
        )
      )}
    </div>
  );
}
