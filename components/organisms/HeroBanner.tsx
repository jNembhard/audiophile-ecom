import { Box, Container, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      zIndex="1"
      bg="black"
      textAlign={{ base: "center", lg: "left" }}
      pt={{ base: "6rem", sm: "8rem", lg: "10rem" }}
      pb="8rem"
    >
      <Box
        _after={{
          content: "''",
          position: "absolute",
          background:
            "url('/assets/home/mobile/image-header.jpg') center/contain no-repeat",
          width: "100%",
          height: "116%",
          top: "-6rem",
          left: 0,
          zIndex: "-1",
          "@media screen and (min-width: 30em)": {
            background:
              "url('/assets/home/tablet/image-header.jpg') center/contain no-repeat",
          },
          "@media screen and (min-width: 62em)": {
            background:
              "url('/assets/home/desktop/image-hero.jpg') center/contain no-repeat",
          },
        }}
      ></Box>
      <Container maxW="container.lg" px={6}>
        <Heading
          as="h1"
          color="white"
          fontSize={["2.25rem", "3.5rem"]}
          letterSpacing="0.0806rem"
          lineHeight="1.1"
          mb={6}
          mx={{ base: "auto", lg: 0 }}
          maxW="15ch"
        >
          <Box
            as="strong"
            color="lightGrey"
            display="block"
            fontSize="0.875rem"
            letterSpacing="0.625rem"
            mb={4}
          >
            New Product
          </Box>
          XX99 Mark II Headphones
        </Heading>
        <Text
          color="lightGrey"
          fontSize="0.9375rem"
          lineHeight="1.7"
          maxWidth="38ch"
          mx={{ base: "auto", lg: 0 }}
          mb={10}
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Text>
        <Link href="/headphones/xx99-mark-two-headphones" passHref>
          <Button as="a" cursor="pointer">
            See Product
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default HeroBanner;
