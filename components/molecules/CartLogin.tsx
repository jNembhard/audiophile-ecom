import { HStack } from "@chakra-ui/react";
import CartIcon from "@components/atoms/CartIcon";
import LogoutLink from "@components/atoms/LogoutLink";

const CartLogin = () => {
  return (
    <HStack spacing="1rem">
      <LogoutLink base="none" />
      <CartIcon />
    </HStack>
  );
};

export default CartLogin;
