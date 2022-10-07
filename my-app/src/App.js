import './App.css';
import {Navbar} from './components/Navbar'
import {ItemListContainer} from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { ItemCount } from './components/ItemCount';
import Cart from './components/Cart';
import { CartContexProvider } from './Contex/CartContex';
function App() {
  return (
    <>
      <ChakraProvider>
        <CartContexProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path={'/'} element={<ItemListContainer greeting = 'Welcome to DripCode'/>} />
              <Route path={'/category/:category'} element={<ItemListContainer greeting = ' List'/>}/>
              <Route path={'/product/:id'} element={<ItemDetailContainer/>}/>
              <Route path={'/cart'} element={<Cart/>}/>
            </Routes>
          </BrowserRouter>
        </CartContexProvider>
        
      </ChakraProvider>
    </>
  );
}

export default App;
