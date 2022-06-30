import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    alabaster: "#FAFAFA",
    black: "#000000",
    onyx: "#101010",
    peach: "#FBAF85",
    rawSienna: "#D87D4A",
    seashell: "#F1F1F1",
    white: "#FFFFFF",
    borderInput: "#CFCFCF",
    borderError: "#CD2C2C",
  },
  styles: {
    global: {
      body: { bg: "bg", color: "black" },
      "h1, h2,h3": { textTransform: "uppercase" },
      ul: { listStyleType: "none" },
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
