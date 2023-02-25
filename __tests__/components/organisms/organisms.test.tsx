import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import { ReduxWrapper } from "@/test_utils/ReduxWrapper";
import HeroBanner from "@/components/organisms/HeroBanner";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import ProductLink from "@/components/molecules/ProductLink";
import ProductLinks from "@/components/organisms/ProductLinks";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import MotionAudioGear from "@/components/organisms/MotionAudioGear";
import HomeProductGallery from "@/components/organisms/HomeProductGallery";
import { ChakraWrapper } from "@/test_utils/ChakraWrapper";
import { mockNextUseRouter } from "@/test_utils/mock_router/mockrouter";
import { getStaticProps } from "@/pages/[category]/index";
import { GetStaticPropsContext } from "next";
import ProductList from "@/components/organisms/ProductList";

// afterEach(cleanup);

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

const cases = ["YX1 Earphones", "ZX7 Speakers", "ZX-9 Speakers"];

describe("Home Product Gallery", () => {
  test.each(cases)(
    "should render all Earphone, Headphone, and Speaker components",
    (text) => {
      render(
        <ReduxWrapper>
          <HomeProductGallery />
        </ReduxWrapper>
      );

      mockAllIsIntersecting(true);
      const galleryItem = screen.getByAltText(text);

      expect(galleryItem).toBeInTheDocument();
    }
  );
});

jest.clearAllMocks();

describe("ProductList", () => {
  mockNextUseRouter({
    route: "/speakers",
    pathname: "/speakers",
    query: "speakers",
    asPath: "",
  });
  it("Should render the ProductList component and match the query category", async () => {
    const context = {
      params: { category: "speakers", slug: "/speakers" },
    };
    const value: any = await getStaticProps(context as GetStaticPropsContext);
    const result = value.props.products;

    render(
      <ChakraWrapper>
        <ProductList products={result} />
      </ChakraWrapper>
    );

    const productItem = screen.getByAltText("ZX9 Speaker");
    expect(productItem).toMatchInlineSnapshot(`
      <img
        alt="ZX9 Speaker"
        class="chakra-image css-1pz0uuv"
        src="/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
      />
    `);
  });
});

describe("Motion AudioGear", () => {
  it("should render the Motion AudioGear component and AudioGear subcomponent", () => {
    render(<MotionAudioGear />);

    mockAllIsIntersecting(true);

    const image = screen.getByAltText(
      "A boy enjoying headphones from audiophile"
    );
    expect(image).toBeInTheDocument();
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
