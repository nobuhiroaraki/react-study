import React from 'react';
import logo from './logo.svg';
import { ChakraProvider,Button } from '@chakra-ui/react';
import {theme} from "./theme/theme"

function App() {
  return (
    <ChakraProvider theme = {theme}>
      <Button colorScheme="teal">テストボタン</Button>
    </ChakraProvider>
  );
}

export default App;
