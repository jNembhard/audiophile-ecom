import {
  Stack,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { IncludedItem } from "@/interfaces/Product";

type Props = {
  features: string | undefined;
  includedItems: IncludedItem[] | undefined;
};

const ProductFeatures = (props: Props) => {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      spacing={{ base: "5.5rem", lg: "7.5rem" }}
      mt={{ base: "5.5rem", sm: "7.5rem", lg: "10rem" }}
    >
      <Box flexBasis={{ lg: "55%" }}>
        <Heading id="features" fontSize={{ base: "1.5rem", md: "2rem" }}>
          Features
        </Heading>
        <Text
          aria-labelledby="features"
          mt={{ base: "1.5rem" }}
          whiteSpace="pre-line"
        >
          {props.features}
        </Text>
      </Box>
      <Stack
        direction={{ base: "column", sm: "row", lg: "column" }}
        spacing={{ base: "1.5rem", sm: "6rem", md: "12rem", lg: "2rem" }}
      >
        <Heading fontSize={{ base: "1.5rem", md: "2rem" }}>In the Box</Heading>
        <List mt={{ base: "1.5rem" }}>
          {props.includedItems?.map((includedItem) => (
            <ListItem key={includedItem.item} fontSize="0.9375rem" mb="0.5rem">
              <SimpleGrid gridTemplateColumns="2rem 1fr">
                <Box as="span" color="rawSienna" fontWeight="bold">
                  {includedItem.quantity}x
                </Box>
                <Box
                  as="span"
                  color="rgba(0,0,0,0.5)"
                  textTransform="capitalize"
                  textAlign="left"
                >
                  {includedItem.item}
                </Box>
              </SimpleGrid>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Stack>
  );
};

export default ProductFeatures;
