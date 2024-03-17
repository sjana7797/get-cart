import { SelectHTMLAttributes } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@get-cart/ui/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@get-cart/ui/components/ui/select";
import { ProductAddForm } from "./type";
import { useQuery } from "@tanstack/react-query";
import { getBrands } from "~/api/api-clients";

interface ProductCategoryProps extends SelectHTMLAttributes<HTMLSelectElement> {
  formikForm: ProductAddForm;
  formDescription: string;
  label: string;
  name: "brandId";
}

function ProductBrandSelect({
  formDescription,
  formikForm,
  label,
  name,
}: ProductCategoryProps) {
  // server interaction for the brands
  const { data: brands } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
  });

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
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                {brands?.map((brand) => {
                  return (
                    <SelectItem
                      className="capitalize"
                      key={brand.id}
                      value={brand.id}
                    >
                      {brand.name}
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

export default ProductBrandSelect;
