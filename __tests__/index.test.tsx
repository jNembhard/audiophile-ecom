import { render, screen } from "@testing-library/react";
import OrderTemplate from "@/components/templates/OrderTemplate";
import "@testing-library/jest-dom";

describe("Order Template", () => {
  it("should render the Index Page", () => {
    render(<OrderTemplate />);
    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
  });
});
