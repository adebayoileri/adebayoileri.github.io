import React from 'react';
import {
    Box,
    BoxProps,
    chakra,
    Text,
    // Link,
    Flex,
    Image
} from "@chakra-ui/core";
import Header from "../../components/Header";

const Container = (props: BoxProps) => (
    <Box w="full" pb="12" pt="3" mx="auto" maxW="1200px" px={6} {...props} />
)

export default function About() {
    return (
        <>
            <Header />
            <Box mb={10}>
                <Box as="section" pt="12rem" pb="6rem">
                    <Container>
                        <Box maxW="760px" mx="auto" textAlign="center">

                            <Flex align="center" justify="center" >
                                <Image
                                    borderRadius="full"
                                    boxSize="180px"
                                    src="https://res.cloudinary.com/adebayo/image/upload/v1605201224/86B7FA45-3753-4936-9F64-DAFE4C092ECE_czsef2.png"
                                    alt="Adebayo Ilerioluwa"
                                />
                            </Flex>
                            <chakra.h5
                                fontSize="5xl"
                                letterSpacing="tight"
                                fontWeight="bold"
                                mb="16px"
                                lineHeight="1.2"
                            >
                                I'm Adebayo Ilerioluwa
                            </chakra.h5>

                            <Text fontSize={{ base: "lg", lg: "xl" }} mt="2">
                                Nice to meet you! <span aria-label="smile" role="img">😁</span>
                            </Text>
                        </Box>
                    </Container>
                </Box>
            </Box>
            <Box mb={20}>
                <Box as="section" pb="6rem" id="about">
                    <Box maxW="74%" mx="auto" textAlign="left">
                        <chakra.h5
                            fontSize="3xl"
                            letterSpacing="tight"
                            fontWeight="bold"
                            mb="16px"
                            lineHeight="1.2"
                        >
                            About Me
                            </chakra.h5>
                        {/* <Flex textAlign="left"> */}
                            <Text fontSize="lg" opacity={0.6}>I'm Adebayo Ilerioluwa, but friends call me Bayo or Ileri.
                            A Software Engineer with a demonstrated history of working in the information technology and services industry. 
                            Skilled in Node, React, GraphQL, PHP, Javascript, MongoDB, Postgresql.
                                 </Text>
                        {/* </Flex> */}
                                 <Text fontSize="lg" opacity={0.6} mt={10} > 

When not working on a project or thinking about programming, I'm watching TV series on Netflix <span aria-label="tv" role="img" style={{opacity: "1"}}>📺</span>, playing COD Mobile <span aria-label="controller" role="img">🎮</span>, reading a blog, spending time with family and friends.
                                 </Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
