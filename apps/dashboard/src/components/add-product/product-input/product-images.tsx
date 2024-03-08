import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/ui/form";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { InputHTMLAttributes, useState } from "react";
import { ProductAddForm } from "./type";

interface ProductImagesInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  formikForm: ProductAddForm;
  formDescription: string;
  label: string;
  name: "productImages";
}

function ProductImages({
  formDescription,
  formikForm,
  label,
  name,
  ...rest
}: ProductImagesInputProps) {
  const [productImage, setProductImage] = useState<string>("");

  return (
    <FormField
      control={formikForm.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="flex items-center justify-between gap-x-2">
              <Input
                value={productImage}
                {...rest}
                onChange={(event) => {
                  setProductImage(event.target.value);
                }}
              />
              <Button
                type="button"
                onClick={() => {
                  field.onChange(
                    field.value?.length
                      ? [...field.value, productImage]
                      : [productImage],
                  );
                  setProductImage("");
                }}
                disabled={!productImage}
              >
                add
              </Button>
            </div>
          </FormControl>
          <FormDescription>
            {formDescription}
            {field.value?.length ? (
              <span className="flex gap-2 max-w-sm flex-wrap">
                {field.value?.map((image, index) => {
                  return (
                    <img
                      key={index}
                      src={image}
                      alt="product"
                      className="w-10 h-10 object-contain rounded-md"
                    />
                  );
                })}
              </span>
            ) : (
              <></>
            )}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default ProductImages;
