import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";

export const ChakraWrapper = ({ children }: { children: ReactNode }) => (
  <ChakraProvider theme={theme} resetCSS>
    {children}
  </ChakraProvider>
);
