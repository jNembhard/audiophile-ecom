import { useState } from "react";
import {
  Button,
  FormControl,
  Stack,
  Avatar,
  Heading,
  Box,
  Flex,
  useToast,
  Link,
} from "@chakra-ui/react";
import InputField from "@/components/molecules/InputField";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import NextLink from "next/link";
import { useRouter } from "next/router";

type SignUpProps = { name: string; email: string; password: string };

const SignUp = () => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpProps>({ mode: "onChange" });

  const router = useRouter();

  const { user, signUp } = useAuth();
  const [data, setData] = useState({ email: "", password: "" });

  const handleSignUp = async () => {
    // e.preventDefault();

    try {
      await signUp(data.email, data.password);
      router.push("/");

      toast({
        title: `Sign Up successful, welcome ${data.email}!`,
        status: "success",
        duration: 4500,
        position: "top-left",
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
    }
    console.log(data);
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
          <Heading color="onyx">Sign Up</Heading>
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
              onSubmit={(e) => handleSubmit(handleSignUp)(e)}
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
                type="submit"
                variant="solid"
                color="white"
                bg="onyx"
                _hover={{ bg: "rawSienna" }}
                cursor="pointer"
              >
                Sign Up
              </Button>
            </Stack>
          </Box>
        </Stack>
        <Flex>
          Already a member?{" "}
          <Link as={NextLink} href="/login" _hover={{ textDecoration: "none" }}>
            <Box cursor="pointer" color="rawSienna" paddingLeft="0.1875rem">
              Login
            </Box>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default SignUp;
