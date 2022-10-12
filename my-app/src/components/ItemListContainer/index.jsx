import { Spinner } from '@chakra-ui/react'
import {Container, ContainerTittle, ListContainer} from './style'
import { products } from '../../utils/products'
import { customFetch, getListProduct  } from '../../utils/customFetch'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import { getDocs, collection, query, where} from 'firebase/firestore'
import { async } from '@firebase/util'

const ItemListContainer = ({greeting}) => {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const {category} = useParams();
  const URL_BASE = 'https://fakestoreapi.com/products';
  const URL_CATEGORY = 'https://fakestoreapi.com/products/category';
  let url = '';
  
  useEffect(()=>{
    //Obtenemos la coleccion de productos desde la base de datos.
    const productsCollection = collection(db, 'products');
    category ? url = query(productsCollection, where('category', '==', `${category}`)) : url = productsCollection;
 
    const getCollectionProducts = async () => {
      try {
        const res = await getDocs(url);
        const list = res.docs.map((product) => {
          return {...product.data(), id: product.id}
        })
        setLoading(false);
        setListProduct(list); 
      }
       catch (error) {
        console.log(error);
      }
    }

    getCollectionProducts();



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