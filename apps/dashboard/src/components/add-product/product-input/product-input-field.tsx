import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@repo/ui";
import { InputHTMLAttributes } from "react";
import { UseFormReturn } from "react-hook-form";
import { ProductInputKey } from "~/zod-schema/product";

interface ProductInputProps extends InputHTMLAttributes<HTMLInputElement> {
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
  name: ProductInputKey;
}

function ProductInputField({
  formikForm,
  formDescription,
  label,
  name,
  ...rest
}: ProductInputProps) {
  return (
    <FormField
      control={formikForm.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              {...rest}
              onChange={(event) => {
                rest.type && rest.type === "number"
                  ? field.onChange(event.target.valueAsNumber)
                  : field.onChange(event.target.value);
              }}
            />
          </FormControl>
          <FormDescription>{formDescription}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default ProductInputField;
