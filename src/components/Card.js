import {React, useState} from 'react';
import { Box, Image, Badge, VStack, Spacer, HStack, Select, FormControl } from '@chakra-ui/react';

 export default function Card({animation, name, price, colour, size}) {
     const [Size, setSize] = useState('md')
    return (
        <Box maxW='sm' border='1px' borderRadius='xl' p={3}>
            <a href={animation} target='_blank' rel='noreferrer'>
                <Image mb={2} src={animation} borderRadius='xl'/>
            </a>
            
            <VStack pt={2} mx={1} align='initial'>
                <HStack pb={2}>
                    <Box fontWeight='semibold' as='h4'>
                        {name}
                    </Box>
                    <Spacer/>
                    <Box >
                        {price}
                    </Box>
                </HStack>
                <Box>
                    <Badge borderRadius='full' p={2} colorScheme='teal' maxW='md' >
                        {colour}
                    </Badge>  
                </Box>
                <FormControl>
                    <HStack pt={50} >
                        
                            <Box as='h4'>
                                Stock: {size[Size]}
                            </Box>
                            <Spacer/>
                            <Select maxW='40%' 
                                    onChange={(e) => {
                                        e.preventDefault()
                                        setSize(e.target.options[e.target.selectedIndex].value)
                                    }}>
                                <option value="xs">X-Small</option>
                                <option value="sm">Small</option>
                                <option value="md" selected>Medium</option>
                                <option value="lg">Large</option>
                                <option value="xl">X-Large</option>
                            </Select>
                        
                    </HStack>
                </FormControl>
            </VStack>
            
        </Box>
    )
}
