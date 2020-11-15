import {
  chakra,
  Flex,
  HStack,
  // IconButton,
  Text,
  // useColorMode,
  Link,
  // useColorModeValue,
} from "@chakra-ui/core";
import React from "react";
// import { FaMoon, FaSun } from "react-icons/fa";

const HeaderContent = (props: any) => {
  // const { toggleColorMode: toggleMode } = useColorMode()
  // const text = useColorModeValue("dark", "light")
  // const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
      <Flex align="center">
        <chakra.a display="block" aria-label="Chakra UI, Back to homepage">
          <Text fontSize="22px">
          <Link href="/" style={{textDecoration: "none"}}>
           Adebayo Ilerioluwa
          </Link> 
           </Text>
        </chakra.a>
      </Flex>

      <Flex maxW="720px" align="center" >
        <HStack spacing="5"
          as="nav"
          ml="24px"
          display={{ base: "none", md: "flex" }}>
          <Link href="/about" style={{textDecoration: "none"}}>About</Link>
          <Link href="#projects" style={{textDecoration: "none"}}>Projects</Link>
          <Link href="https://standardresume.co/r/C4cPLKPKk8hg-scZ5rhlp" isExternal style={{textDecoration: "none"}}>Resume</Link>
          {/* "https://docs.google.com/document/d/1PxfGoI88gx26h7EebkXm3bZod13VELnsAtEkMgvmn3U/edit?usp=sharing" */}
        </HStack>
        {/* <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${text} mode`}
          variant="ghost"
          color="current"
          ml="3"
          onClick={toggleMode}
          icon={<SwitchIcon />}
        /> */}
      </Flex>
    </Flex>
  )
}

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
  )
}

export default Header