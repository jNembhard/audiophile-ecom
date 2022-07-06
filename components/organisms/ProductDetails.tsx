import { Stack, Box, Image } from "@chakra-ui/react";
import { Product } from "../../interfaces/Product";

type Props = {};

const ProductDetails: React.FC<{ product: Product }> = ({
  product,
}): JSX.Element => {
  return (
    <Stack>
      <Box>ProductDetails</Box>
    </Stack>
  );
};

export default ProductDetails;
