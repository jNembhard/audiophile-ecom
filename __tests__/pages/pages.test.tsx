import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  screen,
  queryByAttribute,
  getByTestId,
} from "@testing-library/react";
import { RenderWrapper } from "../../test_utlis_two/RenderWrapper";
import Home from "@/pages/index";

// const getById = queryByAttribute.bind(null, "id");

describe("Home", () => {
  it("should render the Index Page", () => {
    render(<Home />, { wrapper: RenderWrapper });
    const main = screen.getByTestId("home-page");

    expect(main).toBeInTheDocument();
  });
});
