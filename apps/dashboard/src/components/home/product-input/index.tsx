import { Button, Form } from "@repo/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@repo/ui";
import { Product, productSchema } from "~/zod-schema/product";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { createProduct } from "~/api/api-clients";
import { toast } from "@repo/ui/lib/sonner";
import { useEffect } from "react";
import ProductInputField from "./product-input-field";
import ProductImages from "./product-images";

function ProductInput() {
  // form definition
  const form = useForm<Product>({
    resolver: zodResolver(productSchema),
  });

  //   on product submit
  const onProductSubmit = async (values: z.infer<typeof productSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    await createProductMutate(values);
  };

  // server interaction
  const { mutateAsync: createProductMutate } = useMutation({
    mutationFn: createProduct,
    onSuccess() {
      toast.success("Product created successfully", {
        description: "Product has been created successfully.",
        className: "bg-green-500",
      });
    },
    onError(error) {
      toast.error("Failed to create product", {
        description: error.message,
        className: "bg-red-500",
      });
    },
  });

  // reset form after successful submission
  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset({ name: "", price: 0, description: "" });
    }
  }, [form, form.formState.isSubmitSuccessful, form.reset]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onProductSubmit)}
        className="space-y-8 max-w-screen-md p-2"
      >
        <ProductInputField
          formDescription="This is product name."
          formikForm={form}
          label="Product Name"
          placeholder="Product Name"
          name="name"
        />
        <ProductInputField
          formDescription="This is product price."
          formikForm={form}
          type="number"
          label="Product Price"
          placeholder="Product Price"
          name="price"
        />
        <ProductInputField
          formDescription="This is product description."
          formikForm={form}
          label="Product Description"
          placeholder="Product Description"
          name="description"
        />
        <ProductImages
          formDescription="This is product images."
          formikForm={form}
          label="Product Image URL"
          placeholder="Product Image URL"
          name="productImages"
        />
        <Button type="submit" variant={"default"}>
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default ProductInput;
