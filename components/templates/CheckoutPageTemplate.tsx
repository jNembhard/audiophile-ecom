import { Container } from "@chakra-ui/react";
import GoBackLink from "../atoms/GoBackLink";
import Form from "../organisms/Form";

const CheckoutPageTemplate = () => {
  return (
    <Container as="main" id="main" px={6} maxW="container.lg">
      <GoBackLink />
      <Form />
    </Container>
  );
};

export default CheckoutPageTemplate;
