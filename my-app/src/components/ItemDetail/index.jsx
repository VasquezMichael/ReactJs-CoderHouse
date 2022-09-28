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
        <div className="description">
          <p className=" description_p">{listProduct.description}</p>
        </div>
        <h3>{'$'+listProduct.price}</h3>
      </Contenido>
    </Cart>
  )
}

export {ItemDetail}