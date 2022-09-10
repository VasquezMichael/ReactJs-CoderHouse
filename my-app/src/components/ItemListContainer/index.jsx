import React from 'react'
import { ItemCount } from'../ItemCount'
import {ListContainer} from './style'
const ItemListContainer = ({greeting}) => {
  return (
    <ListContainer>
        <h1>{greeting}</h1>
        <ItemCount initial={1} stock={5} onAdd ={()=>{}}/>
    </ListContainer>
  )
}

export {ItemListContainer}