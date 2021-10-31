import {React, useState} from 'react';
import { Box, Image, Badge, VStack, Spacer, HStack, Select, FormControl } from '@chakra-ui/react';
import { inventory } from '../assets/inventory';


 export default function Card3() {
    let animation = 'https://bafybeielilzwafozh7ihwo4zbbxdly4z4hjsnjc4n4jobx2abh6isrbefi.ipfs.dweb.link/';
    const [Size, setSize] = useState(12)
    return (
        <Box maxW='sm' border='4px' borderRadius='lg' p={3} borderColor='whiteAlpha.800'>
            <a href={animation} target='_blank' rel='noreferrer'>
                <Image mb={2} src={animation} borderRadius='lg'/>
            </a>
            
            <VStack pt={2} mx={1} align='initial'color='whiteAlpha.800'>
                <HStack pb={2} textDecoration='underline'>
                    <Box fontWeight='semibold' as='h4' >
                        Family Crewneck
                    </Box>
                    <Spacer/>
                    <Box >
                        100 FTM
                    </Box>
                </HStack>
                <Box align='start'>
                    <Badge borderRadius='full' p={2} color='whiteAlpha.900' textDecoration='underline' bgColor='#65BB85' maxW='md'>
                        Sage
                    </Badge>  
                </Box>
                <FormControl>
                    <HStack pt={50} >
                        
                            <Box as='h4'>
                                Stock: {inventory[Size]}
                            </Box>
                            <Spacer/>
                            <Select color='secondary' 
                                    maxW='40%' 
                                    onChange={(e) => {
                                        e.preventDefault()
                                        setSize(e.target.options[e.target.selectedIndex].value)
                                    }}>
                                <option value={10} >X-Small</option>
                                <option value={11} >Small</option>
                                <option value={12} selected>Medium</option>
                                <option value={13} >Large</option>
                                <option value={14}>X-Large</option>
                            </Select>
                        
                    </HStack>
                </FormControl>
            </VStack>
            
        </Box>
    )
}
