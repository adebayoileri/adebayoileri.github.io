import React from "react";
import {
  Box,
  BoxProps,
  chakra,
  Link,
  Text,
  SimpleGrid,
  Skeleton,
} from "@chakra-ui/core";
import Header from "../../components/Header";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

const Container = (props: BoxProps) => (
  <Box w="full" pb="12" pt="3" mx="auto" maxW="1200px" px={6} {...props} />
);
const Home = () => {
  const [loading, setLoading] = React.useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 3000);
  return (
    <>
      <Header />
      <Box mb={20}>
        <Box as="section" pt="12rem" pb="6rem">
          <Container>
            <Box maxW="760px" mx="auto" textAlign="center">
              <chakra.h1
                fontSize={"4xl"}
                letterSpacing="tight"
                fontWeight="bold"
                mb="16px"
                lineHeight="1.2"
              >
                Hey there, I'm Adebayo
              </chakra.h1>

              <Text opacity={0.95} fontSize={{ base: "md", xl: "md" }} mx="auto" mt="6" width={{base:"100%", xl: "80%"}}>
                I'm a Software Engineer Based In Lagos Nigeria with 2 years of
                professional and practical experience building modern web
                applications and working with various teams, startups and
                companies.
              </Text>
              <Text opacity={0.7} color="blue" fontSize="16px" mt="6">
                Learn more about{" "}
                <Link href="/about" color="#3e8dc6" style={{ opacity: 1 }}>
                  {" "}
                  me
                </Link>
                !
              </Text>
            </Box>
          </Container>
        </Box>
      </Box>
      <Box mb={20}>
        <Box as="section" pb="6rem" id="projects">
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
              {projects &&
                projects.map((prj) => (
                  <Skeleton isLoaded={loading}>
                    <ProjectCard
                      title={prj.title}
                      lng={prj.lng}
                      description={prj.description}
                      githubLink={prj.githubLink}
                      otherLink={prj.otherLink}
                    />
                  </Skeleton>
                ))}
            </SimpleGrid>
          </Container>
        </Box>
      </Box>
    </>
  );
};
export default Home;
