// components/TemperatureField.tsx
import { Input } from "@/components/ui/input";
import { Thermometer } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control } from "react-hook-form";
import type { z } from "zod";
import { formSchema } from "@/schemas/cropFormSchema";

interface TemperatureFieldProps {
  control: Control<z.infer<typeof formSchema>>;
  name: "temperatureRange.min" | "temperatureRange.max"; // Updated to restrict name to specific values
  label: string;
}

export function TemperatureField({
  control,
  name,
  label,
}: TemperatureFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="flex items-center space-x-4">
              <Thermometer className="h-4 w-4 text-red-500" />
              <Input
                type="number"
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
