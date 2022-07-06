import { Box, Container, Stack, SimpleGrid, Text } from "@chakra-ui/react";
import Logo from "../atoms/Logo";
import FooterLinks from "../molecules/FooterLinks";
import Socials from "../molecules/Socials";

const Footer = () => {
  let date = new Date().getFullYear();

  return (
    <Box
      as="footer"
      mt={["7.5rem", "6rem", "12.5rem"]}
      bg="black"
      textAlign={{ base: "center", sm: "left" }}
    >
      <Container
        pt={{ base: "3.25rem", sm: "3.75rem", lg: "4.6876rem" }}
        pb={["2rem"]}
        maxW="container.lg"
        position="relative"
        px={6}
        _before={{
          content: '""',
          position: "absolute",
          height: "0.25rem",
          width: "6.25rem",
          bg: "rawSienna",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          "@media screen and (min-width: 30em)": {
            transform: "translateX(0)",
            left: "1.5rem",
          },
        }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "3rem", sm: "2rem" }}
          justify={{ lg: "space-between" }}
        >
          <Logo />
          <FooterLinks />
        </Stack>
        <SimpleGrid
          templateAreas={{ sm: '"a a""b c"', lg: '"a c""b c"' }}
          templateColumns={{ sm: "50% 1fr" }}
          gap="3rem"
          mt="3rem"
        >
          <Text
            variant="darkBackground"
            gridArea={{ sm: "a" }}
            color="lightGrey"
          >
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </Text>
          <Text
            variant="darkBackground"
            gridArea={{ sm: "b" }}
            color="lightGrey"
          >
            Copyright {date}. All Rights Reserved
          </Text>
          <Box
            gridArea={{ sm: "c" }}
            justifySelf={{ sm: "end" }}
            alignSelf={{ md: "center" }}
          >
            <Socials />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
