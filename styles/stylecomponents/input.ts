const Input = {
  baseStyle: {
    field: {
      fontWeight: "bold",
      borderRadius: "0.5rem",
      _placeholder: {
        color: "black",
      },
    },
  },
  sizes: {
    regular: {
      field: {
        pl: "1rem",
        py: "1rem",
        fontSize: ".875rem",
      },
    },
  },
  defaultProps: {
    size: "regular",
    focusBorderColor: "borderInput",
    errorBorderColor: "borderError",
  },
};

export default Input;
