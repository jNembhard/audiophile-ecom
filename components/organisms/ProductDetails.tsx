import { Stack, Box, Image } from "@chakra-ui/react";
import { Product } from "../../interfaces/Product";
import AudioGear from "../molecules/AudioGear";
import ProductDescription from "../molecules/ProductDescription";
import ProductLinks from "./ProductLinks";

type Props = {};

const ProductDetails: React.FC<{ product: Product }> = ({
  product,
}): JSX.Element => {
  return (
    <>
      <Stack>
        <Box>
          <picture>
            <source
              media="(min-width: 62rem)"
              srcSet={product?.image?.desktop}
            />
            <source
              media="(min-width: 30rem)"
              srcSet={product?.image?.tablet}
            />
            <Image
              src={product?.image?.mobile}
              objectFit="cover"
              width="100%"
              borderRadius="0.5rem"
              alt={product.name}
            />
          </picture>
        </Box>
        <ProductDescription product={product} />
      </Stack>
      <ProductLinks />
      <AudioGear />
    </>
  );
};

export default ProductDetails;
