"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ui/index";
import React from "react";
import Autoplay from "@repo/ui/lib/carousel-plugin";
import { trpc } from "~/utils/trpc";

type Props = {};

function Banner({}: Props) {
  // server interaction
  const { data } = trpc.product.getBanner.useQuery();

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
          {data?.map((product) => {
            return (
              <CarouselItem key={product.id}>
                <img
                  src="https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="banner1"
                  className="w-full h-96 object-cover rounded-md"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default Banner;
