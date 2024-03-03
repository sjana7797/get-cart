import React from "react";
import Banner from "~/components/home/banner";
import CategoryItem from "~/components/home/category-item";

type Props = {};

function Home({}: Props) {
  return (
    <main>
      <Banner />
      <CategoryItem />
    </main>
  );
}

export default Home;
