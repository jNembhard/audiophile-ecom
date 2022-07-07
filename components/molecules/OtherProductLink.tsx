import { Box, Heading, Image, Button } from "@chakra-ui/react";
import Link from "next/link";
import { OtherProductProps } from "../organisms/ProductOthers";

const OtherProductLink: React.FC<OtherProductProps> = ({
  slug,
  name,
  image,
}): JSX.Element => {
  return (
    <Box as="li">
      <Box as="picture">
        <source media="(min-width: 62em)" srcSet={image.desktop} />
        <source media="(min-width: 30em)" srcSet={image.tablet} />
        <Image
          src={image.mobile}
          objectFit="cover"
          width="100%"
          borderRadius="0.5rem"
          alt={name}
        />
      </Box>
      <Heading
        as="h3"
        fontSize={{ base: "1.5rem" }}
        letterSpacing="0.1069rem"
        mt={{ base: "2rem" }}
      >
        {name}
      </Heading>
      <Link href={`/${slug}`}>
        <Button as="a" cursor="pointer" mt={{ base: "2rem" }}>
          See Product
        </Button>
      </Link>
    </Box>
  );
};

export default OtherProductLink;
