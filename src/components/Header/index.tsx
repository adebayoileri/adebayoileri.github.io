import {
  chakra,
  Flex,
  HStack,
  Button,
  Text,
  Link,

} from "@chakra-ui/core";
import React from "react";
const HeaderContent = (props: any) => {
  return (
    <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
      <Flex align="center">
        <chakra.a display="block" aria-label="Back to homepage">
          <Text fontSize="22px">
            <Link href="/" style={{ textDecoration: "none" }}>
              Adebayo Ilerioluwa
            </Link>
          </Text>
        </chakra.a>
      </Flex>

      <Flex maxW="720px" align="center">
        <HStack
          spacing="5"
          as="nav"
          ml="24px"
          display={{ base: "none", md: "flex" }}
        >
          <Link href="/about" style={{ textDecoration: "none" }}>
            About
          </Link>
          <Link href="/#projects" style={{ textDecoration: "none" }}>
            Projects
          </Link>
          {/* "https://docs.google.com/document/d/1PxfGoI88gx26h7EebkXm3bZod13VELnsAtEkMgvmn3U/edit?usp=sharing" */}
        </HStack>
        <Link
          href="https://standardresume.co/r/C4cPLKPKk8hg-scZ5rhlp"
          ml="3"
          isExternal
          style={{ textDecoration: "none" }}
        >
          <Button>Resume</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

const Header = (props: any) => {
  return (
    <chakra.header
      pos="fixed"
      top="0"
      zIndex="1"
      bg="white"
      left="0"
      right="0"
      borderBottomWidth="1px"
      width="full"
      {...props}
    >
      <chakra.div height="4.5rem" mx="auto" maxW="1200px">
        <HeaderContent />
      </chakra.div>
    </chakra.header>
  );
};

export default Header;
