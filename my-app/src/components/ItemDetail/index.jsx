import React from 'react'
import { Cart,Image, Contenido } from './style';
import { ItemCount } from '../ItemCount';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ItemDetail = ({listProduct}) => {

  const [Added,SetAdded] = useState(false)

  const onAdd = () => {
    SetAdded(true);
  }
  return (
    <Cart>
      <Image>
        <img src={listProduct.image} alt="" />
        
      </Image>
      <hr></hr>
      <Contenido>
        <h2 className="title">{listProduct.title}</h2>
        <div className="description">
          <p className=" description_p">{listProduct.description}</p>
        </div>
        <h3>{'$'+listProduct.price}</h3>
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