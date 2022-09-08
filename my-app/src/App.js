import './App.css';
import {Navbar} from './components/Navbar'
import {ItemListContainer} from './components/ItemListContainer'

import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <>
      <Navbar/>
      <ChakraProvider>
        <ItemListContainer greeting = 'Bienvenido a DripCode pana'/>
      </ChakraProvider>
    </>
  );
}

export default App;
