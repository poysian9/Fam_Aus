import { Box, HStack, FormControl, Input, Heading, Button, Spacer } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
    return (
        <Box>
            <HStack p={10}>
                <FormControl maxW='55%'>
                    <Heading>Subscribe for exclusive offers!</Heading>
                    <Input placeholder='example@hotmail.com'></Input>
                    <Button type='submit'>
                        Subscribe!
                    </Button>
                </FormControl>
                <Spacer></Spacer>
                <Box>
                    <Heading pb={8}>
                        Join the  fam today!
                    </Heading>
                    <Box fontWeight='semibold'>CONTACT</Box>
                    <Box>contact@familyaustralia.io</Box>
                </Box>
            </HStack>
            <Box p={2} fontSize='xx-small' align='center'>© 2021 FAMILY AUS</Box>
        </Box> 
    )
}
