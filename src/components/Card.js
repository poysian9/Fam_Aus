import React from 'react';
import { Box, Image, Badge, VStack, Spacer, HStack } from '@chakra-ui/react';
import chao from './../assets/chao.jpg'

export default function Card() {
    return (
        <Box maxW="xs" border='1px' borderRadius='xl' p={3}>
            <a>
                <Image src={chao}/>
            </a>
            
            <VStack mt={6} mx={1} align='initial'>
                <HStack>
                    <Box fontWeight='semibold' as='h4'>
                        Family Crewneck
                    </Box>
                    <Spacer/>
                    <Box >
                        100 FTM
                    </Box>
                </HStack>
                <HStack>
                    <Badge borderRadius='full' p={2} colorScheme='teal'>
                        Olive
                    </Badge>
                    <Spacer/>
                    <Box >
                        Small
                    </Box>
                </HStack>
                
            </VStack>
            
        </Box>
    )
}
