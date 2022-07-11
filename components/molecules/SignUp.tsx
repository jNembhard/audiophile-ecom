import { useState } from "react";
import {
  Button,
  FormControl,
  Stack,
  Avatar,
  Heading,
  Box,
  Input,
  Flex,
} from "@chakra-ui/react";
import InputField from "../molecules/InputField";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Link from "next/link";

type LoginProps = { name: string; email: string; password: string };

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({ mode: "onChange" });

  const { user, signUp } = useAuth();
  console.log(user);

  const [data, setData] = useState({ email: "", password: "" });

  const handleSignUp = async (e: any) => {
    // e.preventDefault();

    try {
      await signUp(data.email, data.password);
    } catch (err) {
      console.log(err);
    }
    console.log(data);
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
            onSubmit={(e) => handleSubmit(handleSignUp)(e)}
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
            {/* <Link href={user && { "/": string }} passHref> */}
            <Button
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
    </Flex>
  );
};

export default SignUp;
