import { Box, Container, Heading, Text, Link, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { motion } from "framer-motion";

const HeroBanner = () => {
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);
  const MotionButton = motion(Button);

  return (
    <Box
      position="relative"
      overflow="hidden"
      zIndex="1"
      bg="#191919"
      textAlign={{ base: "center", lg: "left" }}
      pt={{ base: "6rem", sm: "8rem", lg: "10rem" }}
      pb="7rem"
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
        <MotionHeading
          as="h1"
          color="white"
          fontSize={["2.25rem", "3.5rem"]}
          letterSpacing="0.0806rem"
          lineHeight="1.1"
          mb={6}
          mx={{ base: "auto", lg: 0 }}
          maxW="15ch"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 1 },
          }}
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
        </MotionHeading>
        <MotionText
          color="lightGrey"
          fontSize="0.9375rem"
          lineHeight="1.7"
          maxWidth={{ base: "38ch", md: "40ch", lg: "42ch" }}
          mx={{ base: "auto", lg: 0 }}
          mb={10}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1, duration: "1" } }}
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </MotionText>
        <Link
          as={NextLink}
          href="/headphones/xx99-mark-two-headphones"
          _hover={{ textDecoration: "none" }}
        >
          <MotionButton
            cursor="pointer"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1.5, duration: 1 },
            }}
          >
            See Product
          </MotionButton>
        </Link>
      </Container>
    </Box>
  );
};

export default HeroBanner;
