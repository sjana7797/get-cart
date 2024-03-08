import React from "react";
import { ContainerScroll } from "@repo/ui/components/ui/container-scroll-animation";
import { trpc } from "~/utils/trpc";

type Props = {};

function BrandScrollContainer({}: Props) {
  const { data: products } = trpc.product.getProducts.useQuery();

  if (!products) {
    return <div>Loading</div>;
  }
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        products={products}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unveiling the Best of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-blue-600">
                Mobile Technology
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export default BrandScrollContainer;
