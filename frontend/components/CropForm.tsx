// components/CropForm.tsx
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
      geneticModification: "No",
      additionalNotes: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-lg"
      >
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
