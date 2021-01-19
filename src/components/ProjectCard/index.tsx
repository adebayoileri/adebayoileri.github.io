import React from "react";
import { Box, Link } from "@chakra-ui/core";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard(props: any) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      height="280px"
    >
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          {props.lng &&
            props.lng.map((lang: string) => (
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {lang}
              </Box>
            ))}
        </Box>
        <Box
          mt="2"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {props.title}
        </Box>
        <Box
          mt="2"
          as="h4"
          color="gray.500"
          lineHeight="tight"
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></Box>
      </Box>

      <Box d="flex" p="6" pb="0" alignItems="center">
        <Link href={props.githubLink} isExternal mr="2">
          <FaGithub />
        </Link>
        <Link href={props.otherLink} isExternal mr="2">
          <FaExternalLinkAlt />
        </Link>
      </Box>
    </Box>
  );
}
