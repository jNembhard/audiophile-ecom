import { Text, HStack } from "@chakra-ui/react";

type Props = {
  name: string;
  amount: number;
  [props: string]: unknown;
  grandTotal?: boolean;
};

const LineSummary: React.FC<Props> = (props) => {
  const { name, amount, grandTotal = false, ...other } = props;

  return (
    <HStack justify="space-between" {...other}>
      <Text as="dt" textTransform="uppercase" color="onyx">
        {name}
      </Text>
      <Text
        as="dd"
        fontSize="1.125rem"
        fontWeight="bold"
        textTransform="uppercase"
        color={grandTotal ? "rawSienna" : "black"}
      >
        $ {amount.toLocaleString("en-US")}
      </Text>
    </HStack>
  );
};

export default LineSummary;
