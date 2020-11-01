import * as React from "react"
import {
  ChakraProvider,
  CSSReset,
} from "@chakra-ui/core"
import theme from "@chakra-ui/theme";
import Home from "./Pages/Home";

export const App = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Home />
  </ChakraProvider>
)
