import { SelectHTMLAttributes } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";
import { categories } from "common/index";
import { ProductAddForm } from "./type";

interface ProductCategoryProps extends SelectHTMLAttributes<HTMLSelectElement> {
  formikForm: ProductAddForm;
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
