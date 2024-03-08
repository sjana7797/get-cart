import React from "react";
import BrandScrollContainer from "~/components/home/BrandScrollContainer";
import Banner from "~/components/home/banner";
import CategoryItem from "~/components/home/category-item";

type Props = {};

function Home({}: Props) {
  return (
    <main>
      <Banner />
      <CategoryItem />
      <BrandScrollContainer />
    </main>
  );
}

export default Home;
