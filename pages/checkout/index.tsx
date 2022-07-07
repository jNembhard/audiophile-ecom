import Head from "next/head";
import { Box } from "@chakra-ui/react";

import CheckoutPageTemplate from "../../components/templates/CheckoutPageTemplate";

const CheckoutPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Checkout | Audiophile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg="alabaster">
        <CheckoutPageTemplate />
      </Box>
    </>
  );
};

export default CheckoutPage;
