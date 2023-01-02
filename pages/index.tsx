import type { NextPage } from "next";
import HomePage from "@components/templates/HomePage";
import NextHead from "@components/atoms/NextHead";

const Home: NextPage = () => {
  return (
    <>
      <NextHead
        title="Home"
        description="Audiophile is the premier store for high end headphones, earphones, speakers, and accessories. Browse our collection."
        type="webapp"
      />
      <HomePage />
    </>
  );
};

export default Home;
