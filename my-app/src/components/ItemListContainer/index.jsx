import { Spinner } from '@chakra-ui/react'
import { ItemCount } from'../ItemCount'
import {Container, ContainerTittle, ListContainer} from './style'
import { products } from '../../utils/products'
import { customFetch, getListProduct  } from '../../utils/customFetch'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList'


const ItemListContainer = ({greeting}) => {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const getListProduct = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products?limit=5');
        const listProduct = await res.json();
        setLoading(false);
        setListProduct(listProduct);
      } catch (error) {
        console.log(error);
     }

    }
    getListProduct();
  },[])

  return (
    <Container>
        <ContainerTittle>
          <h1>{greeting}</h1>
        </ContainerTittle>

        <ListContainer>
          {
            loading ? <Spinner /> : <ItemList listProduct={listProduct}/>
          }

          {/* <ItemCount initial={1} stock={5} onAdd ={()=>{}}/> */}

        </ListContainer>
    </Container>



  )
}

export {ItemListContainer}