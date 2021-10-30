import NavBar from './layout/NavBar';
import Main from './layout/Main';
import Footer from './layout/Footer';
import { Box , Divider} from '@chakra-ui/layout';
import { React, useState } from 'react';
import Web3 from 'web3';

function App() { 

    return (
        <Box bg='background'>
            <Box maxW='90%' margin="auto" overflowX='hidden'>
                <NavBar></NavBar>
                <Divider p={2}/>
                <Main></Main>
                <Divider p={2}/>
                <Footer></Footer>
            </Box>
        </Box>
        
    )
}

export default App

