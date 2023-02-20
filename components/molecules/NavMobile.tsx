import { Box, Stack, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { isMenuOpen, toggleNav } from "@/store/menuSlice";
import MobileLink from "./MobileLink";
import { navlinks } from "@/utils/navLinks";
import LogoutLink from "@/components/atoms/LogoutLink";

const NavMobile = () => {
  const openMenu = useSelector(isMenuOpen);
  const toggle = useSelector(toggleNav);

  return (
    <Box
      as="nav"
      position="absolute"
      width="100%"
      top="5.625rem"
      bg="white"
      px="1.5rem"
      pb="2rem"
      zIndex="modal"
      display={{ base: "block", lg: "none" }}
      opacity={openMenu ? "1" : "0"}
      visibility={openMenu ? "visible" : "hidden"}
      transform={openMenu ? "translateY(0)" : "translateY(5%)"}
      transition={"transform .5s ease-in-out, opacity .5s ease-in-out"}
      borderBottomRadius="0.5rem"
    >
      <Flex align="center" justify="center" mt="1rem">
        <LogoutLink base="block" />
      </Flex>
      <Stack
        as="ul"
        direction={{ base: "column", sm: "row" }}
        spacing={["4rem", ".6rem"]}
        mt={["5.75rem"]}
      >
        {navlinks.slice(1).map((navlink) => (
          <MobileLink key={navlink.id} {...navlink} />
        ))}
      </Stack>
    </Box>
  );
};

export default NavMobile;
