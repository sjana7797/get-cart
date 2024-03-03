import { useQuery } from "@tanstack/react-query";
import { getBanners } from "~/api/api-clients";
import BannerCard from "./banner-card";

function Banners() {
  // server interaction
  const { data, isLoading } = useQuery({
    queryKey: ["banners"],
    queryFn: getBanners,
  });
  return (
    <div className="grid grid-cols-2 max-w-screen-xl gap-4">
      {isLoading && <div>Loading...</div>}
      {data &&
        data.map((banner) => <BannerCard banner={banner} key={banner.id} />)}
    </div>
  );
}

export default Banners;
