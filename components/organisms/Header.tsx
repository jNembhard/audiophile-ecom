import { Box } from "@chakra-ui/react";
import SkipLink from "@components/atoms/SkipLink";
import Navbar from "@components/molecules/Navbar";
import NavMobile from "@components/molecules/NavMobile";

function Header() {
  return (
    <Box
      as="header"
      bg="black"
      color="white"
      py={8}
      borderBottom={["1px", "unset"]}
      borderColor="divider"
    >
      <SkipLink />
      <Navbar />
      <NavMobile />
    </Box>
  );
}

export default Header;
