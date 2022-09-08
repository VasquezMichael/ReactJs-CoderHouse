import React from 'react'
import { ItemCount } from'../ItemCount'
const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h1>{greeting}</h1>
        <ItemCount initial={1} stock={5} onAdd ={()=>{}}/>
    </div>
  )
}

export {ItemListContainer}