import { VStack, Box, Heading, Divider, SimpleGrid, Image } from '@chakra-ui/react';
import React from 'react';
import Card from '../components/Card';
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
               {objData.map((data, id) => {
                   return(
                        <Card   
                            key={id}
                            animation={data.animation}
                            name={data.name}
                            price={data.price}
                            colour={data.colour}
                            size={data.size}
                            bgColour={data.bgColour}
                        />
                   )
               })}
            </SimpleGrid>
        </Box>
    )
}

export default Main
