import React,{ useState } from 'react'
import {Container} from './style'
import {useToast} from '@chakra-ui/react'

export const ItemCount = ({initial,stock,onAdd}) => {
    const [count, SetCount] = useState(initial);
    const toast = useToast();
    const increase = () => count < stock ? SetCount(count + 1) : (
        toast({
            title: `La cantidad no puede ser mayor a : ${stock}`,
            position: 'top-right',
            status: 'error',
            isClosable: true,
            duration: 1000
          })
        );
    const decrease = () => count > initial ? SetCount(count - 1) : (
        toast({
            title: `La cantidad no puede ser menor a : ${initial}`,
            position: 'top-right',
            status: 'error',
            isClosable: true,
            duration: 1000
          })
        );



    return (
        <Container>
            <div className="contador">
                <button onClick={decrease}>-</button>
                <h3>{count}</h3>
                <button onClick={increase}>+</button>
            </div>

            <button  id='btn-add' className='btn' onClick={() => onAdd(count)}>Agregar al carrito</button>


        </Container>
    )
}
