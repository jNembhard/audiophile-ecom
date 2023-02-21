import type { NextPage } from "next";
import { Fragment } from "react";
import HomePage from "@/components/templates/HomePage";
import NextHead from "@/components/atoms/NextHead";

const Home: NextPage = () => {
  return (
    <Fragment data-testid="home-page">
      <NextHead
        title="Home"
        description="Audiophile is the premier store for high end headphones, earphones, speakers, and accessories. Browse our collection."
        type="webapp"
      />
      <HomePage />
    </Fragment>
  );
};

export default Home;
