import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";

export const FormFieldGrowthDuration = ({ control }) => (
  <FormField
    control={control}
    name="growthDuration"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Growth Duration (days)</FormLabel>
        <FormControl>
          <div className="flex items-center space-x-4">
            <Slider
              min={1}
              max={365}
              step={1}
              value={[field.value]}
              onValueChange={(value) => field.onChange(value[0])}
            />
            <span className="w-12 text-center">{field.value}</span>
          </div>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
