import React from "react";
import {
  Box,
  Image,
  Heading,
  Button,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Motion from "@/components/organisms/Motion";

const YX1Earphones = () => {
  return (
    <SimpleGrid
      columns={[1, 2]}
      spacing={{ base: "1.5rem", sm: "0.75rem", lg: "1.875rem" }}
    >
      <Motion>
        <Box as="picture" height="100%">
          <source
            media="(min-width: 62em)"
            srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
          />
          <source
            media="(min-width: 30em)"
            srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
          />
          <Image
            src="/assets/home/mobile/image-earphones-yx1.jpg"
            objectFit="cover"
            borderRadius="0.5rem"
            alt="YX1 Earphones"
          />
        </Box>
      </Motion>
      <Motion transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}>
        <Box
          position="relative"
          bg="seashell"
          height={{ sm: "100%" }}
          pl={{ base: "1.5rem", sm: "2rem", md: "2.5625rem", lg: "5.9375rem" }}
          py={{ base: "2.5625rem", sm: "unset" }}
          borderRadius="0.5rem"
        >
          <Box
            position={{ sm: "absolute" }}
            top="50%"
            pr={{ sm: "1rem" }}
            transform={["translateY(0)", "translateY(-50%)"]}
          >
            <Heading as="h2" fontSize="1.75rem" color="black" mb="2rem">
              YX1 Earphones
            </Heading>

            <Link
              as={NextLink}
              href="/earphones/yx1-earphones"
              _hover={{ textDecoration: "none" }}
            >
              <Button variant="secondary">See Product</Button>
            </Link>
          </Box>
        </Box>
      </Motion>
    </SimpleGrid>
  );
};

export default YX1Earphones;
