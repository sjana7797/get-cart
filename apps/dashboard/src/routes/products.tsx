import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "~/api/api-clients";
import ProductCard from "~/components/products/card";

function Products() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
  return (
    <div className="p-5">
      <h1 className="text-center">Products</h1>
      <div className="grid grid-cols-3 w-full max-w-screen-xl p-2">
        {data?.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}

export default Products;
