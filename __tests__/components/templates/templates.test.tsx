import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ChakraWrapper } from "../../../test_utlis_two/ChakraWrapper";
import { RenderWrapper } from "../../../test_utlis_two/RenderWrapper";
import HomePage from "@/components/templates/HomePage";

jest.mock("../../../components/organisms/ProductLinks", () => {
  return <div data-testid="product-links" />;
});

jest.mock("@/components/organisms/HomeProductGallery", () => (
  <div data-testid="gallery" />
));
jest.mock("@/components/organisms/MotionAudioGear", () => (
  <div data-testid="audio-gear" />
));
describe("HomePage", () => {
  it("should render the HomePage Template", () => {
    // render(<HomePage />, { wrapper: ChakraWrapper });
    render(
      <RenderWrapper>
        <HomePage />
      </RenderWrapper>
    );

    const products = screen.getByTestId("product-links");
    // const audioGear = screen.getByTestId("audio-gear");

    expect(products).toBeInTheDocument();
    // expect(gallery).toBeInTheDocument();
    // expect(audioGear).toBeInTheDocument();
  });
});
