import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import { ChakraWrapper } from "@/test_utils/ChakraWrapper";
import { mockNextUseRouter } from "@/test_utils/mock_router/mockrouter";
import { getStaticProps } from "@/pages/[category]/[slug]";
import { GetStaticPropsContext } from "next";
import ProductGallery from "@/components/molecules/ProductGallery";
import ProductFeatures from "@/components/molecules/ProductFeatures";
import { IncludedItem } from "@/interfaces/Product";

describe("ProductGallery", () => {
  mockNextUseRouter({
    route: "/xx99-mark-one-headphones",
    pathname: "/xx99-mark-one-headphones",
    query: "xx99-mark-one-headphones",
    asPath: "",
  });

  it("should render the ProductGallery Component", async () => {
    const context = {
      params: {
        category: "headphones",
        slug: "xx99-mark-one-headphones",
      },
    };
    const value: any = await getStaticProps(context as GetStaticPropsContext);
    const productGallery = value.props.product.gallery;
    console.log(productGallery);

    render(
      <ChakraWrapper>
        <ProductGallery {...productGallery} />
      </ChakraWrapper>
    );

    mockAllIsIntersecting(true);

    const xx59Headphones = [
      "XX99 Mark I Headphones-1",
      "XX99 Mark I Headphones-2",
      "XX99 Mark I Headphones-3",
    ];

    xx59Headphones.forEach((xx59Headphone) => {
      const headphones = screen.getByAltText(xx59Headphone);
      expect(headphones).toBeInTheDocument();
    });
  });
});

describe("ProductFeatures", () => {
  mockNextUseRouter({
    route: "/xx99-mark-one-headphones",
    pathname: "/xx99-mark-one-headphones",
    query: "xx99-mark-one-headphones",
    asPath: "",
  });

  it("should render the ProductFeature Component with dynamic data", async () => {
    const context = {
      params: {
        category: "headphones",
        slug: "xx99-mark-one-headphones",
      },
    };
    const value: any = await getStaticProps(context as GetStaticPropsContext);
    const features = value.props.product.features;
    const includedItems = value.props.product.includedItems;

    render(
      <ChakraWrapper>
        <ProductFeatures features={features} includedItems={includedItems} />
      </ChakraWrapper>
    );

    mockAllIsIntersecting(true);

    const xx99Text =
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.";

    const xx99Items: IncludedItem[] = [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
    ];

    const featureText = screen.getByLabelText(/Features/);
    expect(featureText).toHaveTextContent(xx99Text);

    xx99Items.forEach((xx99Item: IncludedItem) => {
      let item = screen.getByText(xx99Item.item);
      let quantity = screen.getAllByText(
        `${xx99Item.quantity}x`
      )[0] as HTMLSpanElement;

      expect(item).toBeInTheDocument();
      expect(quantity).toMatchSnapshot(`<span class="css-1vroocg">1x</span>`);
    });
  });
});
