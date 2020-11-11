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

const projects = [
    {
        title: "CleanUp Create-React-App",
        description: `<span role="img" aria-label="hammer">🔨 </span>Remove unwanted files from default create-react-app`,
        lng: ["javascript", "shell(sh)"],
        githubLink: `https://github.com/adebayoileri/cleanup-create-react-app`,
        otherLink: `https://www.npmjs.com/package/cleanup-create-react-app`
    },
    {
        title: "Maintenance Tracker Project",
        description: "Maintenance Tracker App is an application that provides users with the ability to reach out to operations or repairs department regarding repair or maintenance requests and monitor the status of their request.",
        lng: ["nodejs", "html", "css", "postgresql"],
        githubLink: "https://github.com/adebayoileri/Maintenance-Tracker-Project",
        otherLink: "https://trackman.herokuapp.com/"
    },
    {
        title: "Remote Tech Jobs",
        description: "Find your next remote tech job from popular job listing platforms in one place",
        lng: ["javscript", "redis", "reactjs"],
        githubLink: "https://github.com/adebayoileri/Remote-Tech-Jobs",
        otherLink: "getremote-tech-jobs.herokuapp.com/"
    },
    {
        title: "Findworka Capstone Project",
        description: "it is an online learning platform aimed at professional adults and students",
        lng: ["php", "laravel", "mysql"],
        githubLink: "https://github.com/adebayoileri/Findworka-Final-Project",
        otherLink: "findworkaacademy.herokuapp.com"
    },
    {
        title: "Expense-tracker-App",
        description: "This app is a simple expense tracker or budget tracker. It lets you record your expense categories for recording and totaling your expenses.",
        lng: ["react", "mongodb"],
        githubLink: "https://github.com/adebayoileri/Expense-tracker-App",
        otherLink: "myexpensetrackerapp.netlify.app/"
    },
    {
        title: "URLCuttr",
        description: "A url shortener microservice; shorten long urls on the internet",
        lng: ["html", "nodejs", "mongodb"],
        githubLink: "https://github.com/adebayoileri/URL-Shortener-API",
        otherLink: "urlcuttr.herokuapp.com/"
    },
    {
        title: "Bridge API",
        description: `A Scalable Microservice API powering  <a href="https://getbridge.xyz" color="#3e8dc6" target="_blank rel="nooppener noreferrer">Bridge Nigeria Application</a>`,
        lng: ["nodejs", "expressjs", "postgresql"],
        githubLink: "https://github.com/adebayoileri/Bridge-API",
        otherLink: "bridgetaskerapi.herokuapp.com/"
    },
]

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
                                Learn more about <Link href="/about" color="#3e8dc6">me</Link>
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
                    <Container id="projects">
                        <SimpleGrid columns={[1, null, 3]} spacing="30px">
                            {projects && projects.map((prj) => (
                                <ProjectCard
                                    title={prj.title}
                                    lng={prj.lng}
                                    description={prj.description}
                                    githubLink={prj.githubLink}
                                    otherLink={prj.otherLink}
                                />
                            ))
                            }

                        </SimpleGrid>
                    </Container>
                </Box>
            </Box>
        </>
    )
}
export default Home;