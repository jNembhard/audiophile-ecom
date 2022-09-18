import { Stack, Box, Link, useToast } from "@chakra-ui/react";
import NextLink from "next/link";
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
          textTransform="uppercase"
          cursor="pointer"
        >
          {user ? (
            <>
              <Box
                as="a"
                _hover={{ color: "rawSienna" }}
                transition="color 0.2s linear"
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
              </Box>
              &nbsp;&nbsp;&nbsp;
              <NextLink href="/orders" passHref>
                <Link _hover={{ textDecoration: "none" }}>
                  <Box
                    as="a"
                    _hover={{ color: "rawSienna" }}
                    transition="color 0.2s linear"
                    onClick={menuClose}
                  >
                    orders
                  </Box>
                </Link>
              </NextLink>
            </>
          ) : (
            <NextLink href="/login" passHref>
              <Link _hover={{ textDecoration: "none" }}>
                <Box
                  as="a"
                  _hover={{ color: "rawSienna" }}
                  transition="color 0.2s linear"
                  onClick={menuClose}
                >
                  Sign In
                </Box>
              </Link>
            </NextLink>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default LogoutLink;
