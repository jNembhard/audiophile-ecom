import { forwardRef, useRef } from "react";
import { Box, Input, Flex, Text } from "@chakra-ui/react";

type Props = React.ComponentPropsWithoutRef<typeof Input> & {
  label: string;
  placeholder: string;
  type?: string;
  gridArea?: { [key: string]: string };
  errors: { message: string } | undefined;
  [prop: string]: unknown;
};

const InputField = forwardRef<HTMLInputElement, Props>((props: Props) => {
  const internalRef = useRef<HTMLInputElement>(null);
  const { label, placeholder, type = "text", gridArea, ...other } = props;

  let errorMessage;

  if (props.errors) {
    errorMessage = props.errors.message;
  }

  return (
    <Box gridArea={gridArea}>
      <Flex justify="space-between">
        <Box
          as="label"
          htmlFor={label}
          fontSize="0.75rem"
          fontWeight="bold"
          display="inline-block"
          mb={2}
          color={props["errors"] ? "inputError" : "black"}
        >
          {label}
        </Box>
        {props.errors && (
          <Text fontSize="0.75rem" color="inputError" mb={2} aria-live="polite">
            {errorMessage}
          </Text>
        )}
      </Flex>
      <Input
        id={label}
        {...other}
        ref={internalRef}
        type={type}
        placeholder={placeholder}
        border="1px solid"
        borderColor={props["errors"] ? "inputError" : "inputBorder"}
      />
    </Box>
  );
});

InputField.displayName = "Form Field";
export default InputField;
