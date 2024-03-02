import { z } from "zod";

const productSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  price: z.number(),
});

export type Product = z.infer<typeof productSchema>;

export { productSchema };
