import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { CategoryImage } from "@/interfaces/Product";

type Props = {
  first?: CategoryImage | undefined;
  second?: CategoryImage | undefined;
  third?: CategoryImage | undefined;
  altText?: CategoryImage | undefined;
};

const ProductGallery = (props: Props) => {
  return (
    <SimpleGrid
      gridTemplateColumns={{ base: "1fr", sm: "40% 1fr" }}
      templateAreas={{ sm: '"a c" "b c"' }}
      mt={{ base: "5.5rem", sm: "7.5rem", lg: "10rem" }}
      gap={{ base: "1.25rem" }}
    >
      <Box as="picture" gridArea={{ sm: "a" }}>
        <source media="(min-width: 62em)" srcSet={props.first?.desktop} />
        <source media="(min-width: 30em)" srcSet={props.first?.tablet} />
        <Image
          src={props.first?.mobile}
          objectFit="cover"
          width="100%"
          height="100%"
          borderRadius="0.5rem"
          alt={props.first?.altText}
        />
      </Box>
      <Box as="picture" gridArea={{ sm: "b" }}>
        <source media="(min-width: 62em)" srcSet={props.second?.desktop} />
        <source media="(min-width: 30em)" srcSet={props.second?.tablet} />
        <Image
          src={props.second?.mobile}
          objectFit="cover"
          width="100%"
          height="100%"
          borderRadius="0.5rem"
          alt={props.second?.altText}
        />
      </Box>
      <Box as="picture" gridArea={{ sm: "c" }}>
        <source media="(min-width: 62em)" srcSet={props.third?.desktop} />
        <source media="(min-width: 30em)" srcSet={props.third?.tablet} />
        <Image
          src={props.third?.mobile}
          objectFit="cover"
          width="100%"
          height="100%"
          borderRadius="0.5rem"
          alt={props.third?.altText}
        />
      </Box>
    </SimpleGrid>
  );
};

export default ProductGallery;
