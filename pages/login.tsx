import React from "react";
import NextHead from "@components/atoms/NextHead";
import Login from "@components/organisms/users/Login";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <NextHead
        title="Login"
        metaDescription="login to your account to track orders"
      />
      <Login />
    </>
  );
};

export default LoginPage;
