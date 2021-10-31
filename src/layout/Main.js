import { VStack, Box, Heading, Divider, SimpleGrid, Image } from '@chakra-ui/react';
import React from 'react';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import Card4 from '../components/Card4';
import Card5 from '../components/Card5';
import objData from '../assets/object_data';
import ftmHead from '../assets/ftmHead.png';



function Main() {
    return (
        <Box mb={2}>
            <VStack>
                <Box h={2}/>
                <Box >
                    <Heading as='h1' size='4xl' p={10} textAlign='center' letterSpacing='widest' m={10} textShadow='4px 4px #ff0000' color='primary' appearance='menulist'>
                        Family Australia
                    </Heading>
                    <Box pb={20} px={60} color='whiteAlpha.700' align='center'>
                        A description which describes family. A description which describes family. A description which describes family. A description which describes family. A description which describes family. A description which describes family. A description which describes family. A description which describes family. 
                    </Box>
                </Box>
                <Box pt={6}>
                    <iframe width="776" height="436" src="https://www.youtube.com/embed/HNCKhFGcVaM" title="Family Australia Promotional Vid" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Box>    
            </VStack>
            <Divider p={2}/>
            <SimpleGrid minChildWidth='400px' spacing={10} py={5} textAlign='center' justifyItems='center'>
               <Card1/>
               <Card2/>
               <Card3/>
               <Card4/>
               <Card5/>
            </SimpleGrid>
        </Box>
    )
}

export default Main
