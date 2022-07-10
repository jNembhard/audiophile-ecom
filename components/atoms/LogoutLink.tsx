import { Stack, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../store/userSlice";
import { auth } from "../../firebase";
import Link from "next/link";
import { toggleNav } from "../../store/menuSlice";
type Props = { base: string };

const LogoutLink = (props: Props) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(toggleNav());
    dispatch(logout());
    auth.signOut();
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
        >
          <Link href={!user && "/login"} passHref>
            <a onClick={logoutOfApp}>{user ? "Sign Out" : "Sign In"}</a>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default LogoutLink;
