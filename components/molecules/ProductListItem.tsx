import { Product } from "../../interfaces/Product";
import { Stack, Box, Image } from "@chakra-ui/react";

type Props = {};

const ProductListItem: React.FC<Product> = ({
  slug,
  name,
  category,
  description,
  new: isNew,
  categoryImage,
}) => {
  return (
    <Stack spacing={{ base: "2rem", lg: "0" }}>
      <Box>
        <picture>
          <source media="(min-width: 62rem)" srcSet={categoryImage.desktop} />
          <source media="(min-width: 30rem)" srcSet={categoryImage.tablet} />
          <Image
            src={categoryImage.mobile}
            objectFit="cover"
            width="100%"
            borderRadius="0.5rem"
            alt={name}
          />
        </picture>
      </Box>
    </Stack>
  );
};

export default ProductListItem;
