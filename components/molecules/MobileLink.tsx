import { Box, Link, Image, Heading, HStack, Text } from "@chakra-ui/react";
import NextLink from "next/link";

type Props = { text: string; navimg?: string; url: string };

const MobileLink = (props: Props) => {
  return (
    <Box
      as="li"
      bg="seashell"
      position="relative"
      flex="1"
      textAlign="center"
      borderRadius="0.5rem"
      cursor="pointer"
      _focusWithin={{
        outline: "0.125rem dashed red",
        outlineOffset: "0.25rem",
      }}
      sx={{
        "&:hover p": { color: "rawSienna" },
        "a:focus": { outline: "none" },
      }}
    >
      <Link as={NextLink} href={props.url} _hover={{ textDecoration: "none" }}>
        <Box pt="5.5rem" pb="1.375rem">
          <Image
            position="absolute"
            top="0"
            left="50%"
            transform="translate(-50%, -38%)"
            width="8.625rem"
            objectFit="cover"
            src={props.navimg}
            aria-hidden="true"
            alt=""
          />
          <Heading
            as="h2"
            mb="1rem"
            fontSize={{ base: "0.9357rem", lg: "1.125rem" }}
            letterSpacing={{ base: "0.0669em", lg: "0.0806em" }}
            color="onyx"
          >
            {props.text}
          </Heading>
          <HStack
            spacing="0.8325rem"
            justifyContent="center"
            _hover={{ cursor: "pointer" }}
          >
            <Text
              color="onyx"
              fontWeight="bold"
              fontSize="0.8125rem"
              textTransform="uppercase"
            >
              Shop
            </Text>
            <Image
              src="/assets/shared/desktop/icon-arrow-right.svg"
              aria-hidden="true"
              alt=""
            />
          </HStack>
        </Box>
      </Link>
    </Box>
  );
};

export default MobileLink;
