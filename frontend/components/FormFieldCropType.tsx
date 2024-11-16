import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export const FormFieldCropType = ({ control }) => (
  <FormField
    control={control}
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
            <SelectItem value="Grain">Grain</SelectItem>
            <SelectItem value="Fruit">Fruit</SelectItem>
            <SelectItem value="Vegetable">Vegetable</SelectItem>
            <SelectItem value="Fiber">Fiber</SelectItem>
            <SelectItem value="Oil">Oil</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />
);
