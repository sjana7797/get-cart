import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@repo/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@repo/ui";
import { productSchema } from "~/zod-schema/product";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { createProduct } from "~/api/api-clients";
import { toast } from "@repo/ui/lib/sonner";
import { useEffect } from "react";

function ProductInput() {
  // form definition
  const form = useForm<z.infer<typeof productSchema>>({
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
    onError(error, variables, context) {
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
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormDescription>This is product name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  placeholder="price"
                  {...field}
                  type="number"
                  onChange={(event) => {
                    field.onChange(event.target.valueAsNumber);
                  }}
                />
              </FormControl>
              <FormDescription>This is product price.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="description" {...field} />
              </FormControl>
              <FormDescription>This is product description.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant={"default"}>
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default ProductInput;
