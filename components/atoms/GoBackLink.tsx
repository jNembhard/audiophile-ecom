import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const GoBackLink = () => {
  const router = useRouter();

  return (
    <Button
      as="a"
      variant="link"
      fontSize="0.9375rem"
      textTransform="capitalize"
      onClick={() => router.back()}
      mt={{ base: "1rem", sm: "2rem", lg: "5rem" }}
    >
      go back
    </Button>
  );
};

export default GoBackLink;
