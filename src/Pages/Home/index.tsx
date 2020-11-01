import React from "react";
import {
    Box,
    BoxProps,
    chakra,
    Link,
    Text,
    SimpleGrid
} from "@chakra-ui/core";
import Header from "../../components/Header";
import ProjectCard from "../../components/ProjectCard";


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
                                fontSize="5xl"
                                letterSpacing="tight"
                                fontWeight="bold"
                                mb="16px"
                                lineHeight="1.2"
                            >
                                Hey there, I'm Adebayo
                            </chakra.h1>

                            <Text opacity={0.7} fontSize={{ base: "lg", lg: "xl" }} mt="6">
                                I'm a Software Engineer Based In Lagos Nigeria with ~2 years of experience working with various teams and building modern web applications.
              </Text>
              <Text opacity={0.5} color="blue" fontSize="16px" mt="6">
                            Learn more about <Link>me</Link>
              </Text>
                        </Box>
                    </Container>
                </Box>
            </Box>
            <Box mb={20}>
                <Box as="section" pb="6rem">
                    <Box maxW="84%" mx="auto" textAlign="left">
                        <chakra.h5
                            fontSize="3xl"
                            letterSpacing="tight"
                            fontWeight="bold"
                            mb="16px"
                            lineHeight="1.2"
                        >
                            Featured Projects
                            </chakra.h5>
                    </Box>
                    <Container>
                        <SimpleGrid columns={[1, null, 3]} spacing="30px">

                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />

                            <ProjectCard />
                        </SimpleGrid>
                    </Container>
                </Box>
            </Box>
        </>
    )
}
export default Home;