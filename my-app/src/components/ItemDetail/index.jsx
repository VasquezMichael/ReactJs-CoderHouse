import React from 'react'

const ItemDetail = ({listProduct}) => {
    console.log(listProduct);
  return (
    <div>{listProduct.title}</div>
  )
}

export {ItemDetail}