"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ui/components/ui/carousel";
import { Skeleton } from "@ui/components/ui/skeleton";
import React from "react";
import Autoplay from "@repo/ui/lib/carousel-plugin";
import { trpc } from "~/utils/trpc";

type Props = {};

function Banner({}: Props) {
  // server interaction
  const { data: banners, isLoading } = trpc.product.getBanner.useQuery(
    undefined,
    {
      refetchInterval: false,
    },
  );

  return (
    <section className="p-5">
      <Carousel
        className="w-[90%] mx-auto"
        plugins={[Autoplay({ delay: 5000 })]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {isLoading ? (
            <CarouselItem>
              <Skeleton className="w-full h-96 rounded-md bg-slate-300" />
            </CarouselItem>
          ) : (
            banners?.map((banner) => {
              return (
                <CarouselItem key={banner.id}>
                  <img
                    src={banner.image}
                    alt={banner.id}
                    className="w-full h-96 object-cover rounded-md"
                  />
                </CarouselItem>
              );
            })
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default Banner;
