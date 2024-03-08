import React from "react";
import { ContainerScroll } from "@repo/ui/components/ui/container-scroll-animation";

type Props = {};

function BrandScrollContainer({}: Props) {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* <ContainerScroll
        users={users}
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
      /> */}
    </div>
  );
}

export default BrandScrollContainer;
