import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { Provider } from "react-redux";
import store from "../store/index";
import CartContextProvider from "../store/CartContextProvider";
import { AuthContextProvider } from "../hooks/useAuth";

export const RenderWrapper = ({ children }: { children: ReactNode }) => (
  <ChakraProvider theme={theme} resetCSS>
    <Provider store={store}>
      <CartContextProvider>
        {children}
        <AuthContextProvider>{children}</AuthContextProvider>
      </CartContextProvider>
    </Provider>
  </ChakraProvider>
);
