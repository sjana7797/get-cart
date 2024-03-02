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
    await mutateAsync(values);
  };

  // server interaction
  const { mutateAsync } = useMutation({ mutationFn: createProduct });

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
