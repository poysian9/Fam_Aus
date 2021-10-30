import { Flex, Box, Spacer, Button, Icon } from '@chakra-ui/react';
import React from 'react';
import { MdWbSunny } from "react-icons/md";
import Web3 from 'web3';



function NavBar() {
    async function loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
          }
          else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
          }
          else {
            window.alert('Non-Ethereum browser detected. You should consider installing MetaMask!')
          }
    }

    return (
        <Flex pt={4}> 
            <Box>   
                Fam Logo
            </Box>
            <Spacer/>
            <Button type ='submit' color = "secondary" variant="outline" borderColor='secondary' onClick={() => loadWeb3()}>
                Connect+
            </Button>
            <Button variant="ghost">
               <Icon as={MdWbSunny}/> 
            </Button>
        </Flex>
    )
}

export default NavBar
