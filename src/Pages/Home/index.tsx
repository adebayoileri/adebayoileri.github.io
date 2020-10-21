import React from "react";
import {
    Box,
    BoxProps,
    chakra,
    Text,
    // useColorModeValue,
    // Wrap,
} from "@chakra-ui/core";
import Header from "../../components/Header";


const Container = (props: BoxProps) => (
    <Box w="full" pb="12" pt="3" mx="auto" maxW="1200px" px={6} {...props} />
)
const Home = () => {
    return (
        <>
            <Header />
            <Box mb={20}>
                <Box as="section" pt="12rem" pb="6rem">
                    <Container>
                        <Box maxW="760px" mx="auto" textAlign="center">
                            <chakra.h1
                                // fontSize={{ base: "2.25rem", sm: "3rem", lg: "3.75rem" }}
                                fontSize="5xl"
                                letterSpacing="tight"
                                fontWeight="bold"
                                mb="16px"
                                lineHeight="1.2"
                                // color={useColorModeValue("#ffff", "#383838")}
                            >
                                Hey there, I'm Adebayo
                {/* <Box
                                    as="span"
                                    color={useColorModeValue("teal.500", "teal.300")}
                                >
                                    {" "}
                  with speed
                </Box> */}
                            </chakra.h1>

                            <Text opacity={0.7} fontSize={{ base: "lg", lg: "xl" }} mt="6">
                               I'm a Software Engineer Based In Lagos Nigeria with ~2 years of experience working with various teams and building modern web applications.
              </Text>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    )
}
export default Home;