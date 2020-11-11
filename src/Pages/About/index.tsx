import React from 'react';
import {
    Box,
    BoxProps,
    // chakra,
    // Text,
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
                        I
                    </Container>
                </Box>
            </Box>
        </>
    )
}
