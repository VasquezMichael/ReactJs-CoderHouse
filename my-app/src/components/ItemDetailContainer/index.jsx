import React from 'react'
import { useState, useEffect } from 'react'
import { ItemDetail } from '../ItemDetail'
import {Text} from '@chakra-ui/react'
import { Container } from './style'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(()=>{
        const getProduct = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                const product = await res.json();
                setListProduct(product);
                setLoading(false);
    
            } catch (error) {
                console.error('Se produjo un error: ',error);
            }

        }
        getProduct();

    },[])


  return (
    <Container>
        {loading ?  <Text>Cargando...</Text> :  <ItemDetail listProduct = {listProduct}/>}
        
    </Container>
  )
}

export {ItemDetailContainer} 