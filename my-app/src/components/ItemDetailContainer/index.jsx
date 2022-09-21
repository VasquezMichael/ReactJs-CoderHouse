import { Text } from '@chakra-ui/react';
import React from 'react'
import { useState, useEffect } from 'react'
import { ItemDetail } from '../ItemDetail'


const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const getProduct = async () => {
            setLoading(true);
            try {
                const res = await fetch('https://fakestoreapi.com/products/1');
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
    <>
        {loading ?  <Text>Cargando...</Text> :  <ItemDetail listProduct = {listProduct}/>}
        
    </>
  )
}

export {ItemDetailContainer} 