import React from 'react';
import { Box, Image, Badge } from '@chakra-ui/react';
import chao from './../assets/chao.jpg'

export default function Card() {
    return (
        <Box maxW="xs">
            <a>
                <Image src={chao}/>
            </a>
            
            <Box mt={4} mx={1}>
                <Box fontWeight='semibold' as='h4'float='left'>
                    Family Crewneck
                </Box>
                <Box float='right'>
                    Small
                </Box>
            </Box>
            <Badge borderRadius='full' p={2} colorScheme='teal'>
                Olive
            </Badge>
        </Box>
    )
}
