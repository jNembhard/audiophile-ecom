import { HStack } from "@chakra-ui/react";
import CartIcon from "../atoms/CartIcon";
import LogoutLink from "../atoms/LogoutLink";

const CartLogin = () => {
  return (
    <HStack spacing="1rem">
      <LogoutLink base="none" />
      <CartIcon />
    </HStack>
  );
};

export default CartLogin;
