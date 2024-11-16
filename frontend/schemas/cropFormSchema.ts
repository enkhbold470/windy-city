// schemas/cropFormSchema.ts
import * as z from "zod";

export const formSchema = z.object({
  cropName: z.string().min(2, {
    message: "Crop name must be at least 2 characters.",
  }),
  cropType: z.enum(["Grain", "Fruit", "Vegetable", "Fiber", "Oil", "Other"]),
  // growthDuration: z.number().min(1).max(365),
  // waterRequirement: z.number().min(0).max(100),
  // temperatureRange: z.object({
  //   min: z.number().min(-50).max(50),
  //   max: z.number().min(-50).max(50),
  // }),
  // sunlightRequirement: z.number().min(0).max(24),
  // windResistance: z.number().min(0).max(10),
  geneticModification: z.enum(["Yes", "No"]),
  additionalNotes: z.string().max(500).optional(),
});
