import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {  ChakraProvider  } from '@chakra-ui/react'; 
import { customTheme } from './styles/customTheme';
import "@fontsource/marck-script";
import "@fontsource/raleway"


// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
