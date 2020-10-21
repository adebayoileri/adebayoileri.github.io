import {
  chakra,
  Flex,
  HStack,
  IconButton,
  Text,
  useColorMode,
  Link,
  useColorModeValue,
} from "@chakra-ui/core";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const HeaderContent = (props: any) => {
  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
      <Flex align="center">
        {/* <NextLink href="/" passHref> */}
        <chakra.a display="block" aria-label="Chakra UI, Back to homepage">
          <Text fontSize="22px">
            Adebayo Ilerioluwa
           </Text>
        </chakra.a>
        {/* </NextLink> */}
        {/* <HStack
          as="nav"
          spacing="4"
          ml="24px"
          display={{ base: "none", md: "flex" }}
        >
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Projects</Link>
        </HStack> */}
      </Flex>

      <Flex maxW="720px" align="center" >
        {/* <VersionSwitcher /> */}
        <HStack spacing="5"
          as="nav"
          // spacing="4"
          ml="24px"
          display={{ base: "none", md: "flex" }}>
          <Link>About</Link>
          <Link>Projects</Link>
          <Link>Contact</Link>
        </HStack>
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${text} mode`}
          variant="ghost"
          color="current"
          ml="3"
          onClick={toggleMode}
          icon={<SwitchIcon />}
        />
      </Flex>
    </Flex>
  )
}

const Header = (props: any) => {
  // const bg = useColorModeValue("white", "gray.800")
  return (
    <chakra.header
      pos="fixed"
      top="0"
      zIndex="1"
      // bg={bg}
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
  )
}

export default Header