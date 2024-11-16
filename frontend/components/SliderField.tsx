// components/SliderField.tsx
import { Slider } from "@/components/ui/slider";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control } from "react-hook-form";
import type { z } from "zod";
import { formSchema } from "@/schemas/cropFormSchema";

interface SliderFieldProps {
  control: Control<z.infer<typeof formSchema>>;
  name: string;
  label: string;
  min: number;
  max: number;
  step: number;
  icon?: React.ReactNode;
  suffix?: string;
  description?: string;
}

export function SliderField({
  control,
  name,
  label,
  min,
  max,
  step,
  icon,
  suffix,
  description,
}: SliderFieldProps) {
  return (
    <FormField
      control={control}
      name={
        name as
          | "cropName"
          | "cropType"
          | "growthDuration"
          | "waterRequirement"
          | "temperatureRange"
          | "sunlightRequirement"
          | "windResistance"
          | "geneticModification"
          | "additionalNotes"
          | "temperatureRange.min"
          | "temperatureRange.max"
      }
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="flex items-center space-x-4">
              {icon}
              <Slider
                min={min}
                max={max}
                step={step}
                value={[Number(field.value) || min]}
                onValueChange={(value) => field.onChange(value[0])}
              />
              <span className="w-12 text-center">
                {Number(field.value) || min}
                {suffix}
              </span>
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
