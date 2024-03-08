import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/ui/form";
import { Input } from "@repo/ui/components/ui/input";
import { InputHTMLAttributes } from "react";
import { ProductInputKey } from "~/zod-schema/product";
import { ProductAddForm } from "./type";

interface ProductInputProps extends InputHTMLAttributes<HTMLInputElement> {
  formikForm: ProductAddForm;
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
