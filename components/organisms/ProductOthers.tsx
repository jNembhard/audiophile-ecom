import { Box, Heading, Stack } from "@chakra-ui/react";
import OtherProductLink from "../molecules/OtherProductLink";

export type OtherProductProps = {
  slug: string;
  name: string;
  image: { mobile: string; tablet: string; desktop: string };
};

const ProductOthers: React.FC<{ other: OtherProductProps[] | undefined }> = ({
  other,
}): JSX.Element => {
  return (
    <Box
      textAlign={{ base: "center" }}
      mt={{ base: "7.5rem" }}
      mb={{ base: "9.5rem", lg: "11.5rem" }}
    >
      <Heading fontSize={{ base: "1.5rem", md: "2rem" }}>
        You may also like
      </Heading>
      <Stack
        as="ul"
        direction={{ base: "column", md: "row" }}
        mt={{ base: "2.5rem", sm: "3.5rem", lg: "4rem" }}
        spacing={{ base: "3.5rem", md: "1rem", lg: "1.875rem" }}
      >
        {other?.map((product: OtherProductProps) => (
          <OtherProductLink key={product.slug} {...product} />
        ))}
      </Stack>
    </Box>
  );
};

export default ProductOthers;
