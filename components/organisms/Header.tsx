import { Box } from "@chakra-ui/react";
import SkipLink from "../atoms/SkipLink";
import Navbar from "../molecules/Navbar";
import NavMobile from "../molecules/NavMobile";

type Props = {};

function Header({}: Props) {
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
