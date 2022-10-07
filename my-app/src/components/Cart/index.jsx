import React from 'react'
import { useCartContext } from '../../Contex/CartContex';
import {Container, Tabla, TablaProducts, Container_Tablas, Container_No_Items} from './style'
import { CloseButton, Text, Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
const Cart = () => {
  const {
    cart,
    totalPrice,
    removeProduct,
    cleanCart
  } = useCartContext();

  return (
    <>
      {
        cart.length != 0 ?     
        <Container>
          <Container_Tablas>
            <Tabla>
              <div className='Tabla_Product'>Productos</div>
              <div className='Tabla_Cant'>Cantidad</div>
              <div className='Tabla_Total'>Total de producto</div>
            </Tabla>
            {
              cart.map(item => 
                  <TablaProducts key={item.id}>
                    <div className='Product'>
                      <img src={item.image} alt="" />
                      {item.title}
                    </div>
                    <div className='Cant'>{item.quantity}</div>
                    <div className='Total'>
                      {'$ '+item.price}
                      <CloseButton onClick= {() => removeProduct(item.id)}  id='CloseButton' size='md' />
                    </div>
                  </TablaProducts>
                )
            }
            <div className="totalPrice">
              <h2>
                {
                'Total: $'+totalPrice()
                }
                
             </h2>
             <Button onClick={() => cleanCart()} size='sm'>Clear</Button>
            </div>
          </Container_Tablas>
        </Container> 
        : 
        <Container_No_Items>
          <div className="ContainerElements">
            <Text>Aun no hay productos en el carrito</Text>
            <NavLink className='NavLink' to = '/'>
              to Shop
            </NavLink>
          </div>
        </Container_No_Items>
      }
    </>
  )
}

export default Cart