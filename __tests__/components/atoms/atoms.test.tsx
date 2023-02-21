import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SkipLink from "@/components/atoms/SkipLink";

describe("Skip Link", () => {
  it("should render the Skip Link", () => {
    render(<SkipLink />);
    const link = screen.getByTestId("skip-link");

    expect(link).toHaveTextContent("Skip to content");
  });
});
