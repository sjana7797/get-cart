import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createBanner, createBrand, getBrands } from "./api-clients";
import { toast } from "@get-cart/ui/lib/sonner";

export const useBrandMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["add-brand"],
    mutationFn: createBrand,
    onSuccess() {
      toast.success("Brand created successfully", {
        duration: 2000,
        closeButton: true,
      });
      queryClient.invalidateQueries({ queryKey: ["brands"] });
    },
    onError(error) {
      toast.error(error.message, {
        duration: 2000,
        closeButton: true,
      });
    },
  });
};

export const useGetAllBrands = () => {
  return useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
  });
};

export const useCreateBannerMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBanner,
    onSuccess() {
      toast.success("Banner created successfully", {
        duration: 2000,
        closeButton: true,
      });

      queryClient.invalidateQueries({
        queryKey: ["banners"],
      });
    },
    onError(error) {
      toast.error(error.message, {
        duration: 2000,
        closeButton: true,
      });
    },
  });
};
