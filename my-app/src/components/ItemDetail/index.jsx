import React from 'react'
import { Cart,Image, Contenido } from './style';
import { ItemCount } from '../ItemCount';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../Contex/CartContex';


const ItemDetail = ({item}) => {
  const [Added,SetAdded] = useState(false);
  const {addCart} = useCartContext();
  
  const onAdd = (count) => {
    addCart(item,count)
    SetAdded(true); 
  }
  const hayStock = () => {
    return item.stock > 0
  }

  return (
    <Cart>
      <Image>
        <img src={item.image} alt="" />
      </Image>
     
      <Contenido>
        <h2 className="title">{item.title}</h2>
        <div className="description">
          <p className=" description_p">{item.description}</p>
        </div>
        <h3>{'$'+item.price}</h3>
        {
          hayStock() ?  
            !Added ? 
                <ItemCount initial = {1} stock={item.stock} onAdd = {onAdd}/>  
              :
                <NavLink aria-disabled = 'true' className='NavLink' to = '/cart'>
                  Ir al carrito
                </NavLink>
              :
            <h2>Lo siento, no hay stock :(</h2>

        }
      </Contenido>
    </Cart>
  )
}

export {ItemDetail}