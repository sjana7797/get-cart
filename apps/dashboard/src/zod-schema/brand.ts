import { z } from "zod";

export const createBrandSchema = z.object({
  name: z.string(),
});

export type CreateBrandPayload = z.infer<typeof createBrandSchema>;
