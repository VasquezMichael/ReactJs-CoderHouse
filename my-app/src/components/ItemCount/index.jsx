import React,{ useState } from 'react'
import { HStack, Button, Text, Flex,Box,Heading,Spacer,ButtonGroup } from '@chakra-ui/react'

export const ItemCount = ({initial,stock,onAdd}) => {
    const [count, SetCount] = useState(initial);

    const increase = () => count < stock ? SetCount(count + 1) : console.log('La cantidad no puede ser mayor a ',stock);
    const decrease = () => count > initial ? SetCount(count - 1) : console.log('La cantidad no puede ser menor a ',initial);
    return (
        <Flex minWidth='max-content' maxWidth='400px'  gap='2'>
            <Button colorScheme='teal' size='sm' onClick={decrease}>-</Button>
            <Spacer />
            <Box p='2'>
                <Heading size='md'>{count}</Heading>
            </Box>
           <Spacer />
            <ButtonGroup gap='5'>
                <Button colorScheme='teal' size='sm' onClick={increase}>+</Button>
                <Button colorScheme='teal'>Añadir</Button>
            </ButtonGroup>
        </Flex>
    )
}
