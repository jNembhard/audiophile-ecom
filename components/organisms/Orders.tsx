import { useEffect, useState } from "react";
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
  Show,
} from "@chakra-ui/react";
import ItemSummary from "@components/molecules/ItemSummary";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "@hooks/useAuth";

const Orders = () => {
  const [orders, setOrders]: any[] = useState([]);
  const [time, setTime]: any[] = useState({ date: [], time: [] });
  const { user } = useAuth();

  const readOrderData = async () => {
    try {
      const userDoc = doc(db, `users/${user.uid}/orders`, user?.email);
      await getDoc(userDoc).then((doc) => {
        if (doc.exists()) {
          setOrders(doc.data().basket.products);

          setTime({
            date: doc.data().timestamp.toDate().toLocaleDateString("en-US"),
            time: doc.data().timestamp.toDate().toLocaleTimeString(),
          });
          // console.log(doc.data().timestamp.toDate());
        }
      });

      // alert("Data retrieved from firestore!");
    } catch (error) {
      console.log(error);
      // alert(error);
    }
  };

  useEffect(() => {
    readOrderData();
  }, [user]);

  return (
    <Stack
      //   direction={{ base: "column", sm: "row" }}
      //   align={{ sm: "center" }}
      mt={{ base: "1.5rem", lg: "3.5rem" }}
      spacing={{ base: "2rem", lg: "7.75rem" }}
    >
      <Heading as="h2" textTransform="unset">
        Previous Orders ({orders.length >= 1 ? orders.length : 0})
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
                Orders
              </Heading>
            </Box>
            <Box textAlign="right">
              <Heading
                display="flex"
                flex="1"
                textAlign="right"
                as="h3"
                fontSize="0.9375rem"
                fontWeight="normal"
                letterSpacing="0.094rem"
                textTransform="unset"
              >
                {time.date}
                <Show breakpoint="(min-width: 48rem)">
                  &nbsp;
                  <Box>{time.time}</Box>
                </Show>
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <List
              as="ul"
              pt="1.5rem"
              px="1.5rem"
              pb={orders.length === 1 ? "1.5rem" : "0"}
              width="100%"
            >
              {orders?.map((order: any) => (
                <Box key={order.id} mt={orders.length <= 1 ? "0" : "0.4rem"}>
                  <ItemSummary item={order} />
                </Box>
              ))}
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default Orders;
