import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
import { Provider } from "react-redux";
import store from "@/store/index";
import CartContextProvider from "@/store/CartContextProvider";
import { AuthContextProvider } from "@/hooks/useAuth";
import CartModal from "@/components/organisms/CartModal";
import FocusPortal from "@/components/atoms/FocusPortal";
import CheckoutModal from "@/components/organisms/CheckoutModal";

const AuthenticationWrapper = ({ children }: { children: ReactNode }) => (
  <ChakraProvider theme={theme} resetCSS>
    <Provider store={store}>
      <CartContextProvider>
        <AuthContextProvider>{children}</AuthContextProvider>
      </CartContextProvider>
    </Provider>
  </ChakraProvider>
);

const ChakraWrapper = ({ children }: { children: ReactNode }) => (
  <ChakraProvider theme={theme} resetCSS>
    {children}
  </ChakraProvider>
);

const FullRenderWrapper = ({ children }: { children: ReactNode }) => (
  <ChakraProvider theme={theme} resetCSS>
    <Provider store={store}>
      <CartContextProvider>
        <AuthContextProvider>
          {children}
          <CartModal />
          <FocusPortal />
          <CheckoutModal />
        </AuthContextProvider>
      </CartContextProvider>
    </Provider>
  </ChakraProvider>
);

const ReduxWrapper = ({ children }: { children: ReactNode }) => (
  <ChakraProvider theme={theme} resetCSS>
    <Provider store={store}>{children}</Provider>
  </ChakraProvider>
);

export {
  AuthenticationWrapper,
  ChakraWrapper,
  FullRenderWrapper,
  ReduxWrapper,
};
