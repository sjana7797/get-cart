import { z } from "zod";

const productSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  price: z.number(),
  productImages: z.array(z.string()).optional(),
});

export type Product = z.infer<typeof productSchema>;

export type ProductInputKey = keyof Product;

export { productSchema };
