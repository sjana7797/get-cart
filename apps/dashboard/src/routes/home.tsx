import { useEffect } from "react";
import ProductsSpecs from "~/components/home/products-specs";
import useTopLoadingBar from "~/hooks/useTopLoadingBar";

function Home() {
  const { setProgressDispatch } = useTopLoadingBar();

  useEffect(() => {
    setProgressDispatch(100);
  }, [setProgressDispatch]);

  return (
    <>
      <ProductsSpecs />
    </>
  );
}

export default Home;
