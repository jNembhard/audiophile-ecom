import type { NextPage } from "next";
import NextHead from "@components/atoms/NextHead";
import Login from "@components/organisms/users/Login";

const LoginPage: NextPage = () => {
  return (
    <>
      <NextHead
        title="Login"
        metaDescription="Login to your account to track orders"
      />
      <Login />
    </>
  );
};

export default LoginPage;
