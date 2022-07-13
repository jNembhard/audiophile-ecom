import { VStack } from "@chakra-ui/react";
import { Product } from "@interfaces/Product";
import ProductListItem from "@components/molecules/ProductListItem";

type Props = { products: Product[] };

const ProductList = (props: Props) => {
  return (
    <VStack
      mt={{ base: "4rem" }}
      spacing={{ base: "7.5rem" }}
      mb={{ base: "7.5rem" }}
    >
      {props.products.map((product) => (
        <ProductListItem key={product.id} {...product} />
      ))}
    </VStack>
  );
};

export default ProductList;
