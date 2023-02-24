import { useEffect } from "react";
import type { NextPage } from "next";
import NextHead from "@/components/atoms/NextHead";
import Login from "@/components/organisms/users/Login";

const LoginPage: NextPage = () => {
  return (
    <>
      <NextHead
        title="Login"
        description="Login to your account to track orders"
        type="webapp"
      />
      <Login />
    </>
  );
};

export default LoginPage;
