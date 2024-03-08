import { zodResolver } from "@repo/ui";
import { Button } from "@repo/ui/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/ui/form";
import { Input } from "@repo/ui/components/ui/input";
import { ModalProps } from "common";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useBrandMutation, useGetAllBrands } from "~/api";
import { CreateBrandPayload, createBrandSchema } from "~/zod-schema/brand";

type Props = ModalProps;

function AddBrand({ modalOpen, setModalOpen }: Props) {
  // add brand form
  const form = useForm<CreateBrandPayload>({
    resolver: zodResolver(createBrandSchema),
  });

  // brand creation mutation
  const { mutateAsync: createBrand } = useBrandMutation();
  // on submit handler
  const createBrandOnSubmit = async (values: CreateBrandPayload) => {
    await createBrand(values);
  };

  // reset form after successful submission
  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset({ name: "" });
      setModalOpen(false);
    }
  }, [form, form.formState.isSubmitSuccessful, form.reset, setModalOpen]);

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger>
        <Button>Add Brand</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Brand</DialogTitle>
          <DialogDescription>
            Add a new banner to the website.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(createBrandOnSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>This is Banner image url.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Add Brand</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddBrand;
