import { Fragment } from "react";
import type { NextPage } from "next";
import NextHead from "@/components/atoms/NextHead";
import OrderTemplate from "@/components/templates/OrderTemplate";

const OrderPage: NextPage = () => {
  return (
    <Fragment data-testid="order-page">
      <NextHead
        title="Orders"
        description="View all of your past orders on Audiophile's website."
        type="webapp"
      />
      <OrderTemplate />
    </Fragment>
  );
};

export default OrderPage;
