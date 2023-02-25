import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import { ChakraWrapper } from "@/test_utils/MockWrappers";
import { mockNextUseRouter } from "@/test_utils/mock_router/mockrouter";
import { getStaticProps } from "@/pages/[category]/[slug]";
import { GetStaticPropsContext } from "next";
import ProductOthers from "@/components/organisms/ProductOthers";

describe("ProductOthers", () => {
  mockNextUseRouter({
    route: "/xx99-mark-one-headphones",
    pathname: "/xx99-mark-one-headphones",
    query: "xx99-mark-one-headphones",
    asPath: "",
  });

  test.each(["XX99 Mark II", "XX59", "ZX9 Speaker"])(
    "should render the ProductOthers and OtherProductLink Component",
    async (srcset) => {
      const context = {
        params: {
          category: "headphones",
          slug: "xx99-mark-one-headphones",
        },
      };
      const value: any = await getStaticProps(context as GetStaticPropsContext);
      const productResult = value.props.product.others;

      render(
        <ChakraWrapper>
          <ProductOthers other={productResult} />
        </ChakraWrapper>
      );

      mockAllIsIntersecting(true);

      const xx59 = screen.getByAltText(srcset);
      expect(xx59).toBeInTheDocument();
    }
  );
});
