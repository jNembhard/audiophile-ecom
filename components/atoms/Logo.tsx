import { Box, Link } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { isMenuOpen, toggleNav } from "@/store/menuSlice";

const Logo = () => {
  const menuOpen = useSelector(isMenuOpen);
  const dispatch = useDispatch();

  const menuClose = () => {
    if (menuOpen == true) {
      dispatch(toggleNav());
    }
  };

  return (
    <Box mr={{ sm: "auto", lg: 0 }} lineHeight="0">
      <Link as={NextLink} href="/" onClick={menuClose}>
        <Image
          src="/assets/shared/desktop/logo.svg"
          width={144}
          height={25}
          alt="Audiophile Logo"
        />
      </Link>
    </Box>
  );
};

export default Logo;
