import { Flex, Box, Spacer, Button, Icon } from '@chakra-ui/react'
import React from 'react'
import { MdWbSunny} from "react-icons/md"

function NavBar() {
    return (
        <Flex pt={4}> 
            <Box>
                Fam Logo
            </Box>
            <Spacer/>
            <Button color = "secondary" variant="outline" borderColor='secondary'>
                Connect+
            </Button>
            <Button variant="ghost">
               <Icon as={MdWbSunny}/> 
            </Button>
        </Flex>
    )
}

export default NavBar
