import React, { useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Stack,
  Heading,
  List,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { clearCart, cartItems } from "@store/CartSlice";
import useCartTotals from "@hooks/useCartTotals";
import ItemSummary from "@components/molecules/ItemSummary";
import { db } from "../../firebase";

type Props = {};

const Orders = (props: Props) => {
  const items = useSelector(cartItems);

  return (
    <Stack
      //   direction={{ base: "column", sm: "row" }}
      //   align={{ sm: "center" }}
      mt={{ base: "1.5rem", lg: "3.5rem" }}
      spacing={{ base: "2rem", lg: "7.75rem" }}
    >
      <Heading as="h2" textTransform="unset">
        Previous Orders (1)
      </Heading>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Heading
                as="h3"
                fontSize="0.9375rem"
                fontWeight="bold"
                letterSpacing="0.094rem"
              >
                Section 1 title
              </Heading>
            </Box>
            <Box flex="1" textAlign="right">
              <Heading
                as="h3"
                fontSize="0.9375rem"
                fontWeight="normal"
                letterSpacing="0.094rem"
              >
                July 16, 2022
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <List
              as="ul"
              pt="1.5rem"
              px="1.5rem"
              pb={items.length === 1 ? "1.5rem" : "0"}
              width="100%"
            >
              {items.map((item) => (
                <ItemSummary key={item.id} item={item} />
              ))}
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default Orders;
