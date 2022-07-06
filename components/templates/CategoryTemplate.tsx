import { Box, Heading, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Product } from "../../interfaces/Product";
import { closeNav } from "../../store/menuSlice";
import ProductLinks from "../organisms/ProductLinks";
import AudioGear from "../molecules/AudioGear";
import ProductList from "../organisms/ProductList";

type Props = { products: Product[] };

const CategoryTemplate = (props: Props) => {
  const { query } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeNav());
  }, [query, dispatch]);

  return (
    <Box as="main" id="main">
      <Heading
        as="h1"
        bg="black"
        color="white"
        fontSize={["1.75rem", "2.5rem"]}
        letterSpacing={["0.125rem", "0.0894rem"]}
        textAlign="center"
        textTransform="uppercase"
        pt={["2rem", "6.5625rem"]}
        pb={["2rem", "6.0625rem"]}
      >
        {query.category}
      </Heading>
      <Container maxW="container.lg" px={6}>
        <ProductList products={props.products} />
        <ProductLinks />
        <AudioGear />
      </Container>
    </Box>
  );
};

export default CategoryTemplate;
