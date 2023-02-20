import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { getProductsByCategory, getCategories } from "@/utils/products";
import { Product } from "@/interfaces/Product";
import CategoryTemplate from "@/components/templates/CategoryTemplate";
import Params from "@/interfaces/Params";
import NextHead from "@/components/atoms/NextHead";

type Props = { products: Product[]; product: Product };

const CategoryPage = (props: Props) => {
  const {
    query: { category },
  } = useRouter();
  return (
    <>
      <NextHead
        title={`${category}`}
        description={`Check out Audiophile's latest ${category}.`}
        type="webapp"
      />
      <CategoryTemplate products={props.products} />
    </>
  );
};

export default CategoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const categories: string[] = getCategories();
  const paths = categories.map((category) => ({ params: { category } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as Params;
  const products: Product[] = getProductsByCategory(params.category);

  return { props: { products } };
};
