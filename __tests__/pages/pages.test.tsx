import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import { ReduxWrapper } from "@/test_utils/ReduxWrapper";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

describe("Home", () => {
  it("should render the Index Page", () => {
    render(
      <ReduxWrapper>
        <Home />
      </ReduxWrapper>
    );
    mockAllIsIntersecting(true);
    const text = screen.getByAltText("YX1 Earphones");

    expect(text).toBeInTheDocument();
  });
});
