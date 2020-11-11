import * as React from "react"
import {
  ChakraProvider,
  CSSReset,
} from "@chakra-ui/core"
import theme from "@chakra-ui/theme";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./components/Footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Router>
    <Route exact path="/" component={Home}/>
    <Route path="/about"component={About} />
    </Router>
    <Footer/>
  </ChakraProvider>
)
