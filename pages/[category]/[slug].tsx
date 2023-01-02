import Params from "@interfaces/Params";
import { Product } from "@interfaces/Product";
import { getProductPaths, getProductBySlug } from "@utils/products";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductPageTemplate from "@components/templates/ProductPageTemplate";
import NextHead from "@components/atoms/NextHead";

type Props = { product: Product };

const ProductPage: React.FC<Props> = (props: Props) => {
  return (
    <>
      <NextHead
        title={`${props.product.name}`}
        description={`${props.product.description}`}
        type="webapp"
      />
      <ProductPageTemplate product={props.product} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getProductPaths().map((path) => ({
    params: { category: path.category, slug: path.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as Params;
  const product: Product | undefined = getProductBySlug(params.slug);

  return { props: { product } };
};

export default ProductPage;
