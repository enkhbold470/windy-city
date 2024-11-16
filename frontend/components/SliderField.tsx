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

interface SliderFieldProps {
  control: any;
  name: string;
  label: string;
  description?: string;
  min: number;
  max: number;
  step: number;
  icon?: React.ReactNode;
  suffix?: string;
}

export function SliderField({
  control,
  name,
  label,
  description,
  min,
  max,
  step,
  icon,
  suffix = "",
}: SliderFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
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
                value={[field.value]}
                onValueChange={(value) => field.onChange(value[0])}
              />
              <span className="w-12 text-center">
                {field.value}
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
