import type { NextPage } from "next";
import NextHead from "@/components/atoms/NextHead";
import SignUp from "@/components/molecules/SignUp";

const LoginPage: NextPage = () => {
  return (
    <>
      <NextHead
        title="Sign Up"
        description="New to Audiophile? Sign Up and begin shopping!"
        type="webapp"
      />
      <SignUp />
    </>
  );
};

export default LoginPage;
