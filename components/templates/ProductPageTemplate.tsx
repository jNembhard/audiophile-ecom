import { Product } from "../../interfaces/Product";
import { Container } from "@chakra-ui/react";

type Props = { product: Product };

const ProductPageTemplate = (props: Props) => {
  return (
    <Container as="main" id="main" px={6} maxW="container.lg">
      ProductPageTemplate
    </Container>
  );
};

export default ProductPageTemplate;
