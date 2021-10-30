import {React, useState} from 'react';
import { Box, Image, Badge, VStack, Spacer, HStack, Select, FormControl } from '@chakra-ui/react';

 export default function Card({animation, name, price, colour, bgColour, size}) {
    const [Size, setSize] = useState('md')
    return (
        <Box maxW='sm' border='4px' borderRadius='lg' p={3} borderColor='whiteAlpha.800'>
            <a href={animation} target='_blank' rel='noreferrer'>
                <Image mb={2} src={animation} borderRadius='lg'/>
            </a>
            
            <VStack pt={2} mx={1} align='initial'color='whiteAlpha.800'>
                <HStack pb={2} textDecoration='underline'>
                    <Box fontWeight='semibold' as='h4' >
                        {name}
                    </Box>
                    <Spacer/>
                    <Box >
                        {price}
                    </Box>
                </HStack>
                <Box align='start'>
                    <Badge borderRadius='full' p={2} color='whiteAlpha.900' textDecoration='underline' bgColor={bgColour} maxW='md'>
                        {colour}
                    </Badge>  
                </Box>
                <FormControl>
                    <HStack pt={50} >
                        
                            <Box as='h4'>
                                Stock: {size[Size]}
                            </Box>
                            <Spacer/>
                            <Select color='secondary' 
                                    maxW='40%' 
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
