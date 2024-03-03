import { useState } from "react";
import AddBanner from "~/components/banner/add-banner";
import Banners from "~/components/banner/banners";
import Main from "~/layout/main";

function Banner() {
  const [addBannerModalOpen, setAddBannerModalOpen] = useState<boolean>(false);
  return (
    <Main
      title="Banner"
      cta={
        <AddBanner
          modalOpen={addBannerModalOpen}
          setModalOpen={setAddBannerModalOpen}
        />
      }
    >
      <Banners />
    </Main>
  );
}

export default Banner;
