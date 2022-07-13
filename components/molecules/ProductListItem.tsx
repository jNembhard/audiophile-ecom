import { Product } from "@interfaces/Product";
import { Stack, Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

const ProductListItem: React.FC<Product> = ({
  slug,
  name,
  category,
  description,
  new: isNew,
  categoryImage,
}) => {
  return (
    <Stack
      direction={{ base: "column" }}
      spacing={{ base: "2rem", lg: "0" }}
      sx={{
        "@media screen and (min-width: 62em)": {
          "&:nth-of-type(odd) div:nth-of-type(1)": {
            marginRight: "7.8125rem",
          },
          "&:nth-of-type(even) div:nth-of-type(1)": {
            order: 1,
            marginLeft: "7.8125rem",
          },
          alignItems: "center",
          flexDirection: "row",
        },
      }}
    >
      <Box flexBasis={{ lg: "55%" }}>
        <picture>
          <source media="(min-width: 62em)" srcSet={categoryImage.desktop} />
          <source media="(min-width: 30em)" srcSet={categoryImage.tablet} />
          <Image
            src={categoryImage.desktop}
            objectFit="cover"
            width="100%"
            borderRadius="0.5rem"
            alt={name}
          />
        </picture>
      </Box>
      <Box textAlign={{ base: "center", lg: "left" }} flexBasis={{ lg: "45%" }}>
        <Heading
          as="h2"
          fontSize={{ base: "1.75rem" }}
          letterSpacing="0.0625rem"
          mx={{ base: "auto", lg: "unset" }}
          mb={{ base: "1.5rem" }}
        >
          {isNew && (
            <Box
              as="strong"
              display="block"
              fontSize="0.875rem"
              fontWeight="normal"
              letterSpacing="0.625rem"
              textTransform="uppercase"
              color="rawSienna"
              mb={{ base: "1.5rem", sm: "1rem" }}
            >
              New Product
            </Box>
          )}
          {name}
        </Heading>
        <Text
          px={{ sm: "2rem", md: "4rem", lg: 0 }}
          pr="1rem"
          mb={{ base: "1.5rem" }}
        >
          {description}
        </Text>
        <Link href={`/${category}/${slug}`} passHref>
          <Button as="a" cursor="pointer">
            See Product
          </Button>
        </Link>
      </Box>
    </Stack>
  );
};

export default ProductListItem;
