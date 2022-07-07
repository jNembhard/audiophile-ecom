import { Product } from "../../interfaces/Product";
import { Container } from "@chakra-ui/react";
import ProductDetails from "../organisms/ProductDetails";
import GoBackLink from "../atoms/GoBackLink";

type Props = { product: Product };

const ProductPageTemplate = (props: Props) => {
  return (
    <Container as="main" id="main" px={6} maxW="container.lg">
      <GoBackLink />
      <ProductDetails product={props.product} />
    </Container>
  );
};

export default ProductPageTemplate;
