import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import HomePage from "@/components/templates/HomePage";
import CategoryTemplate from "@/components/templates/CategoryTemplate";
import { getStaticProps } from "@/pages/[category]/index";
import { GetStaticPropsContext } from "next";
import { ReduxWrapper } from "@/test_utils/ReduxWrapper";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("HomePage", () => {
  it("Should render the HomePage Template component", () => {
    render(<HomePage />);

    mockAllIsIntersecting(true);
    const products = screen.queryByText(
      "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
    );

    expect(products).toBeInTheDocument();
  });
});

describe("CategoryTemplate", () => {
  useRouter.mockImplementation(() => ({
    route: "/earphones",
    pathname: "/earphones",
    query: "",
    asPath: "",
  }));
  it("Should render the CategoryTemplate component", async () => {
    const context = {
      params: { category: "earphones", slug: "/earphones" },
    };
    const value: any = await getStaticProps(context as GetStaticPropsContext);
    const productItem = value.props.products;

    render(
      <ReduxWrapper>
        <CategoryTemplate products={productItem} />
      </ReduxWrapper>
    );

    const earphones = screen.getByAltText("YX1 Wireless Earphones");
    expect(earphones).toMatchInlineSnapshot(`
    <img
      alt="YX1 Wireless Earphones"
      class="chakra-image css-1pz0uuv"
      src="/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
    />
  `);
  });
});
