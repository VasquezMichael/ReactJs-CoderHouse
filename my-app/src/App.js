import './App.css';
import {Navbar} from './components/Navbar'
import {ItemListContainer} from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Cart from './components/Cart';
import { CartContexProvider } from './Contex/CartContex';
import { NavBarContextProvider } from './Contex/NavBarContext'
function App() {
  return (
    <>
      <ChakraProvider>
        <CartContexProvider>
          <NavBarContextProvider>
            <BrowserRouter>
              <Navbar/>
              <Routes>
                <Route path={'/'} element={<ItemListContainer greeting = 'Zz-Shop'/>} />
                <Route path={'/category/:category'} element={<ItemListContainer greeting = ''/>}/>
                <Route path={'/product/:id'} element={<ItemDetailContainer/>}/>
                <Route path={'/cart'} element={<Cart/>}/>
              </Routes>
            </BrowserRouter>
          </NavBarContextProvider>
        </CartContexProvider>
        
      </ChakraProvider>
    </>
  );
}

export default App;
