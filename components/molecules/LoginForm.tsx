import { useState } from "react";
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
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Legend from "../atoms/Legend";
import InputField from "../molecules/InputField";
import { auth } from "../../firebase";

import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import { useForm } from "react-hook-form";
import Link from "next/link";

type LoginProps = { name: string; emailAddress: string; password: string };

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({ mode: "onBlur" });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const toast = useToast();

  const appLogin = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            uid: userAuth.user.uid,
            email: userAuth.user.email,
            displayName: userAuth.user.displayName,
          })
        );
      })
      .catch((err) => {
        if (err) {
          toast({
            title: "Uh Oh! Something went wrong",
            status: "error",
            duration: 4500,
            position: "top-left",
            isClosable: true,
          });
        }
      });
  };

  const signUp = () => {
    if (!name) {
      toast({
        title: "Please enter a full name",
        status: "error",
        duration: 4500,
        position: "top-left",
        isClosable: true,
      });
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, { displayName: name })
          .then((userAuth: any) => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.uid,
                displayName: name,
              })
            );
          })
          .catch((error) => {
            console.log("User account update has failed");
          });
      })
      .catch((err) => {
        toast({
          title: "Account creation failed.",
          description: "There was an error creating your account.",
          status: "error",
          position: "top-left",
          duration: 5000,
          isClosable: true,
        });
      });
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
            onSubmit={appLogin}
          >
            <FormControl>
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
            </FormControl>
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
            {/* <Link href={"/"} passHref> */}
            <Button
              // as="a"
              type="submit"
              variant="solid"
              color="white"
              bg="onyx"
              _hover={{ bg: "rawSienna" }}
              cursor="pointer"
            >
              Login
            </Button>
            {/* </Link> */}
          </Stack>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Box as="span" cursor="pointer" color="rawSienna" onClick={signUp}>
          Sign Up
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginForm;
