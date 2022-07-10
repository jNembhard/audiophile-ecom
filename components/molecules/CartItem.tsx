import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../../store/CartSlice";
import CartItemType from "../../interfaces/CartItem";
import { HStack, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import ProductQuantity from "../atoms/ProductQuantity";

type Props = { item: CartItemType };

const CartItem = (props: Props) => {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(increaseQuantity(props.item.id));
  };
  const decrement = () => {
    dispatch(decreaseQuantity(props.item.id));
  };

  return (
    <HStack as="li" align="center" listStyleType="none" justify="space-between">
      <HStack align="center" sx={{ img: { borderRadius: ".5rem" } }}>
        <Image src={props.item.cartImg} width={64} height={64} alt="" />
        <Box ml="1rem">
          <Text
            color="black"
            fontSize="0.9357rem"
            fontWeight="bold"
            textTransform="uppercase"
          >
            {props.item.shortName}
          </Text>
          <Text fontSize="0.875rem" fontWeight="bold">
            ${props.item.price.toLocaleString("en-US")}
          </Text>
        </Box>
      </HStack>
      <ProductQuantity
        quantity={props.item.quantity}
        increment={increment}
        decrement={decrement}
        width="6rem"
        height="2rem"
      />
    </HStack>
  );
};

export default CartItem;
