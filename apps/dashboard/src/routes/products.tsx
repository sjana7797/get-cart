import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getAllProducts } from "~/api/api-clients";
import ProductCard from "~/components/products/card";
import useTopLoadingBar from "~/hooks/useTopLoadingBar";
import Main from "~/layout/main";

function Products() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const { setProgressDispatch } = useTopLoadingBar();

  useEffect(() => {
    if (isLoading) setProgressDispatch(10);
    else setProgressDispatch(100);
  }, [isLoading, setProgressDispatch]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Main title="Products">
      <div className="grid grid-cols-3 w-full max-w-screen-xl p-2 gap-4">
        {data?.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </Main>
  );
}

export default Products;
