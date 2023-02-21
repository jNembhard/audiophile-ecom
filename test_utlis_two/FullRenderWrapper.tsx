import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
import { Provider } from "react-redux";
import store from "@/store/index";
import CartContextProvider from "@/store/CartContextProvider";
import { AuthContextProvider } from "@/hooks/useAuth";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import CartModal from "@/components/organisms/CartModal";
import FocusPortal from "@/components/atoms/FocusPortal";
import CheckoutModal from "@/components/organisms/CheckoutModal";

export const FullRenderWrapper = ({ children }: { children: ReactNode }) => (
  <ChakraProvider theme={theme} resetCSS>
    <Provider store={store}>
      <CartContextProvider>
        <AuthContextProvider>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
          <CartModal />
          <FocusPortal />
          <CheckoutModal />
        </AuthContextProvider>
      </CartContextProvider>
    </Provider>
  </ChakraProvider>
);
