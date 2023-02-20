import { Box, HStack, Image, Text } from "@chakra-ui/react";
import CartItem from "@/interfaces/CartItem";

type Props = { item: CartItem };

const ItemSummary = (props: Props) => {
  const { item } = props;

  return (
    <HStack
      key={item.id}
      as="li"
      position="relative"
      align="center"
      spacing="0.5rem"
      width="100%"
      sx={{
        "&:last-child:not(:first-of-type)::after": {
          content: "''",
          position: "absolute",
          bg: "rgba(0,0,0,0.1)",
          width: "100%",
          height: "0.0625rem",
          left: 0,
          bottom: "-0.5rem",
        },
      }}
    >
      <Image
        src={item.cartImg}
        borderRadius="0.5rem"
        boxSize="4rem"
        alt={item.shortName}
      />
      <Box width="100%">
        <HStack justify="space-between" width="100%">
          <Text
            fontSize="0.9375rem"
            fontWeight="bold"
            textTransform="uppercase"
            color="black"
          >
            {item.shortName}
          </Text>
          <Text fontSize="0.9375rem" fontWeight="bold" alignSelf="flex-start">
            x{item.quantity}
          </Text>
        </HStack>
        <Text fontSize="0.875rem" fontWeight="bold">
          $ {item.price.toLocaleString("en-US")}
        </Text>
      </Box>
    </HStack>
  );
};

export default ItemSummary;
