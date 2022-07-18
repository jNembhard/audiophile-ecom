import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Image,
  Heading,
  Text,
  Flex,
  Box,
  List,
  Button,
  useBoolean,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, cartItems } from "@store/CartSlice";
import { useCartModal } from "@store/CartContextProvider";
import useCartTotals from "@hooks/useCartTotals";
import ItemSummary from "@components/molecules/ItemSummary";
import Link from "next/link";
import { useAuth } from "@hooks/useAuth";
import { db } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

const CheckoutModal = () => {
  const { user } = useAuth();

  const items = useSelector(cartItems);
  const { grandTotal } = useCartTotals();

  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const [showMore, setShowMore] = useBoolean(false);
  const { isCheckoutModalOpen, onCheckoutModalClose } = useCartModal();

  const handleClick = async () => {
    onCheckoutModalClose();
    const docRef = doc(db, `users/${user.uid}/orders`, user.email);
    console.log(user);
    const userQuery = query(collection(db, "users"));

    const querySnapshot = await getDocs(userQuery);
    const queryData = querySnapshot.docs.map((items) => ({
      ...items,
      email: user.email,
      timestamp: serverTimestamp(),
    }));

    queryData.map(async () => {
      await setDoc(docRef, {
        basket: { products: [...items] },
        timestamp: serverTimestamp(),
      });
    });

    dispatch(clearCart());
  };

  const onModalClose = async () => {
    onCheckoutModalClose();
    if (user) {
      const docRef = doc(db, `users/${user.email}/orders`, user?.uid);
      console.log(user);
      const userQuery = query(collection(db, "users"));

      const querySnapshot = await getDocs(userQuery);
      const queryData = querySnapshot.docs.map((items) => ({
        ...items,
        timestamp: serverTimestamp(),
      }));
      console.log(queryData);
      queryData.map(async () => {
        await setDoc(docRef, {
          basket: { products: [...items] },
          timestamp: serverTimestamp(),
        });
      });
    }

    dispatch(clearCart());
  };

  return (
    <Modal
      isOpen={isCheckoutModalOpen}
      onClose={onModalClose}
      preserveScrollBarGap={false}
      isCentered
    >
      <ModalOverlay px="1.5rem" />
      <ModalContent
        p={{ base: "2rem", md: "3rem" }}
        mx={{ base: "1.5rem", md: "2rem" }}
        maxWidth={{ sm: "35.6875rem", md: "33.75rem" }}
      >
        <Image
          src="/assets/checkout/icon-order-confirmation.svg"
          mb={{ base: "1.5rem" }}
          boxSize="4rem"
          aria-hidden="true"
          alt=""
        />
        <Heading
          fontSize={{ base: "1.5rem", sm: "2rem" }}
          lineHeight="1.125"
          mb={{ base: "1.125rem", md: "1.5rem" }}
          textTransform="uppercase"
        >
          thank you{" "}
          <Box as="span" display="block">
            for your order
          </Box>
        </Heading>
        <Text mb={{ base: "1.375rem", md: "2rem" }}>
          You will receive an email confirmation shortly
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          mb={{ base: "1.5rem", md: "3rem" }}
          alignItems="stretch"
          overflowY="hidden"
          borderRadius="0.5rem"
        >
          <Box
            bg="seashell"
            display={items.length === 1 ? "flex" : "block"}
            flexBasis="55%"
            flexGrow={1}
            alignItems="center"
          >
            <List
              as="ul"
              pt="1.5rem"
              px="1.5rem"
              pb={items.length === 1 ? "1.5rem" : "0"}
              width="100%"
            >
              {items.slice(0, showMore ? items.length : 1).map((item) => (
                <ItemSummary key={item.id} item={item} />
              ))}
            </List>
            {items.length > 1 && (
              <Box textAlign="center" py="1rem">
                <Button
                  variant="link"
                  onClick={setShowMore.toggle}
                  fontSize="0.75rem"
                  fontWeight="bold"
                  textTransform="initial"
                >
                  {showMore
                    ? "View less"
                    : `and ${items.length - 1} other item(s)`}
                </Button>
              </Box>
            )}
          </Box>
          <Flex
            direction="column"
            justify={showMore ? "flex-end" : "center"}
            pt={{ base: "0.9375rem" }}
            px={{ base: "1.5rem", md: "2rem" }}
            py={{ base: "1.125rem", md: "2.625rem" }}
            flexBasis="45%"
            bg="black"
          >
            <Text color="grey" textTransform="uppercase" mb="0.5rem">
              Grand Total
            </Text>
            <Text fontWeight="bold" color="white">
              $ {grandTotal.toLocaleString()}
            </Text>
          </Flex>
        </Flex>
        <Link href="/" passHref>
          <Button as="a" onClick={handleClick} cursor="pointer">
            Back to home
          </Button>
        </Link>
      </ModalContent>
    </Modal>
  );
};

export default CheckoutModal;
