import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import SkipLink from "@/components/atoms/SkipLink";
import NextHead from "@/components/atoms/NextHead";

describe("Seo", () => {
  it("should render the Seo component", () => {
    render(
      <NextHead
        title="Home"
        description="Audiophile is the premier store for high end headphones, earphones, speakers, and accessories. Browse our collection."
        type="webapp"
      />,
      { container: document.head }
    );
    waitFor(() => {
      expect(document.title).toBe("Home | Audiophile");
    });
  });
});

describe("Skip Link", () => {
  it("should render the Skip Link", () => {
    render(<SkipLink />);
    const link = screen.getByTestId("skip-link");

    expect(link).toHaveTextContent("Skip to content");
  });
});
