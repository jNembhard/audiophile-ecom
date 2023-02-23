import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { mockNextUseRouter } from "@/test_utils/mock_router/mockrouter";
import { getStaticProps } from "@/pages/[category]/index";
import { GetStaticPropsContext } from "next";
import { ChakraWrapper } from "@/test_utils/ChakraWrapper";
import ProductListItem from "@/components/molecules/ProductListItem";

describe("ProductListItem", () => {
  mockNextUseRouter({
    route: "/speakers",
    pathname: "/speakers",
    query: "speakers",
    asPath: "",
  });
  it("Should render the CategoryTemplate component and match the query category", async () => {
    const context = {
      params: { category: "speakers", slug: "/speakers" },
    };
    const value: any = await getStaticProps(context as GetStaticPropsContext);
    const result = value.props.products.find((val: any) => val.id === 6);

    render(
      <ChakraWrapper>
        <ProductListItem key={result.id} {...result} />
      </ChakraWrapper>
    );
    const test = screen.getByText("See Product");
    expect(test).toBeInTheDocument();
  });
});
