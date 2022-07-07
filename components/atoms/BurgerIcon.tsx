import { IconButton } from "@chakra-ui/react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { isMenuOpen, toggleNav } from "../../store/menuSlice";

const BurgerIcon = () => {
  const menuOpen = useSelector(isMenuOpen);
  const dispatch = useDispatch();

  return (
    <IconButton
      onClick={() => dispatch(toggleNav())}
      aria-label={menuOpen ? "Close Menu" : "Open Menu"}
      aria-expanded={menuOpen ? "true" : "false"}
      mr={{ sm: "2.625rem", lg: 0 }}
      variant="unstyled"
      isRound={true}
      aria-haspopup="true"
      lineHeight={0}
      display={{ base: "auto", lg: "none" }}
      icon={
        <Image
          src="/assets/shared/tablet/icon-hamburger.svg"
          width={16}
          height={15}
          aria-hidden="true"
          alt=""
        />
      }
    ></IconButton>
  );
};

export default BurgerIcon;
