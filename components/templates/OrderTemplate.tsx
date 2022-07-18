import React from "react";
import { Box, Heading, Container } from "@chakra-ui/react";
import Orders from "@components/organisms/Orders";

const OrderTemplate = () => {
  return (
    <Box as="main" id="main">
      <Heading
        as="h1"
        bg="black"
        color="white"
        fontSize={["1.75rem", "2.5rem"]}
        letterSpacing={["0.125rem", "0.0894rem"]}
        textAlign="center"
        textTransform="uppercase"
        pt={["2rem", "6.5625rem"]}
        pb={["2rem", "6.0625rem"]}
      >
        orders
      </Heading>
      <Container maxW="container.lg" px={6}>
        <Orders />
      </Container>
    </Box>
  );
};

export default OrderTemplate;
