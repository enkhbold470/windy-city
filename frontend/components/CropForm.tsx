// components/CropForm.tsx
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Droplet, Sun, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { z } from "zod"; // Import z as a type
import { formSchema } from "../schemas/cropFormSchema";
import { SliderField } from "./SliderField";
import { TemperatureField } from "./TemperatureField";

export default function CropForm({
  onSubmit,
}: {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cropName: "",
      cropType: "Grain",
      growthDuration: 90,
      waterRequirement: 50,
      temperatureRange: { min: 10, max: 30 },
      sunlightRequirement: 8,
      windResistance: 5,
      geneticModification: "No",
      additionalNotes: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Basic Information */}
        <FormField
          control={form.control}
          name="cropName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Crop Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter crop name" {...field} />
              </FormControl>
              <FormDescription>
                Enter the scientific or common name of the crop.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cropType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Crop Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {["Grain", "Fruit", "Vegetable", "Fiber", "Oil", "Other"].map(
                    (type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
              <FormDescription>
                Select the category of the crop.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Growth and Environmental Requirements */}
        <SliderField
          control={form.control}
          name="growthDuration"
          label="Growth Duration (days)"
          min={1}
          max={365}
          step={1}
          description="Estimated number of days from planting to harvest."
        />

        <SliderField
          control={form.control}
          name="waterRequirement"
          label="Water Requirement"
          min={0}
          max={100}
          step={1}
          icon={<Droplet className="h-4 w-4 text-blue-500" />}
          suffix="%"
          description="Relative water requirement (0% - very low, 100% - very high)."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <TemperatureField
            control={form.control}
            name="temperatureRange.min"
            label="Minimum Temperature (°C)"
          />
          <TemperatureField
            control={form.control}
            name="temperatureRange.max"
            label="Maximum Temperature (°C)"
          />
        </div>

        <SliderField
          control={form.control}
          name="sunlightRequirement"
          label="Sunlight Requirement (hours/day)"
          min={0}
          max={24}
          step={0.5}
          icon={<Sun className="h-4 w-4 text-yellow-500" />}
          description="Average hours of sunlight required per day."
        />

        <SliderField
          control={form.control}
          name="windResistance"
          label="Wind Resistance"
          min={0}
          max={10}
          step={1}
          icon={<Wind className="h-4 w-4 text-gray-500" />}
          suffix="/10"
          description="Wind resistance on a scale of 0 (very low) to 10 (very high)."
        />

        {/* Additional Information */}
        <FormField
          control={form.control}
          name="geneticModification"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genetic Modification</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Is the crop genetically modified?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Indicate if the crop is genetically modified.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="additionalNotes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter any additional information about the crop"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Provide any extra details or special considerations for this
                crop (max 500 characters).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit Crop Data</Button>
      </form>
    </Form>
  );
}
