import { SelectHTMLAttributes } from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui";

const categories = [
  "camera",
  "earphone",
  "headphone",
  "laptop",
  "mobile",
  "smartwatch",
  "tablet",
];

interface ProductCategoryProps extends SelectHTMLAttributes<HTMLSelectElement> {
  formikForm: UseFormReturn<{
    name: string;
    price: number;
    category:
      | "mobile"
      | "laptop"
      | "tablet"
      | "headphone"
      | "earphone"
      | "smartwatch"
      | "camera";
    description?: string | undefined;
    productImages?: string[] | undefined;
  }>;
  formDescription: string;
  label: string;
  name: "category";
}

function ProductCategory({
  formDescription,
  formikForm,
  label,
  name,
}: ProductCategoryProps) {
  return (
    <FormField
      control={formikForm.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select
              onValueChange={(value) => {
                field.onChange(value);
              }}
              {...field}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => {
                  return (
                    <SelectItem
                      className="capitalize"
                      key={category}
                      value={category}
                    >
                      {category}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </FormControl>
          <FormDescription>{formDescription}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default ProductCategory;
