import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormLabel,
    Input,
    useToast
  } from '@chakra-ui/react'

import { useCartContext } from '../../Contex/CartContex'
import { db } from '../../firebase/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

function InitialFocus({}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const {cart, totalPrice,cleanCart} = useCartContext();
    let codCompra = '';
    const toast = useToast()
    const realizarCompra = (ev) => {
        ev.preventDefault();
        
        const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection, {
            nombre: ev.target.FirstName.value,
            celular: ev.target.Celular.value,
            email: ev.target.Email.value,
            productos: cart,
            fecha: serverTimestamp(),
            precioTotal: totalPrice()
         }).then((result) => {
            codCompra = result.id;
            cleanCart();
            toast({
                title: `La compra se realizo con exito. Codigo de compra: ${codCompra}`,
                position: 'top',
                status: 'success',
                isClosable: true,
                duration: 9000
              })
         })
 
    }


    return (
    <>
        <Button onClick={onOpen} id='btn-modal' size='sm'>Realizar pedido</Button>
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Confirmacion del pedido</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <form id='form' onSubmit={(ev) => realizarCompra(ev)}>
                        <FormLabel>Nombre</FormLabel>
                        <Input ref={initialRef} placeholder='Nombre' name='FirstName' />
                        <FormLabel>Celular</FormLabel>
                        <Input placeholder='Celular' name='Celular' type='number'/>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder='Email' type='email' name='Email'/>
                    </form>
                </ModalBody>
        
                <ModalFooter className='ModalFooter'>
                    <Button
                        mt={4}
                        mr= {2}
                        colorScheme='green'
                        type='submit'
                        form='form'
                        size='sm'
                    >
                       Finalizar compra
                    </Button>
                    <Button mt={4} colorScheme='red' onClick={onClose} size='sm'> Cerrar </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
    )
}

export  {InitialFocus}