import React from 'react'
import { Box, Heading, Flex } from '@chakra-ui/react'
import Auth from './Auth'


function Navbar() {
  return (
    <nav>
  
    <Flex justify='center' align="center" top="0%" right="0%" py="20px">
      <Heading textAlign="center" flex="3">TODO<br/> ORGANIZER</Heading>
    </Flex>
  
    </nav>

  )
}

export default Navbar