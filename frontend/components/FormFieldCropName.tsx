import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const FormFieldCropName = ({ control }) => (
  <FormField
    control={control}
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
);
