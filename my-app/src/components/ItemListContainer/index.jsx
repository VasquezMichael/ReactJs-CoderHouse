import { Spinner } from '@chakra-ui/react'
import { ItemCount } from'../ItemCount'
import {Container, ContainerTittle, ListContainer} from './style'
import { products } from '../../utils/products'
import { customFetch, getListProduct  } from '../../utils/customFetch'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const {category} = useParams();
  const URL_BASE = 'https://fakestoreapi.com/products';
  const URL_CATEGORY = 'https://fakestoreapi.com/products/category';
  let url = '';
  
  useEffect(()=>{

    category ? url = URL_CATEGORY + '/'+category : url = URL_BASE;

    const getListProduct = async () => {
      try { 
        const res = await fetch(`${url}`);
        const listProduct = await res.json();
        setLoading(false);
        setListProduct(listProduct);
      }
       catch (error) {
        console.log(error);
      }

    }
    getListProduct();
  },[category])

  return (
    <Container>
        <ContainerTittle>
          <h1>{
            category ?  category + greeting : greeting 
          }</h1>
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