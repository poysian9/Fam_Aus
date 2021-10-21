import { VStack, Box, Heading, Divider } from '@chakra-ui/react';
import React from 'react';
import Card from '../components/Card';

function Main() {
    return (
        <VStack>
            <Box >
                <Heading p={10} textAlign='center'>
                    Family Australia
                </Heading>
                <p>A description which describes family. A description which describes family. A description which describes family. A description which describes family. A description which describes family. A description which describes family. A description which describes family. A description which describes family. </p>
            </Box>
            <Divider p={2}/>
            <Box>
               <Card>

               </Card>
            </Box>
        </VStack>
    )
}

export default Main
