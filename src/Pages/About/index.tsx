import React from "react";
import {
  Box,
  BoxProps,
  chakra,
  Text,
  // Link,
  Flex,
  Image,
  ListItem,
  List,
  ListIcon,
  Link,
} from "@chakra-ui/core";
import Header from "../../components/Header";
import { Helmet } from "react-helmet-async";
import { FaArrowRight } from "react-icons/fa";

const Container = (props: BoxProps) => (
  <Box w="full" pb="12" pt="3" mx="auto" maxW="1200px" px={6} {...props} />
);

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Adebayo Ilerioluwa</title>
      </Helmet>

      <Header />
      <Box mb={10}>
        <Box as="section" pt="12rem" pb="6rem">
          <Container>
            <Box maxW="760px" mx="auto" textAlign="center">
              <Flex align="center" justify="center">
                <Image
                  borderRadius="full"
                  boxSize="180px"
                  src="https://res.cloudinary.com/adebayo/image/upload/v1605201224/86B7FA45-3753-4936-9F64-DAFE4C092ECE_czsef2.png"
                  alt="Adebayo Ilerioluwa"
                />
              </Flex>
              <chakra.h5
                fontSize="4xl"
                letterSpacing="tight"
                fontWeight="bold"
                mb="16px"
                lineHeight="1.2"
              >
                I'm Adebayo Ilerioluwa
              </chakra.h5>

              <Text fontSize={{ base: "lg", lg: "xl" }} mt="2">
                Nice to meet you!{" "}
                <span aria-label="smile" role="img">
                  😁
                </span>
              </Text>
            </Box>
          </Container>
        </Box>
      </Box>
      <Box mb={20}>
        <Box as="section" pb="6rem" id="about">
          <Box maxW="86%" mx="auto" textAlign="left">
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
            <Text fontSize="md" opacity={0.9}>
              I'm Adebayo Ilerioluwa, but friends call me Bayo or Ileri. A
              Software Engineer with practical and professional experience in
              building modern web applications with various teams, businesses
              and startups around the world.
            </Text>
            <Text fontSize="md" mt="3" opacity={0.9}>
              I am passionate about helping people and improving the quality of
              life of society through technology. My technology interests(Stack)
              includes:
            </Text>
            <List fontSize="md" opacity={0.9}>
              <ListItem>
                <ListIcon fontSize={"16px"} as={FaArrowRight} />
                JavaScript
              </ListItem>
              <ListItem>
                <ListIcon fontSize={"16px"} as={FaArrowRight} />
                ReactJS/NextJS/Typescript/ExpressJS/NodeJS
              </ListItem>

              <ListItem>
                <ListIcon fontSize={"16px"} as={FaArrowRight} />
                REST/GraphQL
              </ListItem>
              <ListItem>
                <ListIcon fontSize={"16px"} as={FaArrowRight} />
                MongoDB/PostgreSQL
              </ListItem>
            </List>
            {/* </Flex> */}
            <Text mt="3" fontSize="md" opacity={0.9}>
              I enjoy continuously learning and improving through online
              courses, mentorship and stay abreast with new tools in the
              fast-growing developer community.
            </Text>
            <Text fontSize="md" opacity={0.9} mt={6}>
              When not working on a project or thinking about programming, I'm
              watching TV series on Netflix{" "}
              <span aria-label="tv" role="img" style={{ opacity: "1" }}>
                📺
              </span>
              , playing COD Mobile{" "}
              <span aria-label="controller" role="img">
                🎮
              </span>
              , reading a blog, spending time with family and friends.
            </Text>
            <Text mt="3" fontSize="md" opacity={0.9}>
              Want to know more about me? I'd love to connect with you.
            </Text>
            <Text fontSize="md" opacity={0.9} mt="1">
              Reach Out on{" "}
              <Link
                href="https://twitter.com/adeileri"
                color="#3e8dc6"
                isExternal
              >
                Twitter
              </Link>{" "}
              or via{" "}
              <Link href="mailto:adebayorilerioluwa@gmail.com" color="#3e8dc6">
                Email
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
