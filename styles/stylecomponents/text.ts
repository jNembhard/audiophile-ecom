const Text = {
  baseStyle: {
    fontWeight: "normal",
    lineHeight: "1.5",
  },
  sizes: {
    regular: {
      fontSize: ".9375rem",
    },
  },
  variants: {
    lightBackground: {
      color: "onyx",
    },
    darkBackground: {
      color: "seashell",
    },
  },
  defaultProps: {
    variant: "lightBackground",
    size: "regular",
  },
};

export default Text;
