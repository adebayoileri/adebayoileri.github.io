import React from "react";
import { Box, chakra, Text, Link } from "@chakra-ui/core";

export default function Footer() {
  return (
    <>
      <Box p="8" bg="#f5f7fa">
        <Box maxW="760px" mx="auto" textAlign="center">
          <chakra.h5
            fontSize="5xl"
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

          <Text opacity={0.7} fontSize={{ base: "lg", lg: "xl" }} mt="6">
          I'm currently looking to join a team who is passionate about improving the lives of the people around them
          </Text>
          <Text opacity={0.8} color="#3e8dc6" fontSize="16px" mt="6">
            <Link href="mailto:adebayorilerioluwa2gmail.com" color="#3e8dc6">Say hello to me</Link>
          </Text>
        </Box>
      </Box>
    </>
  );
}
