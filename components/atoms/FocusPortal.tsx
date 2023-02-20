import { Box, Portal } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { isMenuOpen } from "@/store/menuSlice";

const FocusPortal = () => {
  const openMenu = useSelector(isMenuOpen);

  return (
    <Portal>
      <Box
        position="fixed"
        visibility={openMenu ? "visible" : "hidden"}
        opacity={openMenu ? "1" : "0"}
        height="100vh"
        zIndex="overlay"
        inset="0"
        bg="blackAlpha.600"
        display={{ lg: "none" }}
        transition="opacity 0.3s ease-in-out"
      ></Box>
    </Portal>
  );
};

export default FocusPortal;
