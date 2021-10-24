import { VStack, Box, Heading, Divider, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Card from '../components/Card';
import objData from '../assets/object_data';



function Main() {
    return (
        <Box mb={10}>
            <VStack>
                <Box >
                    <Heading p={10} textAlign='center'>
                        Family Australia
                    </Heading>
                    <Box>A description which describes family. A description which describes family. A description which describes family. A description which describes family. A description which describes family. A description which describes family. A description which describes family. A description which describes family. </Box>
                </Box>
                <Box pt={6}>
                    <iframe width="776" height="436" src="https://www.youtube.com/embed/HNCKhFGcVaM" title="Family Australia Promotional Vid" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Box>    
            </VStack>
            <Divider p={2}/>
            <SimpleGrid columns={3} spacing={5} py={5}>
               {objData.map((data, id) => {
                   return(
                        <Card   
                            key={id}
                            animation={data.animation}
                            name={data.name}
                            price={data.price}
                            colour={data.colour}
                            size={data.size}
                        />
                   )
               })}
            </SimpleGrid>
        </Box>
    )
}

export default Main
