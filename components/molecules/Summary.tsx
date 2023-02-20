import { Dispatch, SetStateAction, useEffect } from "react";
import {
  Box,
  Heading,
  List,
  Text,
  HStack,
  Image,
  Button,
} from "@chakra-ui/react";
import { cartItems } from "@/store/CartSlice";
import { useSelector } from "react-redux";
import useCartTotals from "@/hooks/useCartTotals";
import LineSummary from "./LineSummary";
import { SHIPPING_FEE } from "@/variables/rates";

const Summary = ({
  isDisabled,
  setIsDisabled,
}: {
  isDisabled: boolean;
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
}): JSX.Element => {
  const items = useSelector(cartItems);
  const { cartTotal, tax, grandTotal } = useCartTotals();

  useEffect(() => {
    setIsDisabled(items.length < 1);
  }, [items, setIsDisabled]);

  return (
    <Box
      position={{ lg: "sticky" }}
      top={{ lg: "1rem" }}
      bg="white"
      px={{ base: "1.5rem", sm: "2rem" }}
      py={{ base: "2rem" }}
      borderRadius="0.5rem"
      flexGrow={{ lg: 1 }}
    >
      <Heading fontSize={{ base: "1.125rem" }} letterSpacing="0.0806rem">
        Summary
      </Heading>
      {cartItems.length > 0 ? (
        <List as="ul" spacing="1.5rem" mt="2rem">
          {items.map((item) => (
            <HStack key={item.id} as="li" align="center" spacing="1.5rem">
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
                  <Text
                    fontSize="0.9375rem"
                    fontWeight="bold"
                    alignSelf="flex-start"
                  >
                    x{item.quantity}
                  </Text>
                </HStack>
                <Text fontSize="0.875rem" fontWeight="bold">
                  $ {item.price.toLocaleString("en-US")}
                </Text>
              </Box>
            </HStack>
          ))}
        </List>
      ) : (
        <Text fontWeight="bold" textAlign="center" mt="1.5rem">
          No items in cart
        </Text>
      )}
      <Box mt="2rem">
        <LineSummary name="total" amount={cartTotal} />
        <LineSummary name="shipping" amount={SHIPPING_FEE} />
        <LineSummary name="vat (included)" amount={tax} />
        <LineSummary
          name="Grand Total"
          amount={grandTotal}
          mt="1.5rem"
          grandTotal
        />
        <Button type="submit" width="100%" mt="2rem" aria-disabled={isDisabled}>
          Continue & Pay
        </Button>
      </Box>
    </Box>
  );
};

export default Summary;
