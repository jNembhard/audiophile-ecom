import { Stack, Box, useToast } from "@chakra-ui/react";
import Link from "next/link";
import { useAuth } from "@hooks/useAuth";
import { useRouter } from "next/router";
import { isMenuOpen, toggleNav } from "@store/menuSlice";
import { useDispatch, useSelector } from "react-redux";

type Props = { base: string };

const LogoutLink = (props: Props) => {
  const toast = useToast();
  const { user, logout } = useAuth();
  const router = useRouter();

  const menuOpen = useSelector(isMenuOpen);
  const dispatch = useDispatch();

  const menuClose = () => {
    if (menuOpen == true) {
      dispatch(toggleNav());
    }
  };

  return (
    <Box as="nav" display={{ base: `${props.base}`, lg: "block" }}>
      <Stack display="flex" spacing={{ lg: "1rem" }}>
        <Box
          fontSize="sm"
          fontWeight="bold"
          color={{ base: "black", lg: "white" }}
          _hover={{ color: "rawSienna" }}
          textTransform="uppercase"
          transition="color 0.2s linear"
          cursor="pointer"
        >
          {user ? (
            <a
              onClick={() => {
                logout();
                router.push("/login");
                menuClose();
                toast({
                  title: "You have successfully logged out!",
                  status: "success",
                  duration: 4500,
                  position: "top-left",
                  isClosable: true,
                });
              }}
            >
              Logout
            </a>
          ) : (
            <Link href="/login" passHref>
              <a onClick={menuClose}>Sign In</a>
            </Link>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default LogoutLink;
