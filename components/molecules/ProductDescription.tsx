import React, { useState } from "react";
import { Box, Heading, Text, HStack, Button, useToast } from "@chakra-ui/react";
import { Product } from "@interfaces/Product";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@store/CartSlice";
import ProductQuantity from "@components/atoms/ProductQuantity";

const ProductDescription = ({ product }: { product: Product }): JSX.Element => {
  // give feedback to users after an action has taken place
  const toast = useToast();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      addItemToCart({
        id: product.id,
        shortName: product.shortName,
        cartImg: product.cartImage,
        price: product.price,
        quantity,
      })
    );
    toast({
      title: `Item '${product.name}' was added to cart`,
      status: "success",
      duration: 3500,
      position: "top-left",
      isClosable: true,
    });
  };

  const increment = () => {
    setQuantity((state) => state + 1);
  };

  const decrement = () => {
    if (quantity <= 1) return;
    setQuantity((state) => state - 1);
  };

  return (
    <Box textAlign={{ base: "left" }} flexBasis={{ sm: "60%", lg: "50%" }}>
      <Heading
        as="h2"
        fontSize={{ base: "1.75rem", lg: "2.5rem" }}
        letterSpacing="0.0625rem"
        mb={{ base: "1.5rem" }}
        // maxW={{ base: "13ch" }}
      >
        {product.new && (
          <Box
            as="strong"
            display="block"
            fontSize="0.875rem"
            fontWeight="normal"
            letterSpacing="0.625rem"
            textTransform="uppercase"
            color="rawSienna"
            mb={{ base: "1.5rem", sm: "1rem" }}
          >
            New Product
          </Box>
        )}
        {product.name}
      </Heading>
      <Text mb={{ base: "1.5rem" }} pr={{ lg: "2rem" }}>
        {product.description}
      </Text>
      <Text
        fontSize="1.125rem"
        fontWeight="bold"
        mt={{ base: "1.5rem" }}
        color="black"
      >
        $ {product?.price?.toLocaleString("en-US")}
      </Text>
      <HStack
        mt={{ base: "2rem" }}
        spacing={{ base: "1rem" }}
        alignItems={{ base: "stretch" }}
      >
        <ProductQuantity
          quantity={quantity}
          increment={increment}
          decrement={decrement}
          width="7.5rem"
          height="3rem"
        />
        <Button onClick={addToCart}>Add to Cart</Button>
      </HStack>
    </Box>
  );
};

export default ProductDescription;
