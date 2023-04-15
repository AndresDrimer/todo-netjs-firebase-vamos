import { Box, Heading, Flex, Button, useColorMode } from "@chakra-ui/react";
import Auth from "./Auth";
import { FaGoogle, FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <nav>
      <Flex justify="flex-end" align="center" top="0%" right="0%" py="20px" >
        {" "}
        <Button onClick={() => toggleColorMode()}>
          {colorMode == "dark" ? <FaSun /> : <FaMoon />}
        </Button>
        </Flex><Flex>
        <Heading textAlign="center" flex="3" fontSize='8xl' py="5" textShadow='1px 1px gray' mt="-20px">
          TODO
        </Heading>
      </Flex>
    </nav>
  );
}

export default Navbar;
