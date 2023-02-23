import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import { ReduxWrapper } from "@/test_utils/ReduxWrapper";
import { mockNextUseRouter } from "@/test_utils/mock_router/mockrouter";
import { getStaticProps } from "@/pages/[category]/index";
import { GetStaticPropsContext } from "next";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

describe("Home", () => {
  it("should render the Index Page", () => {
    render(
      <ReduxWrapper>
        <Home />
      </ReduxWrapper>
    );
    mockAllIsIntersecting(true);
    const home = screen.getByAltText("YX1 Earphones");

    expect(home).toBeInTheDocument();
  });
});

describe("CategoryRouter", () => {
  mockNextUseRouter({
    route: "/headphones",
    pathname: "/headphones",
    query: "headphones",
    asPath: "",
  });

  it("Should render selected static props for categories", async () => {
    const context = {
      params: { category: "headphones", slug: "/headphones" },
    };
    const value: any = await getStaticProps(context as GetStaticPropsContext);
    const routerText = value.props.products.find((val: any) => val.id === 4);

    expect(routerText.name).toBe("XX99 Mark II Headphones");
  });
});
