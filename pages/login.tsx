import React from "react";
import NextHead from "../components/atoms/NextHead";
import LoginForm from "../components/molecules/LoginForm";
import Login from "../components/organisms/users/Login";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <NextHead
        title="Login"
        metaDescription="login to your account to track orders"
      />
      <LoginForm />
    </>
  );
};

export default LoginPage;
