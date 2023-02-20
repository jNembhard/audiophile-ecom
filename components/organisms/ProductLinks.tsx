import React from "react";
import { Stack } from "@chakra-ui/react";
import { navlinks } from "@/utils/navLinks";
import ProductLink from "@/components/molecules/ProductLink";
import Motion from "./Motion";

const ProductLinks = () => {
  return (
    <Motion>
      <Stack
        as="ul"
        direction={["column", "row"]}
        mt={["5.75rem", "9.25rem", "12.5rem"]}
        spacing={["4rem", "0.625rem", null, "1.875rem"]}
      >
        {navlinks.slice(1).map((navlink) => (
          <ProductLink key={navlink.id} {...navlink} />
        ))}
      </Stack>
    </Motion>
  );
};

export default ProductLinks;
