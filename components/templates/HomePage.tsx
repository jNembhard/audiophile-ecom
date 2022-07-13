import HeroBanner from "@components/organisms/HeroBanner";
import { Container } from "@chakra-ui/react";
import ProductLinks from "@components/organisms/ProductLinks";
import HomeProductGallery from "@components/organisms/HomeProductGallery";
import MotionAudioGear from "@components/organisms/MotionAudioGear";

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
