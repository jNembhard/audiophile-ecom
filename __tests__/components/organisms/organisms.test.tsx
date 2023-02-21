import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RenderWrapper } from "@/test_utils/RenderWrapper";
import HeroBanner from "@/components/organisms/HeroBanner";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

describe("Hero Banner", () => {
  it("should render the Hero Banner", () => {
    render(<HeroBanner />);
    const heading = screen.getByRole("heading");

    expect(heading).toHaveTextContent("XX99 Mark II Headphones");
  });
});

describe("Header", () => {
  it("should render the Header component", () => {
    render(<Header />, { wrapper: RenderWrapper });
    const heading = screen.getByRole("header");

    expect(heading).toBeInTheDocument();
  });
});

describe("Footer", () => {
  it("should render the Header component", () => {
    // render(<Footer />, { wrapper: RenderWrapper });
    render(<Footer />);
    const date = new Date().getFullYear();
    const heading = screen.getByText(
      "Audiophile is an all in one stop to fulfill your audiohw"
    );

    expect(heading).toBeInTheDocument();
  });
});
