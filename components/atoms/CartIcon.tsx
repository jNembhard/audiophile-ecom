import { Button, Center } from "@chakra-ui/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useCartModal } from "../../store/CartContextProvider";
import { totalQuantity } from "../../store/CartSlice";

const CartIcon = () => {
  const { onCartModalOpen } = useCartModal();
  const quantity = useSelector(totalQuantity);
  return (
    <Button
      bg="transparent"
      position="relative"
      border="none"
      p="0"
      aria-label="Open Cart"
      _hover={{ bg: "transparent" }}
      fontWeight="normal"
      onClick={onCartModalOpen}
    >
      <Image
        src="/assets/shared/desktop/icon-cart.svg"
        width={23}
        height={21}
        aria-hidden="true"
        alt=""
      />
      {!!quantity && (
        <Center
          as="span"
          p="0.6rem"
          position="absolute"
          top="-1rem"
          bottom="-0.75rem"
          left="1rem"
          bg="rawSienna"
          width="1rem"
          height="1rem"
          fontSize=".8125rem"
          borderRadius="50%"
          color="white"
        >
          {quantity}
        </Center>
      )}
    </Button>
  );
};

export default CartIcon;
