import React from 'react'
import { useState, useEffect } from 'react'
import { ItemDetail } from '../ItemDetail'
import {Text} from '@chakra-ui/react'
import { Container } from './style'
import { useParams } from 'react-router-dom'

import { collection, getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/firebase'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(()=>{
        const getProduct = async () => {
            setLoading(true);
            const productCollection = collection(db,'products');
            const refDoc = doc(productCollection,id);
            try {
                const product = await getDoc(refDoc);
                
                setItem({
                    ...product.data(),
                    id: product.id
                })
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        getProduct();
    },[id])


  return (
    <Container>
        <div className="container_title">
            <h1>{item.category} / {item.title}</h1>
        </div>
        <div className="container_card" style={{height: window.screen.height}}>
            {loading ?  <Text>Cargando...</Text> :  <ItemDetail item = {item}/>}
        </div> 
    </Container>
  )
}

export {ItemDetailContainer} 