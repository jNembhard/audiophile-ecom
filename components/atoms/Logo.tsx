import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Box mr={{ sm: "auto", lg: 0 }} lineHeight="0">
      <Link href="/">
        <a>
          <Image
            src="/assets/shared/desktop/logo.svg"
            width={144}
            height={25}
            alt="Audiophile Logo"
          />
        </a>
      </Link>
    </Box>
  );
};

export default Logo;
