import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import { Provider } from "react-redux";
import store from "../store/index";
import CartContextProvider from "../store/CartContextProvider";
import CartModal from "../components/organisms/CartModal";
import FocusPortal from "../components/atoms/FocusPortal";
import CheckoutModal from "../components/organisms/CheckoutModal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Provider store={store}>
        <CartContextProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <CartModal />
          <FocusPortal />
          <CheckoutModal />
        </CartContextProvider>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
