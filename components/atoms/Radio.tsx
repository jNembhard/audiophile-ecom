import { Box, useRadio, UseRadioProps, Center } from "@chakra-ui/react";

interface Props extends UseRadioProps {
  children: React.ReactNode;
}

const Radio: React.FC<Props> = (props): JSX.Element => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box
      as="label"
      fontSize="0.875rem"
      fontWeight="bold"
      display="block"
      position="relative"
      border="1px solid"
      borderColor="inputBorder"
      borderRadius="0.5rem"
      py="1rem"
      pl="3.25rem"
      mb="1rem"
      cursor="pointer"
      sx={{
        "input:checked + div:after": { transform: "scale(1)" },
        "&:focus-within": { borderColor: "rawSienna" },
      }}
    >
      <input {...input} />
      <Center
        {...checkbox}
        width="20px"
        height="20px"
        border="1px solid"
        borderColor="inputBorder"
        borderRadius="50%"
        position="absolute"
        left="1rem"
        _after={{
          content: "''",
          position: "absolute",
          bg: "rawSienna",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          transform: "scale(0)",
          transition: "transform 0.3s linear",
        }}
      ></Center>
      {props.children}
    </Box>
  );
};

export default Radio;
