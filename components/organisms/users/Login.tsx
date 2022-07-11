import { useRef, useState } from "react";
import {
  Flex,
  Heading,
  Button,
  Stack,
  Box,
  Avatar,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import InputField from "../../molecules/InputField";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../../../hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/router";

interface LoginInputs {
  emailAddress: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const { user } = useAuth();
  console.log(user);
  const [data, setData] = useState({ email: "", password: "" });
  // const user = useSelector(selectUser);

  const handleLogin = async (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="lightGrey"
        mb={{ base: "-7.5rem", sm: "-12.5rem" }}
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          direction="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
          minW="100%"
        >
          <Avatar bg="rawSienna" />
          <Heading color="onyx">Welcome</Heading>
          <Box
            width={{ base: "90%", sm: "80%", md: "70%", lg: "45%" }}
            mx={{ base: "1.5rem", md: "2rem" }}
            maxW={{ base: "30rem", sm: "37.5rem", lg: "50rem" }}
          >
            <Stack
              as="form"
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              // onSubmit={handleSubmit(onSubmit)}
            >
              {/* <FormControl>
                <InputField
                  label="Name"
                  type="text"
                  placeholder="Enter your name"
                  errors={errors.name}
                  {...register("name", {
                    required: "Field cannot be empty",
                  })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
              </FormControl> */}
              <FormControl>
                <InputField
                  label="Email Address"
                  type="email"
                  placeholder="nembhardjl@outlook.com"
                  errors={errors.emailAddress}
                  {...register("emailAddress", {
                    required: "Field cannot be empty",
                    pattern: {
                      value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  aria-invalid={errors.emailAddress ? "true" : "false"}
                />
              </FormControl>
              <FormControl>
                <InputField
                  label="Password"
                  type="password"
                  placeholder="password"
                  errors={errors.password}
                  {...register("password", {
                    required: "Field cannot be empty",
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
              </FormControl>
              {/* <Link href={user && "/"} passHref> */}
              <Button
                as="a"
                type="submit"
                variant="solid"
                color="white"
                bg="onyx"
                _hover={{ bg: "rawSienna" }}
                cursor="pointer"
                // onClick={() => setLogin(true)}
              >
                Login
              </Button>
              {/* </Link> */}
            </Stack>
          </Box>
        </Stack>
        <Box>
          New to Audiophile?{" "}
          <Box
            as="span"
            cursor="pointer"
            color="rawSienna"
            // onClick={() => setLogin(false)}
          >
            Sign Up
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
