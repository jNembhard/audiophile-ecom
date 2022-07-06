import React from "react";
import { Flex, Button as ChakraButton, Center } from "@chakra-ui/react";

type Props = {
  quantity: number;
  increment: () => void;
  decrement: () => void;
  width: string;
  height: string;
};

const ProductQuantity = (props: Props) => {
  return (
    <Flex
      width={props.width}
      height={props.height}
      alignItems="center"
      bg="lightGrey"
    >
      <Button handleClick={props.decrement} sign="-" />
      <Center fontSize="0.8125rem" fontWeight="bold" width="20%">
        {props.quantity}
      </Center>
      <Button handleClick={props.increment} sign="+" />
    </Flex>
  );
};

type ButtonProps = { handleClick: () => void; sign: string };

const Button = (props: ButtonProps) => {
  return (
    <ChakraButton
      onClick={props.handleClick}
      fontSize="0.9375rem"
      fontWeight="bold"
      color="rgba(0,0,0,0.5)"
      width="40%"
      height="100%"
      p="0"
      bg="transparent"
      _hover={{ bg: "lightGrey", color: "rawSienna" }}
    >
      {props.sign}
    </ChakraButton>
  );
};

export default ProductQuantity;
