import { Product } from "../../interfaces/Product";
import { Container } from "@chakra-ui/react";
import ProductDetails from "../organisms/ProductDetails";

type Props = { product: Product };

const ProductPageTemplate = (props: Props) => {
  return (
    <Container as="main" id="main" px={6} maxW="container.lg">
      <ProductDetails product={props.product} />
    </Container>
  );
};

export default ProductPageTemplate;
