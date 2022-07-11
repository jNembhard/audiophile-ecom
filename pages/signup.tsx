import React from "react";
import NextHead from "../components/atoms/NextHead";
import SignUp from "../components/molecules/SignUp";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <NextHead
        title="Sign Up"
        metaDescription="New to Audiophile? Sign Up and begin shopping!"
      />
      <SignUp />
    </>
  );
};

export default LoginPage;
