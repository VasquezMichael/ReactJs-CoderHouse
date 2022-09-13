import React from 'react'
import { Item } from '../Item/Item'


const ItemList = ({listProduct}) => {
    console.log(listProduct);
  return (
    <>
        {Object.values(listProduct).map(product => <Item key={product.id} product={product}/> )}
    </>
  )
}

export {ItemList}