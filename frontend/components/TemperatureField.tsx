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

interface TemperatureFieldProps {
  control: any;
  name: string;
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
