import React from 'react'
import { useState, useEffect } from 'react'
import { ItemDetail } from '../ItemDetail'
import {Text} from '@chakra-ui/react'
import { Container } from './style'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(()=>{
        const getProduct = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                const product = await res.json();
                setItem(product);
                setLoading(false);
    
            } catch (error) {
                console.error('Se produjo un error: ',error);
            }

        }
        getProduct();

    },[])


  return (
    <Container>
        <div className="container_card">
            {loading ?  <Text>Cargando...</Text> :  <ItemDetail item = {item}/>}
        </div> 
    </Container>
  )
}

export {ItemDetailContainer} 