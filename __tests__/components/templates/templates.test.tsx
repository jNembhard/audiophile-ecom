import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ChakraWrapper } from "../../../test_utlis_two/ChakraWrapper";
import { RenderWrapper } from "../../../test_utlis_two/RenderWrapper";
import { ReduxWrapper } from "../../../test_utlis_two/ReduxWrapper";
import HomeProductGallery from "@/components/organisms/HomeProductGallery";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

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
