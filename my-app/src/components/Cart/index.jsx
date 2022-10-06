import React from 'react'
import { useCartContext } from '../../Contex/CartContex';
import {Container, Tabla, TablaProducts, Container_Tablas} from './style'


const Cart = () => {
  const {cart,totalPrice} = useCartContext();
  return (
    <Container>
      <Container_Tablas>
        <Tabla>
          <div className='Tabla_Product'>Productos</div>
          <div className='Tabla_Cant'>Cantidad</div>
          <div className='Tabla_Total'>Total de producto</div>
        </Tabla>
        {
          cart.map(item => 
              <>
                <TablaProducts>
                  <div className='Product'>
                    <img src={item.image} alt="" />
                    {item.title}
                  </div>
                  <div className='Cant'>{item.quantity}</div>
                  <div className='Total'>{ '$ '+item.price}</div>
                </TablaProducts>
              </>
            )
        }
        <div className="totalPrice"><h2>{'Total: $'+totalPrice()}</h2></div>


      </Container_Tablas>

    </Container>

  )
}

export default Cart