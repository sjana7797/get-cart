import type { UseFormReturn } from "react-hook-form";
import { Product } from "~/zod-schema/product";

export type ProductAddForm = UseFormReturn<Product>;
