import { Box, HStack, FormControl, Input, Heading, Button, Spacer } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
    return (
        <Box>
            <HStack p={10}>
                <FormControl maxW='55%'>
                    <Heading color='secondary'>Subscribe for exclusive offers!</Heading>
                    <Input placeholder='example@hotmail.com' color='whiteAlpha.800'></Input>
                    <Button type='submit'>
                        Subscribe!
                    </Button>
                </FormControl>
                <Spacer></Spacer>
                <Box color='whiteAlpha.700'>
                    <Heading color='secondary' pb={5}>
                        Join the  fam today!
                    </Heading>
                    <Box fontWeight='semibold'>CONTACT</Box>
                    <Box>contact@familyaustralia.io</Box>
                </Box>
            </HStack>
            <Box p={2} color='whiteAlpha.800' fontSize='xx-small' align='center'>© 2021 FAMILY AUS</Box>
        </Box> 
    )
}
