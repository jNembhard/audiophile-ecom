import { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Button,
  Stack,
  Box,
  Link,
  Avatar,
  FormControl,
  useToast,
  Text,
} from "@chakra-ui/react";
import InputField from "@/components/molecules/InputField";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface LoginProps {
  email: string;
  password: string;
}

const Login = () => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({ mode: "onChange" });

  const router = useRouter();

  const { user, login } = useAuth();

  const [data, setData] = useState({ email: "", password: "" });

  const handleLogin = async (e: any) => {
    try {
      await login(data.email, data.password);
      router.push("/");

      toast({
        title: `Welcome back ${data.email}!`,
        status: "success",
        duration: 4500,
        position: "top-left",
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Your email or password was incorrect, please try again",
        status: "error",
        duration: 4500,
        position: "top-left",
        isClosable: true,
      });
      console.log(err);
    }
  };

  return (
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
            onSubmit={(e) => handleSubmit(handleLogin)(e)}
          >
            <FormControl>
              <InputField
                type="email"
                placeholder="Enter email"
                value={data.email}
                errors={errors.email}
                {...register("email", {
                  onChange: (e: any) =>
                    setData({ ...data, email: e.target.value }),
                  required: "Field cannot be empty",
                  pattern: {
                    value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/,
                    message: "Please enter a valid email",
                  },
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
            </FormControl>
            <FormControl>
              <InputField
                type="password"
                placeholder="Password"
                value={data.password}
                errors={errors.password}
                {...register("password", {
                  onChange: (e: any) =>
                    setData({ ...data, password: e.target.value }),
                  required: "Field cannot be empty",
                })}
                aria-invalid={errors.password ? "true" : "false"}
              />
            </FormControl>
            <Button
              role="button"
              type="submit"
              variant="solid"
              color="white"
              bg="onyx"
              _hover={{ bg: "rawSienna" }}
              cursor="pointer"
            >
              Login
            </Button>
          </Stack>
        </Box>
      </Stack>
      <Flex>
        New to Audiophile?{" "}
        <Link as={NextLink} href="/signup" _hover={{ textDecoration: "none" }}>
          <Box cursor="pointer" color="rawSienna" paddingLeft="0.1875rem">
            Sign Up
          </Box>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Login;
