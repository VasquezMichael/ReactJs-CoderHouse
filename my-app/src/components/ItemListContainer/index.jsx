import { Spinner } from '@chakra-ui/react'
import {Container, ContainerVideo, ListContainer} from './style'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import Video from './video.mp4'
import { getDocs, collection, query, where} from 'firebase/firestore'

const ItemListContainer = ({greeting}) => {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const {category} = useParams();
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
      {
        greeting ? <video src={Video} autoPlay loop muted></video> : <>
          <div className="tituloLista">
            <h1>Home / productos / {category}</h1>
          </div>
        </>
      }

      <ListContainer>
        {
          loading ? <Spinner /> : <ItemList listProduct={listProduct}/>
        }
      </ListContainer>
    </Container> 

  )
}

export {ItemListContainer}