import type { NextPage } from "next";
import NextHead from "@components/atoms/NextHead";
import SignUp from "@components/molecules/SignUp";

const LoginPage: NextPage = () => {
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
