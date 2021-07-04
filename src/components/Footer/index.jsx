import React from "react";
import { Box, chakra, Text, Link, Flex } from "@chakra-ui/core";
import {
  FaTwitter,
  FaGithub,
  FaDev,
  FaStackOverflow,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Box p="8" bg="#f5f7fa">
        <Box maxW="760px" mx="auto" textAlign="center">
          <chakra.h5
            fontSize="4xl"
            letterSpacing="tight"
            fontWeight="bold"
            mb="16px"
            lineHeight="1.2"
          >
            Let's Connect{" "}
            <span aria-label="handshake" role="img">
              🤝
            </span>
          </chakra.h5>

          <Box d="flex" alignItems="center" justifyContent="center">
            <Text
              opacity={0.9}
              fontSize={{ base: "md", xl: "md" }}
              textAlign="center"
              mt="6"
            >
              I'm interested in contributing to interesting projects and ideas.
              {/* I'm currently looking to join a team passionate about
            improving the lives of the people around them */}
            </Text>
          </Box>
          <Text opacity={0.8} color="#3e8dc6" fontSize="16px" mt="6">
            <Link href="mailto:adebayorilerioluwa@gmail.com" color="#3e8dc6">
              Say hello to me
            </Link>
          </Text>
          <Box mt="3" mx="auto" p="6">
            <Flex align="center" justify="center">
              <Flex mr="2">
                <Link
                  href="https://dev.to/adebayoileri"
                  alt="adebayo_devto"
                  isExternal
                >
                  <FaDev size="30px" />
                </Link>
              </Flex>
              <Flex mr="2">
                <Link
                  href="https://stackoverflow.com/users/12805828/adebayo-ilerioluwa"
                  isExternal
                  alt="adebayo_stackoverflow"
                >
                  <FaStackOverflow size="30px" />
                </Link>
              </Flex>
              <Flex mr="2">
                <Link
                  href="https://github.com/adebayoileri"
                  alt="adebayo_github"
                  isExternal
                >
                  <FaGithub size="30px" />
                </Link>
              </Flex>
              <Flex mr="2">
                <Link
                  href="https://www.linkedin.com/in/adebayoileri/"
                  alt="adebayo_linkedin"
                  isExternal
                >
                  <FaLinkedin size="30px" />
                </Link>
              </Flex>
              <Flex>
                <Link
                  href="https://twitter.com/adeileri"
                  alt="adebayo_twitter"
                  isExternal
                >
                  <FaTwitter size="30px" />
                </Link>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
}
