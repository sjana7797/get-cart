import { useEffect } from "react";
import ProductInput from "~/components/add-product/product-input";
import useTopLoadingBar from "~/hooks/useTopLoadingBar";
import Main from "~/layout/main";

function AddProduct() {
  // top loading bar state
  const { setProgressDispatch } = useTopLoadingBar();

  useEffect(() => {
    setProgressDispatch(100);
  }, [setProgressDispatch]);

  return (
    <Main title="Add Product">
      <ProductInput />
    </Main>
  );
}

export default AddProduct;
