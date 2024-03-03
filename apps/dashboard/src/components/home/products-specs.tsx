import { useQuery } from "@tanstack/react-query";
import Spec from "./spec";
import { getSpecs } from "~/api/api-clients";
import LoadingSpec from "./loading-spec";

function ProductsSpecs() {
  const { data, isLoading } = useQuery({
    queryKey: ["getSpecs"],
    queryFn: getSpecs,
  });
  return (
    <section className="px-4 h-screen overflow-y-scroll flex-grow">
      <h1 className="text-3xl font-medium py-4 bg-white sticky top-0">
        Get Cart
      </h1>
      <div className="grid grid-cols-3 gap-4 max-w-screen-2xl">
        {isLoading || !data ? (
          <>
            {Array.from({ length: 5 }).map((_, index) => (
              <LoadingSpec key={index} />
            ))}
          </>
        ) : (
          <>
            <Spec
              title="Total Products"
              value={data.totalProducts.toString()}
            />
          </>
        )}
      </div>
    </section>
  );
}

export default ProductsSpecs;
