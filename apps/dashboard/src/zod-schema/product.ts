import { z } from "common/zod";

const productSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  price: z.number(),
  productImages: z.array(z.string()).optional(),
  category: z.enum([
    "mobile",
    "laptop",
    "tablet",
    "headphone",
    "earphone",
    "smartwatch",
    "camera",
  ]),
  brandId: z.string(),
});

export type Product = z.infer<typeof productSchema>;

export type ProductInputKey = keyof Product;

export { productSchema };
