import HeroBanner from "../organisms/HeroBanner";
import { Container } from "@chakra-ui/react";
import ProductLinks from "../organisms/ProductLinks";
import HomeProductGallery from "../organisms/HomeProductGallery";
import MotionAudioGear from "../organisms/MotionAudioGear";

const HomePage = () => {
  return (
    <main id="main">
      <HeroBanner />
      <Container maxW="container.lg" px={6}>
        <ProductLinks />
        <HomeProductGallery />
        <MotionAudioGear />
      </Container>
    </main>
  );
};

export default HomePage;
