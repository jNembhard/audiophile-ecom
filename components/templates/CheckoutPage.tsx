import { Container } from "@chakra-ui/react";
import GoBackLink from "../atoms/GoBackLink";

const CheckoutPage = () => {
  return (
    <Container as="main" id="main" px={6} maxW="container.lg">
      <GoBackLink />
    </Container>
  );
};

export default CheckoutPage;
