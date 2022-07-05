import { VStack } from "@chakra-ui/react";
import YX1Earphones from "../molecules/home_gallery/YX1Earphones";
import ZX7Speaker from "../molecules/home_gallery/ZX7Speaker";
import ZX9Speaker from "../molecules/home_gallery/ZX9Speaker";

const HomeProductGallery = () => {
  return (
    <VStack
      mt="7.5rem"
      align="stretch"
      spacing={{ base: "1.5rem", sm: "2rem", lg: "3rem" }}
    >
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
    </VStack>
  );
};

export default HomeProductGallery;
