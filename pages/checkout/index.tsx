import Head from "next/head";
import { Box } from "@chakra-ui/react";

import CheckoutPageTemplate from "../../components/templates/CheckoutPageTemplate";
import NextHead from "../../components/atoms/NextHead";

const CheckoutPage = (): JSX.Element => {
  return (
    <>
      <NextHead
        title="Checkout"
        metaDescription="You're almost there! Fill out the form and enjoy your new Audiophile products."
      />
      <Box bg="alabaster">
        <CheckoutPageTemplate />
      </Box>
    </>
  );
};

export default CheckoutPage;
