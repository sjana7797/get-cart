import { zodResolver } from "@repo/ui";
import { toast } from "@repo/ui/lib/sonner";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createBanner } from "~/api/api-clients";
import { Banner, bannerSchema } from "~/zod-schema/banner";
import type { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/ui/dialog";
import { Button } from "@repo/ui/components/ui/button";
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

type Props = {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

function AddBanner({ modalOpen, setModalOpen }: Props) {
  // banner form using zod schema
  const form = useForm<Banner>({
    resolver: zodResolver(bannerSchema),
  });

  //   server interaction
  const { mutateAsync: createBannerMutation } = useMutation({
    mutationFn: createBanner,
    onSettled() {
      toast.success("Banner created successfully", {
        duration: 2000,
        closeButton: true,
      });
    },
    onError(error) {
      toast.error(error.message, {
        duration: 2000,
        closeButton: true,
      });
    },
  });

  //   create banner on form submit
  const createBannerOnSubmit = async (data: Banner) => {
    // create banner
    await createBannerMutation(data);
  };

  // reset form after successful submission
  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset({ href: "", image: "" });
      setModalOpen(false);
    }
  }, [form, form.formState.isSubmitSuccessful, form.reset, setModalOpen]);

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger>
        <Button>Add Banner</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Banner</DialogTitle>
          <DialogDescription>
            Add a new banner to the website.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(createBannerOnSubmit)}>
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Banner Image</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>This is Banner image url.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="href"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Banner Cta</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    This is url for banner redirect.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddBanner;
