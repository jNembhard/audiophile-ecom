import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import CheckoutPageTemplate from "@components/templates/CheckoutPageTemplate";
import NextHead from "@components/atoms/NextHead";

const CheckoutPage: NextPage = () => {
  return (
    <>
      <NextHead
        title="Checkout"
        description="You're almost there! Fill out the form and enjoy your new Audiophile products."
        type="webapp"
      />
      <Box bg="alabaster">
        <CheckoutPageTemplate />
      </Box>
    </>
  );
};

export default CheckoutPage;
