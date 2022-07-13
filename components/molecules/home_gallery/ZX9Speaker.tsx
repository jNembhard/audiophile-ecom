import { Stack, Image, Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import Motion from "@components/organisms/Motion";

const ZX9Speaker = () => {
  return (
    <Motion>
      <Box backgroundColor="rawSienna" borderRadius="0.5rem">
        <Stack
          direction={{ base: "column", lg: "row" }}
          textAlign={{ base: "center", lg: "left" }}
          alignItems={{ base: "center", lg: "unset" }}
          pt={{ base: "3.4375rem", lg: "6rem" }}
          px={{ base: "1.5rem", lg: 0 }}
          pb={{ base: "3.4375rem", lg: 0 }}
          background="url(/assets/home/desktop/pattern-circles.svg) no-repeat"
          backgroundSize="cover"
          backgroundPosition={{
            base: "50% -8.125rem",
            md: "50% -16.125rem",
            lg: "-15rem -9.125rem",
          }}
          justifyContent={{ base: "unset", lg: "space-between" }}
          overflow="hidden"
        >
          <picture>
            <source
              media="(min-width: 62rem)"
              srcSet="/assets/home/desktop/image-speaker-zx9.png"
            />
            <source
              media="(min-width: 30rem)"
              srcSet="/assets/home/tablet/image-speaker-zx9.png"
            />
            <Image
              position="relative"
              src="/assets/home/mobile/image-speaker-zx9.png"
              width={["10.75rem", "12.3125rem", null, "25.625rem"]}
              objectFit="cover"
              mr={["auto"]}
              ml={{ base: "2rem", lg: "7.3125rem" }}
              mb={{ base: "2rem", lg: 0 }}
              alt="ZX-9 Speakers"
            />
          </picture>
          <Box
            pt={{ lg: "2rem" }}
            mr={{ lg: "8.625rem" }}
            marginInlineStart="0"
          >
            <Heading
              as="h2"
              color="white"
              fontSize={["2.25rem", "3rem"]}
              letterSpacing={["0.0806em", "0.125em"]}
              lineHeight="1"
              maxW={["22rem"]}
              mx={{ base: "auto", lg: "unset" }}
              mb="1.5rem"
            >
              ZX9 Speaker
            </Heading>
            <Text
              color="alabaster"
              fontSize="0.9375rem"
              fontWeight="thin"
              lineHeight="1.56"
              maxW={["30ch", "42ch", null, "38ch"]}
              mx={{ base: "auto", lg: "unset" }}
              mb={{ base: "4.0625rem", lg: "2.5rem" }}
            >
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </Text>
            <Link href="/speakers/zx9-speaker" passHref>
              <Button bg="black" _hover={{ bg: "#4C4C4C" }}>
                See Product
              </Button>
            </Link>
          </Box>
        </Stack>
      </Box>
    </Motion>
  );
};

export default ZX9Speaker;
