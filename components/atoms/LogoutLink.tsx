import { Stack, Box } from "@chakra-ui/react";
import Link from "next/link";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/router";

type Props = { base: string };

const LogoutLink = (props: Props) => {
  const { user, logout } = useAuth();
  const router = useRouter();
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  // const logoutOfApp = () => {
  //   dispatch(toggleNav());
  //   dispatch(logout());
  //   auth.signOut();
  // };

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
        >
          {user ? (
            <a
              onClick={() => {
                logout();
                router.push("/login");
              }}
            >
              Logout
            </a>
          ) : (
            <Link href="/login" passHref>
              <a>Sign In</a>
            </Link>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default LogoutLink;
