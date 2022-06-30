const Button = {
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: 0,
    letterSpacing: ".0625rem",
  },
  sizes: { regular: { px: 8, py: 3.5, fontSize: ".8125rem" } },
  variants: {
    primary: {
      bg: "rawSienna",
      color: "white",
      _hover: {
        bg: "peach",
      },
      _disabled: {
        bg: "rawSienna",
      },
      ":hover[disabled]": {
        bg: "rawSienna",
      },
      "hover[aria-disabled='true']": {
        bg: "rawSienna",
      },
    },
    secondary: {
      bg: "transparent",
      color: "black",
      border: "1px solid black",
      _hover: { bg: "black", color: "white" },
    },
    link: {
      background: "transparent",
      border: "none",
      color: "onyx",
      padding: "0",
      fontWeight: "normal",
      _hover: {
        background: "transparent",
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
  },
  defaultProps: {
    variant: "primary",
    size: "regular",
  },
};

export default Button;
