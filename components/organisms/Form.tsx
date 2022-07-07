import {
  Box,
  Heading,
  useRadioGroup,
  Stack,
  SimpleGrid,
  Text,
  HStack,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCartModal } from "../../store/CartContextProvider";

import React from "react";
import Legend from "../atoms/Legend";
import InputField from "../molecules/InputField";
import Radio from "../atoms/Radio";
import Summary from "../molecules/Summary";

type InputProps = {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  ZIPCode: string;
  city: string;
  country: string;
  eMoneyNumber: number;
  eMoneyPin: number;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>({ mode: "onBlur" });

  const options = ["e-money", "Cash on Delivery"];
  const { onCheckoutModalOpen } = useCartModal();
  const [checkedOption, setCheckedOption] = useState(options[0]);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (value: string) => {
    setCheckedOption(value);
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "Payment Details",
    defaultValue: "e-money",
    onChange: handleChange,
  });

  const group = getRootProps();

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (isDisabled) {
      return handleSubmit(() => {
        onCheckoutModalOpen;
      })(e);
    }
  };

  return (
    <Stack
      as="form"
      direction={{ base: "column", lg: "row" }}
      alignItems={{ lg: "start" }}
      spacing={{ base: "2rem" }}
      mt={{ base: "1.5rem" }}
      onSubmit={onSubmit}
      noValidate
    >
      <Box
        pt={{ base: "1.5rem", sm: "1.875rem", lg: "3.625rem" }}
        px={{ base: "1.5rem", sm: "1.75rem", lg: "3rem" }}
        pb={{ base: "2rem", lg: "3rem" }}
        flex={{ lg: "1 1 65%" }}
        borderRadius="0.5rem"
        maxW={{ lg: "45.625rem" }}
        bg="white"
      >
        <Heading as="h1" fontSize={{ base: "1.75rem" }} mb={{ base: "2rem" }}>
          Checkout
        </Heading>
        <Box as="fieldset" mb="2rem">
          <Legend>Billing Details</Legend>
          <SimpleGrid
            gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr" }}
            gridGap={{ base: "1rem" }}
          >
            <InputField
              label="Name"
              placeholder="Jason Nembhard"
              errors={errors.name}
              {...register("name", {
                required: "Field cannot be empty",
                pattern: {
                  value: /^[^<>%$#^*]*$/,
                  message: "Wrong format",
                },
              })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            <InputField
              label="Email Address"
              type="email"
              placeholder="nembhardjl@outlook.com"
              errors={errors.emailAddress}
              {...register("emailAddress", {
                required: "Field cannot be empty",
                pattern: {
                  value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/,
                  message: "Wrong format",
                },
              })}
              aria-invalid={errors.emailAddress ? "true" : "false"}
            />
            <InputField
              label="Phone Number"
              placeholder="+1 703-297-0357"
              errors={errors.phoneNumber}
              {...register("phoneNumber", {
                required: "Field cannot be empty",
              })}
              aria-invalid={errors.phoneNumber ? "true" : "false"}
            />
          </SimpleGrid>
        </Box>
        <Box as="fieldset" mb="2rem">
          <Legend>Shipping Info</Legend>
          <SimpleGrid
            gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr" }}
            gridTemplateAreas={{ sm: '"a a" "b c" "d ."' }}
            gridGap={{ base: "1em", sm: "1rem" }}
          >
            <InputField
              label="Address"
              placeholder="1600 Amphitheatre Parkway"
              errors={errors.address}
              {...register("address", {
                required: "Field cannot be empty",
              })}
              gridArea={{ sm: "a" }}
              aria-invalid={errors.address ? "true" : "false"}
            />
            <InputField
              label="ZIPCode"
              placeholder="10001"
              errors={errors.ZIPCode}
              {...register("ZIPCode", {
                required: "Field cannot be empty",
                pattern: {
                  value: /^[0-9]{5}(?:-[0-9]{4})?$/,
                  message: "Wrong format",
                },
              })}
              gridArea={{ sm: "b" }}
              aria-invalid={errors.ZIPCode ? "true" : "false"}
            />
            <InputField
              label="City"
              placeholder="California"
              errors={errors.city}
              {...register("city", {
                required: "Field cannot be empty",
              })}
              gridArea={{ sm: "c" }}
              aria-invalid={errors.city ? "true" : "false"}
            />
            <InputField
              label="Country"
              placeholder="United States"
              errors={errors.country}
              {...register("country", {
                required: "Field cannot be empty",
              })}
              gridArea={{ sm: "d" }}
              aria-invalid={errors.country ? "true" : "false"}
            />
          </SimpleGrid>
        </Box>
        <Box as="fieldset">
          <Legend>Payment Details</Legend>
          <SimpleGrid
            gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr" }}
            gridGap={{ sm: "1rem" }}
          >
            <Text fontSize="0.75rem" fontWeight="bold" mb={2} color="black">
              Payment Method
            </Text>
            <Box {...group}>
              {options.map((value) => {
                const radio = getRadioProps({ value });
                return (
                  <Radio key={value} {...radio}>
                    {value}
                  </Radio>
                );
              })}
            </Box>
          </SimpleGrid>
          {checkedOption === options[0] ? (
            <SimpleGrid
              gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr" }}
              gridGap={{ base: "1rem" }}
              mt={{ base: "1rem" }}
            >
              <InputField
                label="e-Money Number"
                placeholder="238521993"
                errors={errors.eMoneyNumber}
                {...register("eMoneyNumber", {
                  required: "Field cannot be empty",
                  pattern: {
                    value: /^[0-9]{9}$/,
                    message: "Wrong format",
                  },
                })}
                aria-invalid={errors.eMoneyNumber ? "true" : "false"}
                type="number"
              />
              <InputField
                label="e-Money Pin"
                placeholder="6891"
                errors={errors.eMoneyPin}
                {...register("eMoneyPin", {
                  required: "Field cannot be empty",
                  pattern: {
                    value: /^[0-9]{4}$/,
                    message: "Wrong format",
                  },
                })}
                aria-invalid={errors.eMoneyPin ? "true" : "false"}
                type="number"
              />
            </SimpleGrid>
          ) : (
            <HStack align="center" spacing="2rem" mt="1.5rem">
              <Image src="/assets/checkout/icon-cash-on-delivery.svg" alt="" />
              <Text>
                The &rsquo;Cash on Delivery&rsquo; option enables you to pay in
                cash when our delivery courier arrives at your residence. Just
                make sure your address is correct so that your ourder wil not be
                cancelled.
              </Text>
            </HStack>
          )}
        </Box>
      </Box>
      <Summary isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
    </Stack>
  );
};

export default Form;
