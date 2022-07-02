import { IconButton } from "@chakra-ui/react";
import Image from "next/image";

type Props = {};

const BurgerIcon = (props: Props) => {
  return (
    <IconButton
      aria-label="Close Menu"
      aria-expanded="true"
      mr={{ sm: "2.625rem", lg: 0 }}
      variant="unstyled"
      isRound={true}
      aria-haspopup="true"
      lineHeight={0}
      display={{ base: "auto", lg: "none" }}
      icon={
        <Image
          src="/assets/shared/tablet/icon-hamburger.svg"
          width={16}
          height={15}
          alt=""
        />
      }
    ></IconButton>
  );
};

export default BurgerIcon;
