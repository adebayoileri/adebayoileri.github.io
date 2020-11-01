import React from "react";
import {
    Box,
    Link
} from "@chakra-ui/core";
import {
    FaGithub,
    FaExternalLinkAlt
} from "react-icons/fa"

export default function ProjectCard() {
    return (
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" height="280px">
            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                    //   ml="2"
                    >
                        Javascript
            </Box>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        SHELL(SH)
            </Box>
                </Box>

                <Box
                    mt="2"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    CleanUp Create-React-App
          </Box>
                <Box
                    mt="2"
                    as="h4"
                    color="gray.500"
                    lineHeight="tight"
                >
                    <span role="img" aria-label="hammer">🔨 </span>Remove unwanted files from default create-react-app
          </Box>

            </Box>

            <Box d="flex" p="6" pb="0" alignItems="center">
                <Link href="https://github.com/adebayoileri/cleanup-create-react-app" isExternal mr="2">
                    <FaGithub />
                </Link>
                <Link href="https://www.npmjs.com/package/cleanup-create-react-app" isExternal mr="2">
                    <FaExternalLinkAlt />
                </Link>
            </Box>
        </Box>
    );
}