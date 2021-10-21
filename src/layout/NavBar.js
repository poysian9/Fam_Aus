import { Flex, Box, Spacer, Button, Icon } from '@chakra-ui/react'
import React from 'react'
import { MdWbSunny} from "react-icons/md"

function NavBar() {
    return (
        <Flex m={6}> 
            <Box>
                Fam Logo
            </Box>
            <Spacer/>
            <Button color = "#FF959D" variant="outline">
                Connect+
            </Button>
            <Button variant="ghost">
               <Icon as={MdWbSunny}/> 
            </Button>
        </Flex>
    )
}

export default NavBar
