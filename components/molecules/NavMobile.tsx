import { Box, Stack } from "@chakra-ui/react";
import { navlinks } from "../../utils/navLinks";

type Props = {};

const NavMobile = (props: Props) => {
  return (
    <Box
      as="nav"
      position="absolute"
      width="100%"
      top="5.625rem"
      bg="white"
      px="1.5rem"
      pb="2rem"
    >
      <Stack
        as="ul"
        direction={{ base: "column", sm: "row" }}
        spacing={["4rem", ".6rem"]}
        mt={["5.75rem"]}
      >
        ADD PRODUCT CATEGORIES
      </Stack>
    </Box>
  );
};

export default NavMobile;
