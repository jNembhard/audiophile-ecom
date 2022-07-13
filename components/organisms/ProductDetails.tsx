import { Stack, Box, Image } from "@chakra-ui/react";
import { Product } from "@interfaces/Product";
import ProductDescription from "@components/molecules/ProductDescription";
import ProductFeatures from "@components/molecules/ProductFeatures";
import ProductGallery from "@components/molecules/ProductGallery";
import Motion from "./Motion";
import MotionAudioGear from "./MotionAudioGear";
import ProductLinks from "./ProductLinks";
import ProductOthers from "./ProductOthers";

const ProductDetails: React.FC<{ product: Product }> = ({
  product,
}): JSX.Element => {
  return (
    <>
      <Stack
        direction={{ base: "column", sm: "row" }}
        align={{ sm: "center" }}
        mt={{ base: "1.5rem", lg: "3.5rem" }}
        spacing={{ base: "2rem", lg: "7.75rem" }}
      >
        <Box flexBasis={{ base: "40%", lg: "50%" }}>
          <picture>
            <source
              media="(min-width: 62em)"
              srcSet={product?.image?.desktop}
            />
            <source media="(min-width: 30em)" srcSet={product?.image?.tablet} />
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
      <ProductFeatures
        features={product.features}
        includedItems={product.includedItems}
      />
      <Motion>
        <ProductGallery {...product?.gallery} />
      </Motion>
      <ProductOthers other={product.others} />
      <ProductLinks />
      <MotionAudioGear />
    </>
  );
};

export default ProductDetails;
