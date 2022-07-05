import HeroBanner from "../organisms/HeroBanner";
import { Container } from "@chakra-ui/react";
import ProductLinks from "../organisms/ProductLinks";
import HomeProductGallery from "../organisms/HomeProductGallery";

const HomePage = () => {
  return (
    <main id="main">
      <HeroBanner />
      <Container maxW="container.lg" px={6}>
        <ProductLinks />
        <HomeProductGallery />
      </Container>
    </main>
  );
};

export default HomePage;
