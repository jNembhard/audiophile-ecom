import { Box, Image, Heading, Text, Stack } from "@chakra-ui/react";

const AudioGear = () => {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      textAlign={{ base: "center", lg: "left" }}
      alignItems={{ lg: "center" }}
      mt="7.5rem"
      spacing={{ base: "2.5rem", lg: 0 }}
    >
      <Box as="picture" flex="1" order={{ lg: 1 }} ml={{ lg: "1.875rem" }}>
        <source
          media="(min-width:62rem)"
          srcSet="/assets/shared/mobile/image-best-gear.jpg"
        />
        <source
          media="(min-width:62rem)"
          srcSet="/assets/shared/mobile/image-best-gear.jpg"
        />
        <Image
          src="/assets/shared/mobile/image-best-gear.jpg"
          objectFit="cover"
          width="100%"
          borderRadius="0.5rem"
          alt="A boy enjoying headphones from audiophile"
        />
      </Box>

      <Box flex="1" marginStart={{ lg: 0 }}>
        <Heading
          as="h2"
          fontSize={{ base: "1.75rem", sm: "2.5rem" }}
          letterSpacing="0.0894rem"
          textTransform="uppercase"
          maxW={{ base: "20ch", sm: "25ch", lg: "22ch" }}
          mb={{ base: "2rem", sm: "2.5rem" }}
        >
          Bringing you the{" "}
          <Box as="span" color="rawSienna">
            best
          </Box>{" "}
          audio gear
        </Heading>
        <Text
          px={{ sm: "2rem", md: "6rem", lg: 0 }}
          pr={{ lg: "3rem" }}
          color="gray"
        >
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers,and audio accessories. We
          have a large showroom and luxury demonstration rooms available for you
          to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Text>
      </Box>
    </Stack>
  );
};

export default AudioGear;
