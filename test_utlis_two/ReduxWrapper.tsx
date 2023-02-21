import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { Provider } from "react-redux";
import store from "../store/index";

export const ReduxWrapper = ({ children }: { children: ReactNode }) => (
  <ChakraProvider theme={theme} resetCSS>
    <Provider store={store}>{children}</Provider>
  </ChakraProvider>
);
