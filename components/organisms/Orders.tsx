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
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { cartItems } from "@store/CartSlice";
import ItemSummary from "@components/molecules/ItemSummary";
import { db } from "../../firebase";
import {
  getDocs,
  onSnapshot,
  collection,
  orderBy,
  setDoc,
  query,
  doc,
  getDoc,
} from "firebase/firestore";
import { useAuth } from "@hooks/useAuth";

const Orders = () => {
  const [orders, setOrders]: any[] = useState([]);
  const items = useSelector(cartItems);
  const { user } = useAuth();
  const userDoc = doc(db, `users/${user.uid}/orders`, user?.email);

  const readOrderData = async () => {
    try {
      await getDoc(userDoc).then((doc) => {
        if (doc.exists()) {
          console.log(doc.data().products[0].id);
          console.log(JSON.stringify(doc.data().products));
          setOrders(doc.data().products);
        }
      });

      // alert("Data retrieved from firestore!");
    } catch (error) {
      console.log(error);
      alert(error);
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
        Previous Orders ({orders.length})
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
              pb={orders.length === 1 ? "1.5rem" : "0"}
              width="100%"
            >
              {orders?.map((order: any) => (
                <ItemSummary key={order.id} item={order} />
              ))}
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default Orders;
