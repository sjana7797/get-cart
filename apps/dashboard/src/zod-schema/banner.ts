import { z } from "common/zod";

export const bannerSchema = z.object({
  image: z.string().url().min(1, {
    message: "Image is required",
  }),
  href: z.string().min(1, {
    message: "Image is required",
  }),
  active: z.boolean().optional().default(true),
});

export type Banner = z.infer<typeof bannerSchema>;
