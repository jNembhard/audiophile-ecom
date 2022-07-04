import { extendTheme } from "@chakra-ui/react";
import Button from "./stylecomponents/button";
import Input from "./stylecomponents/input";
import Text from "./stylecomponents/text";

const theme = extendTheme({
  colors: {
    alabaster: "#FAFAFA",
    black: "#000000",
    onyx: "#101010",
    lightGrey: "#d3d3d3",
    peach: "#FBAF85",
    rawSienna: "#D87D4A",
    seashell: "#F1F1F1",
    white: "#FFFFFF",
    divider: "rgba(255,255,255,0.1)",
    borderInput: "#CFCFCF",
    borderError: "#CD2C2C",
  },
  fonts: { heading: `'Manrope', sans-serif`, body: `'Manrope', sans-serif` },
  sizes: { container: { lg: "72.375rem" } },
  components: { Button, Input, Text },
  styles: {
    global: {
      body: {
        bg: "bg",
        color: "black",
      },
      "h1, h2,h3": {
        textTransform: "uppercase",
      },
      ul: {
        listStyleType: "none",
      },
      "a:focus, button:focus": {
        outline: "2px dashed red",
        outlineOffset: "4px",
      },
      "a:focus:not(:focus-visible), button:focus:not(:focus-visible)": {
        outline: "none",
      },
    },
  },
});

export default theme;
