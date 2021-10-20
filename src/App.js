import NavBar from './layout/NavBar';
import Main from './layout/Main';
import { Box , Divider} from '@chakra-ui/layout';

import React from 'react'

function App() {
    return (
        <Box mx={20} my={10}>
            <NavBar></NavBar>
            <Divider p={2}/>
            <Main></Main>
            <footer></footer>
        </Box>
    )
}

export default App

