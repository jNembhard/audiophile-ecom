import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import { ReduxWrapper } from "@/test_utils/MockWrappers";
import { mockNextUseRouter } from "@/test_utils/mock_router/mockrouter";
import { getStaticProps } from "@/pages/[category]/index";
import { GetStaticPropsContext } from "next";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import { AuthContext } from "@/hooks/useAuth";
import { act } from "react-dom/test-utils";
import LoginPage from "@/pages/login";

describe("Home", () => {
  it("should render the Index Page", () => {
    render(
      <ReduxWrapper>
        <Home />
      </ReduxWrapper>
    );
    mockAllIsIntersecting(true);
    const home = screen.getByAltText("YX1 Earphones");

    expect(home).toBeInTheDocument();
  });
});

describe("CategoryRouter", () => {
  mockNextUseRouter({
    route: "/headphones",
    pathname: "/headphones",
    query: "headphones",
    asPath: "",
  });

  it("Should render selected static props for categories", async () => {
    const context = {
      params: { category: "headphones", slug: "/headphones" },
    };
    const value: any = await getStaticProps(context as GetStaticPropsContext);
    const routerText = value.props.products.find((val: any) => val.id === 4);

    expect(routerText.name).toBe("XX99 Mark II Headphones");
  });
});

const user = jest.fn();
const signUp = jest.fn();
const login = jest.fn();
const logout = jest.fn();

describe("Login", () => {
  it("should render login components", async () => {
    act(() => {
      render(
        <ReduxWrapper>
          <AuthContext.Provider value={{ user, login, signUp, logout }}>
            <LoginPage />
          </AuthContext.Provider>
        </ReduxWrapper>
      );
    });

    await act(async () => {
      const loginButton = screen.getByRole("button");
      const signupText = screen.getByText("Sign Up");

      expect(loginButton).toHaveTextContent("Login");
      expect(signupText).toBeInTheDocument();
    });
  });
});

jest.clearAllMocks();
