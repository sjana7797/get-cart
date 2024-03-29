import { categories } from "common/index";
import { GetServerSideProps } from "next";
import BrandScrollContainer from "~/components/home/BrandScrollContainer";

const allCategories: readonly string[] = [...categories];

function Category() {
  return (
    <div className="">
      <BrandScrollContainer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const category = params?.slug ? params?.slug[0] : undefined;

  if (!category || !allCategories.includes(category)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};
export default Category;
