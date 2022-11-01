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
import { collection, addDoc, serverTimestamp, doc, getDoc } from 'firebase/firestore'




function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const {cart, totalPrice,cleanCart, actualizarStock} = useCartContext();
    const toast = useToast()
    const datosVenta = {
        nombre: '',
        email: '',
        celular:'',
        comentarios:''
    }


    function validarFormulario () {
        return datosVenta.celular !== '' && datosVenta.email !==  '' && datosVenta.nombre !==  '';
    }

    async function getProducts (dataB,userId) {
        const refDoc = doc(dataB,userId);
        const x = await getDoc(refDoc).then((product) => {
            return {...product.data(), id: product.id};
        })
        return x;
    }


    const validarStockDb = async () => {
        const sinStockDisponible = [];
        const dataB = collection(db,'products');
        const promesas = cart.map((product) => getProducts(dataB,product.id))
        Promise.all([...promesas]).then((res) => {
            res.forEach(product => {
                const productCart = cart.find(itemCart => itemCart.id === product.id);
                if (product.stock < productCart.quantity) {
                    sinStockDisponible.push(product.title)
                }
            })
        }).then(() => {
            if (sinStockDisponible.length > 0) {
                toast({
                    title: 'Sin stock disponible o cantidad insuficiente: '+ sinStockDisponible,
                    position: 'top',
                    status: 'error',
                    isClosable: true,
                    duration: 3000
                  })
            }else{
                onOpen()
            }
        })
 
    }

    const realizarCompra = () => {
        if (validarFormulario()) {
            const ventasCollection = collection(db, 'ventas');
            addDoc(ventasCollection, {
               ...datosVenta, 
               productos: cart,
               fecha: serverTimestamp(),
               precioTotal: totalPrice()
            }).then((result) => {
               actualizarStock();
               cleanCart();
               toast({
                   title: `La compra se realizo con exito. Codigo de compra: ${result.id}`,
                   position: 'top',
                   status: 'success',
                   isClosable: true,
                   duration: 9000
                 })
            })
        } else{
            toast({
                title: `Por favor complete todos los campos`,
                position: 'top-right',
                status: 'error',
                isClosable: true,
                duration: 2000
              })
        }


    }

    return (
    <>
        <Button onClick={ () => validarStockDb() }id='btn-modal' size='sm'>Realizar pedido</Button>
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
                    <form id='form' >
                        <FormLabel>Nombre</FormLabel>
                        <Input ref={initialRef} placeholder='Nombre' name='FirstName' onChange={ev => datosVenta.nombre = ev.target.value}/>
                        <FormLabel>Celular</FormLabel>
                        <Input placeholder='Celular' name='Celular' type='number' onChange={ev => datosVenta.celular = ev.target.value}/>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder='Email' type='email' name='Email' onChange={ev => datosVenta.email = ev.target.value}/>
                        <FormLabel>Dejanos tus aclaraciones:</FormLabel>
                        <textarea name="textArea" onChange={ev => datosVenta.comentarios = ev.target.value} style={{border: '1px solid black', width: '100%', height: '80px', resize: 'none', padding: '5px'}}></textarea>
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
                        onClick={ev => {ev.preventDefault(); realizarCompra()}}
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