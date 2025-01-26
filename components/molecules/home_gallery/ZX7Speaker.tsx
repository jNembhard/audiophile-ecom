import { Box, Image, Heading, Link, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import Motion from "@/components/organisms/Motion";

const ZX7Speaker = () => {
  return (
    <Motion>
      <Box position="relative" borderRadius="0.5rem" overflow="hidden">
        <picture>
          <source
            media="(min-width: 62rem)"
            srcSet="/assets/home/desktop/image-speaker-zx7.jpg"
          />
          <source
            media="(min-width: 30rem)"
            srcSet="/assets/home/tablet/image-speaker-zx7.jpg"
          />
          <Image
            src="/assets/home/mobile/image-speaker-zx7.jpg"
            objectFit="cover"
            width="100%"
            alt="ZX7 Speakers"
          />
        </picture>
        <Box
          position="absolute"
          top="50%"
          left={{ base: "1.5rem", sm: "3.875rem", lg: "5.9375rem" }}
          transform="translateY(-50%)"
        >
          <Heading color="black" fontSize="1.75rem" mb="2rem">
            ZX7 Speaker
          </Heading>
          <Link
            as={NextLink}
            href="/speakers/zx7-speaker"
            _hover={{ textDecoration: "none" }}
          >
            <Button variant="secondary">See Product</Button>
          </Link>
        </Box>
      </Box>
    </Motion>
  );
};

export default ZX7Speaker;
