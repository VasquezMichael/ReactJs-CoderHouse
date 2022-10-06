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
  return (
    <Cart>
      <Image>
        <img src={item.image} alt="" />
        
      </Image>
      <hr></hr>
      <Contenido>
        <h2 className="title">{item.title}</h2>
        <div className="description">
          <p className=" description_p">{item.description}</p>
        </div>
        <h3>{'$'+item.price}</h3>
        {
          !Added ? 
          <ItemCount initial = {1} stock={5} onAdd = {onAdd}/>  :

            <NavLink className='NavLink' to = '/cart'>
              Ir al carrito
            </NavLink>

        }
      </Contenido>
    </Cart>
  )
}

export {ItemDetail}