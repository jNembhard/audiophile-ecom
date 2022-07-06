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
      <Heading>{query.category}</Heading>
      <Container>
        <ProductList products={props.products} />
        <ProductLinks />
        <AudioGear />
      </Container>
    </Box>
  );
};

export default CategoryTemplate;
