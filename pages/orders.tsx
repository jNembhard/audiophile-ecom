import type { NextPage } from "next";
import NextHead from "@components/atoms/NextHead";
import OrderTemplate from "@components/templates/OrderTemplate";

const OrderPage: NextPage = () => {
  return (
    <>
      <NextHead
        title="Orders"
        metaDescription="View all of your past orders on Audiophile's website."
      />
      <OrderTemplate />
    </>
  );
};

export default OrderPage;
