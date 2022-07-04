import { Stack, Box } from "@chakra-ui/react";
import { navlinks } from "../../utils/navLinks";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <Stack
      as="ul"
      spacing={{ base: "1rem", md: "2.125rem" }}
      direction={{ base: "column", sm: "row" }}
    >
      {navlinks.map((navlink) => (
        <Box
          as="li"
          key={navlink.id}
          color="white"
          fontSize="0.8125rem"
          fontWeight="bold"
          textTransform="uppercase"
          transition="color 0.2s linear"
          _hover={{ color: "rawSienna" }}
        >
          <Link href={navlink.url}>{navlink.text}</Link>
        </Box>
      ))}
    </Stack>
  );
};

export default FooterLinks;
