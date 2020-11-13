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
            <Box mb={20}>
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
        </>
    )
}
