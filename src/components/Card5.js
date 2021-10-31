import {React, useState} from 'react';
import { Box, Image, Badge, VStack, Spacer, HStack, Select, FormControl } from '@chakra-ui/react';
import { inventory } from '../assets/inventory';


 export default function Card5() {
    let animation = 'https://bafybeigwfjmz5r6awe2nts5o7wwrony56v2oogys2ikrbsxar2sz6xtjqe.ipfs.dweb.link/';
    const [Size, setSize] = useState(22)
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
                    <Badge borderRadius='full' p={2} color='whiteAlpha.900' textDecoration='underline' bgColor='#F8D2A6' maxW='md'>
                        Peach
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
                                <option value={20} >X-Small</option>
                                <option value={21} >Small</option>
                                <option value={22} selected>Medium</option>
                                <option value={23} >Large</option>
                                <option value={24}>X-Large</option>
                            </Select>
                        
                    </HStack>
                </FormControl>
            </VStack>
            
        </Box>
    )
}
