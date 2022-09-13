import { Spinner } from '@chakra-ui/react'
import { ItemCount } from'../ItemCount'
import {ListContainer} from './style'
import { products } from '../../utils/products'
import { customFetch } from '../../utils/customFetch'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList'


const ItemListContainer = ({greeting}) => {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    customFetch(products)
      .then(res =>{
        setLoading(false);
        setListProduct(res);
      } )
  },[])

  return (
    <ListContainer>
        <h1>{greeting}</h1>
        {
          loading ? <Spinner /> : <ItemList listProduct={listProduct}/>
        }

        {/* <ItemCount initial={1} stock={5} onAdd ={()=>{}}/> */}

    </ListContainer>
  )
}

export {ItemListContainer}