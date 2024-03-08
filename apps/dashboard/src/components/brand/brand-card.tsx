import { toast } from "@repo/ui/lib/sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Brand } from "database";
import { Trash2 } from "lucide-react";
import { Card, CardContent, CardFooter } from "@repo/ui/components/ui/card";
import { Switch } from "@repo/ui/components/ui/switch";

type Props = { brand: Brand };

function BrandCard({ brand }: Props) {
  // query client
  const queryClient = useQueryClient();

  // server interaction

  //   update banner mutation
  //   const { mutateAsync } = useMutation({
  //     mutationFn: updateBanner,
  //     mutationKey: ["updateBanner"],

  //     onMutate: async ({ bannerId }) => {
  //       // Cancel any outgoing refetches
  //       // (so they don't overwrite our optimistic update)
  //       await queryClient.cancelQueries({ queryKey: ["banners"] });

  //       // Snapshot the previous value
  //       const previousBanners = queryClient.getQueryData(["banners"]);

  //       // Optimistically update to the new value
  //       queryClient.setQueryData(["banners"], (old: Banner[]) => {
  //         return old.map((b) =>
  //           b.id === bannerId ? { ...b, active: !b.active } : b,
  //         );
  //       });

  //       // Return a context object with the snapshotted value
  //       return { previousBanners };
  //     },
  //     // If the mutation fails,
  //     // use the context returned from onMutate to roll back
  //     onError: (_err, _newBanner, context) => {
  //       queryClient.setQueryData(["banners"], context?.previousBanners);
  //     },
  //     // Always refetch after error or success:
  //     onSettled: () => {
  //       queryClient.invalidateQueries({ queryKey: ["banners"] });
  //       toast.success("Banner updated successfully");
  //     },
  //   });

  //   //   delete banner mutation
  //   const { mutateAsync: deleteBannerMutation } = useMutation({
  //     mutationKey: ["deleteBanner"],
  //     mutationFn: deleteBanner,
  //     onSuccess() {
  //       queryClient.invalidateQueries({ queryKey: ["banners"] });
  //       toast.success("Banner deleted successfully");
  //     },
  //   });

  return (
    <Card>
      <CardContent className="pt-6">
        <h2>{brand.name}</h2>
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-x-2">
        {/* <Switch
          id={banner.id}
          checked={banner.active}
          onCheckedChange={(value) => {
            mutateAsync({
              bannerId: banner.id,
              banner: {
                active: value,
              },
            });
          }}
        />
        <Trash2
          className="w-6 h-6 text-red-500 cursor-pointer"
          onClick={async () => {
            await deleteBannerMutation(banner.id);
          }}
        /> */}
      </CardFooter>
    </Card>
  );
}

export default BrandCard;
