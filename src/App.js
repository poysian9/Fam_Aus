import NavBar from './layout/NavBar';
import Main from './layout/Main';
import Footer from './layout/Footer';
import { Box , Divider} from '@chakra-ui/layout';

import React from 'react'

function App() {
    return (
        <Box bg='primary'>
            <Box maxW='90%' margin="auto" >
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

