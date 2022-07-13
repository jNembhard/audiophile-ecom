import React from "react";
import { HStack, Box } from "@chakra-ui/react";
import { navlinks } from "@utils/navLinks";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLinks = () => {
  const { asPath } = useRouter();

  return (
    <Box as="nav" display={{ base: "none", lg: "block" }}>
      <HStack as="ul" display="flex" spacing={8} listStyleType="none">
        {navlinks.map((navlink) => (
          <Box
            key={navlink.id}
            as="li"
            fontSize="sm"
            fontWeight="bold"
            _hover={{ color: "rawSienna" }}
            textTransform="uppercase"
            transition="color 0.2s linear"
            color={asPath === navlink.url ? "rawSienna" : "white"}
          >
            <NavLink href={navlink.url} active={asPath === navlink.url}>
              <a>{navlink.text}</a>
            </NavLink>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

const NavLink: React.FC<{
  href: string;
  active: boolean;
  children?: JSX.Element;
}> = ({ href, active, children }): JSX.Element => {
  const child = React.Children.only(children);

  return (
    <Link href={href} passHref>
      {React.cloneElement(child as React.ReactElement, {
        "aria-current": active ? "page" : null,
      })}
    </Link>
  );
};

export default NavLinks;
