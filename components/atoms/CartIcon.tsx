import { Button, Center } from "@chakra-ui/react";
import Image from "next/image";

type Props = {};

const CartIcon = (props: Props) => {
  return (
    <Button
      bg="transparent"
      position="relative"
      border="none"
      p="0"
      aria-label="Open Cart"
      _hover={{ bg: "transparent" }}
      fontWeight="normal"
    >
      <Image
        src="/assets/shared/desktop/icon-cart.svg"
        width={23}
        height={21}
        aria-hidden="true"
        alt=""
      />
      <Center
        as="span"
        p="0.6rem"
        position="absolute"
        top="-0.375rem"
        bottom="-0.75rem"
        left="1.5625rem"
        bg="rawSienna"
        width="1rem"
        height="1rem"
        fontSize=".8125rem"
        borderRadius="50%"
        color="white"
      >
        3
      </Center>
    </Button>
  );
};

export default CartIcon;
