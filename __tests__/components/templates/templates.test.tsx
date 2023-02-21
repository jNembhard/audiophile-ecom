import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RenderWrapper } from "@/test_utils/RenderWrapper";
import HomePage from "@/components/templates/HomePage";

describe("Home", () => {
  it("should render the Index Page", () => {
    render(<HomePage />, { wrapper: RenderWrapper });
    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
  });
});
