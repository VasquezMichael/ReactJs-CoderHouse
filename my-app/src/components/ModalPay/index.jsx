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
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'

import { db } from '../../firebase/firebase'
import { collection, addDoc, serverTimestap } from 'firebase/firestore'
import { useState } from 'react'

function InitialFocus({}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [data, setData] = useState({});

    const realizarCompra = (ev) => {
        ev.preventDefault();
        const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection, {
            nombre: ev.target.FirstName.value,
            apellido: ev.target.LastName.value
        }).then(result => console.log(result) )
        console.log(ev.target.FirstName.value, ev.target.LastName.value);
    }


    return (
    <>
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <form id='a' onSubmit={(ev) => realizarCompra(ev)}>
                        <FormLabel>First name</FormLabel>
                        <Input ref={initialRef} placeholder='First name' name='FirstName' />
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder='Last name' name='LastName'/>
                    </form>
                </ModalBody>
        
                <ModalFooter>
                    <button type='submit' form='a'>
                        Save
                    </button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
    )
}

export  {InitialFocus}