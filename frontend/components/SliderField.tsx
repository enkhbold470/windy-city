// components/SliderField.tsx
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
import { Progress } from "@/components/ui/progress";

interface SliderFieldProps {
  control: Control<z.infer<typeof formSchema>>;
  name: string;
  label: string;
  min: number;
  max?: number;
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
  icon,
  suffix,
  description,
}: SliderFieldProps) {
  return (
    <FormField
      control={control}
      name={name as keyof z.infer<typeof formSchema>}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="flex items-center space-x-4">
              {icon}
              <Progress value={(Number(field.value) / (max || 100)) * 100} />
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
