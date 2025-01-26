import { Box, Link, Image, Heading, HStack, Text } from "@chakra-ui/react";
import NextLink from "next/link";

type Props = { navimg?: string; text: string; url: string };

const ProductLink = (props: Props) => {
  return (
    <Box
      as="li"
      bg="seashell"
      position="relative"
      flex="1"
      textAlign="center"
      borderRadius="0.5rem"
      _focusWithin={{
        outline: "0.125rem dashed red",
        outlineOffset: "0.25rem",
      }}
      sx={{
        "&:hover p": { color: "rawSienna", "a:foucs": { outline: "none" } },
      }}
      cursor="pointer"
    >
      <Link as={NextLink} href={props.url} _hover={{ textDecoration: "none" }}>
        <Box pt="5.5rem" pb="1.357rem">
          <Image
            src={props.navimg}
            position="absolute"
            top="0"
            left="50%"
            objectFit="cover"
            width="8.625rem"
            transform="translate(-50%,-38%)"
            alt={props.text}
            aria-hidden="true"
          />
          <Heading
            as="h2"
            mb="16px"
            fontSize={{ base: "0.9375rem", lg: "1.125rem" }}
            letterSpacing={{ base: "0.0669em", lg: "0.0806em" }}
          >
            {props.text}
          </Heading>
          <HStack justifyContent="center" spacing="0.8325rem">
            <Text
              color="black"
              fontSize="0.8125rem"
              fontWeight="bold"
              textTransform="uppercase"
              aria-hidden="true"
            >
              Shop
            </Text>
            <Image src="/assets/shared/desktop/icon-arrow-right.svg" alt="" />
          </HStack>
        </Box>
      </Link>
    </Box>
  );
};

export default ProductLink;
