import BrandCard from "./brand-card";
import { useGetAllBrands } from "~/api";

function Brands() {
  // server interaction
  const { data, isLoading } = useGetAllBrands();
  return (
    <div className="grid grid-cols-2 max-w-screen-xl gap-4">
      {isLoading && <div>Loading...</div>}
      {data && data.map((brand) => <BrandCard brand={brand} key={brand.id} />)}
    </div>
  );
}

export default Brands;
