import './App.css';
import {Navbar} from './components/Navbar'
import {ItemListContainer} from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { ItemCount } from './components/ItemCount';
import Cart from './components/Cart';
function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path={'/'} element={<ItemListContainer greeting = 'Bienvenido a DripCode'/>} />
            <Route path={'/category/:category'} element={<ItemListContainer greeting = 'Listado de: '/>}/>
            <Route path={'/product/:id'} element={<ItemDetailContainer/>}/>
            <Route path={'/cart'} element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
        
      </ChakraProvider>
    </>
  );
}

export default App;
