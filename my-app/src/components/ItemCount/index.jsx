import React,{ useState } from 'react'
import { useCartContext } from '../../Contex/CartContex';
import {Container} from './style'
export const ItemCount = ({initial,stock,onAdd}) => {
    const [count, SetCount] = useState(initial);
    const {addCart} = useCartContext()
    const increase = () => count < stock ? SetCount(count + 1) : console.log('La cantidad no puede ser mayor a ',stock);
    const decrease = () => count > initial ? SetCount(count - 1) : console.log('La cantidad no puede ser menor a ',initial);

    const addItem = () => {
        onAdd(count);
    }


    return (
        <Container>
            <button onClick={decrease}>-</button>
            <h3>{count}</h3>
            <button onClick={increase}>+</button>
            <button onClick={addItem}>Add</button>
        </Container>
    )
}
