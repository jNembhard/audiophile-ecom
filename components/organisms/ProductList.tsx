import { VStack } from "@chakra-ui/react";
import { Product } from "../../interfaces/Product";
import ProductListItem from "../molecules/ProductListItem";

type Props = { products: Product[] };

const ProductList = (props: Props) => {
  return (
    <VStack>
      {props.products.map((product) => (
        <ProductListItem key={product.id} {...product} />
      ))}
    </VStack>
  );
};

export default ProductList;
