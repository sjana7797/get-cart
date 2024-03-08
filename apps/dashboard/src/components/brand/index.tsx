import Main from "~/layout/main";
import AddBrand from "./add-brand";
import { useState } from "react";
import Brands from "./brands";

function Brand() {
  const [isAddBrandModalOpen, setIsAddBrandModalOpen] = useState(false);
  return (
    <Main
      title="Brand"
      cta={
        <AddBrand
          modalOpen={isAddBrandModalOpen}
          setModalOpen={setIsAddBrandModalOpen}
        />
      }
    >
      <Brands />
    </Main>
  );
}

export default Brand;
