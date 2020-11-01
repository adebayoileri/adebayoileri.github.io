import React from "react";
import {
    Box,
    Link,
    // Icon
} from "@chakra-ui/core";
import {
    FaGithub,
    FaExternalLinkAlt
} from "react-icons/fa"

export default function ProjectCard() {
    return (
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
            {/* <Image src={property.imageUrl} alt={property.imageAlt} /> */}

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    {/* <Badge rounded="full" px="2">
              New
            </Badge> */}
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
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    // ml="2"
                    lineHeight="tight"
                    isTruncated
                >
                    CleanUp Create-React-App
          </Box>
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    // ml="2"
                    lineHeight="tight"
                // isTruncated
                >
                    <span role="img" aria-label="hammer">🔨 </span>Remove unwanted files from default create-react-app
          </Box>
                {/* <Box>
                    NPM Package
          </Box> */}

                <Box d="flex" mt="3" alignItems="center">
                    <Link href="https://github.com/adebayoileri/cleanup-create-react-app" isExternal mr="2">
                        {/* View On Github  */}
                    <FaGithub  />
                    </Link>
                    <Link href="https://www.npmjs.com/package/cleanup-create-react-app" isExternal mr="2">
                    <FaExternalLinkAlt/>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}