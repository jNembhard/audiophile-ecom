import { HStack, IconButton } from "@chakra-ui/react";
import { sociallinks } from "@/utils/socialLinks";

const Socials = () => {
  return (
    <HStack
      spacing={"1rem"}
      sx={{
        "& svg path": { transition: "fill .2s" },
        "& svg:hover path": { fill: "rawSienna" },
      }}
      justify={{ base: "center", sm: "right" }}
      height={{ lg: "100%" }}
    >
      {sociallinks.map((sociallink) => (
        <IconButton
          key={sociallink.id}
          as="a"
          href={sociallink.href}
          variant="unstyled"
          aria-label={sociallink.arialabel}
          target="_blank"
          rel="noopener noreferrer"
          icon={
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d={sociallink.dsvg} fill="#FFF" fillRule="nonzero" />
            </svg>
          }
        />
      ))}
    </HStack>
  );
};

export default Socials;
