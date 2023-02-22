import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomeProductGallery from "@/components/organisms/HomeProductGallery";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import HomePage from "@/components/templates/HomePage";

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
