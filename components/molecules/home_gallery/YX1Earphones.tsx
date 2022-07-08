import React from "react";
import { Box, Image, Heading, Button, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";

const YX1Earphones = () => {
  return (
    <SimpleGrid
      columns={[1, 2]}
      spacing={{ base: "1.5rem", sm: "0.75rem", lg: "1.875rem" }}
    >
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
      <Box>
        <Box
          position={{ sm: "relative" }}
          bg="seashell"
          height="100%"
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
            <Link href="/earphones/yx1-earphones" passHref>
              <Button as="a" variant="secondary">
                See Product
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default YX1Earphones;
