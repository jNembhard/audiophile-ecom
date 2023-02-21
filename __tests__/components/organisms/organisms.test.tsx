import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RenderWrapper } from "../../../test_utlis_two/RenderWrapper";
import HeroBanner from "@/components/organisms/HeroBanner";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import ProductLink from "@/components/molecules/ProductLink";
import ProductLinks from "@/components/organisms/ProductLinks";
import { ReduxWrapper } from "../../../test_utlis_two/ReduxWrapper";
import { FullRenderWrapper } from "../../../test_utlis_two/FullRenderWrapper";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

describe("Hero Banner", () => {
  it("should render the Hero Banner", () => {
    render(<HeroBanner />);
    const heading = screen.getByRole("heading");

    expect(heading).toHaveTextContent("XX99 Mark II Headphones");
  });
});

describe("Product Link", () => {
  it("should render a product link", () => {
    render(
      <ProductLink
        navimg="/assets/shared/desktop/image-category-thumbnail-headphones.png"
        text="Headphones"
        url="/headphones"
      />
    );
    const link = screen.getByAltText("Headphones");
    expect(link).toMatchInlineSnapshot(`
      <img
        alt="Headphones"
        aria-hidden="true"
        class="chakra-image css-qf5r57"
        src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
      />
    `);
  });
});

describe("Product Links", () => {
  it("should render the Product Links component", () => {
    render(
      <ReduxWrapper>
        <ProductLinks />
      </ReduxWrapper>
    );

    mockAllIsIntersecting(true);

    const link = screen.getByAltText("Earphones");
    expect(link).toMatchInlineSnapshot(`
      <img
        alt="Earphones"
        aria-hidden="true"
        class="chakra-image css-qf5r57"
        src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
      />
    `);
  });
});

describe("Footer", () => {
  it("should render the Footer component", () => {
    render(
      <ReduxWrapper>
        <Footer />
      </ReduxWrapper>
    );
    const date = new Date().getFullYear();
    const heading = screen.getByTestId("copyright");

    expect(heading).toHaveTextContent(`Copyright ${date}. All Rights Reserved`);
  });
});
