import { Box } from "@chakra-ui/react";

type Props = { children: React.ReactNode };
const Legend = (props: Props) => {
  return (
    <Box
      as="legend"
      fontSize="0.8125rem"
      fontWeight="bold"
      letterSpacing="0.0581rem"
      color="rawSienna"
      textTransform="uppercase"
      mb="1rem"
    >
      {props.children}
    </Box>
  );
};

export default Legend;
