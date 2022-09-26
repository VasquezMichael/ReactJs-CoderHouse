import React from 'react'
import { Cart,Image, Contenido } from './style';


const ItemDetail = ({listProduct}) => {
  return (
    <Cart>
      <Image>
        <img src={listProduct.image} alt="" />
      </Image>
      <Contenido>
        <h2 className="title">{listProduct.title}</h2>
        <p className=" description">{listProduct.description}</p>
        <h3>{listProduct.price}</h3>
      </Contenido>
    </Cart>
  )
}

export {ItemDetail}