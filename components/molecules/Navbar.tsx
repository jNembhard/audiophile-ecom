import { Container, Flex } from "@chakra-ui/react";
import BurgerIcon from "../atoms/BurgerIcon";
import Logo from "../atoms/Logo";
import CartLogin from "./CartLogin";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <Container maxW="container.lg" px={6}>
      <Flex
        position="relative"
        justify="space-between"
        zIndex="modal"
        sx={{
          "@media screen and (min-width: 30em)": {
            "&::after": {
              content: "''",
              position: "absolute",
              bottom: "-2rem",
              height: "0.0625rem",
              width: "100%",
              backgroundColor: "divider",
            },
          },
        }}
      >
        <BurgerIcon />
        <Logo />
        <NavLinks />
        <CartLogin />
      </Flex>
    </Container>
  );
};

export default Navbar;
