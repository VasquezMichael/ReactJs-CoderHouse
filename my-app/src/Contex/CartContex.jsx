import { doc, updateDoc } from 'firebase/firestore';
import  { createContext, useContext, useEffect, useState } from 'react'
import { db } from '../firebase/firebase';

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartContexProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productosAgregados, setProductosAgregados] = useState(false);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if (storage){
      setCart(storage);
      setProductosAgregados(true);
    }
  },[])

  useEffect(() => {
    if (productosAgregados) {
      localStorage.setItem('carrito', JSON.stringify(cart));
    }
  },[cart])

  const actualizarStock = () => {
    cart.forEach(product => {
      const stockActualizado = doc(db, 'products', product.id);
      updateDoc(stockActualizado, {stock: (product.stock - product.quantity)})
    });
  }

  const isInCart = (id) => cart.find(product => product.id === id);

  const addCart = (item, quantity) => {
    if(isInCart(item.id)){
      const newCart = cart.map(product => {
        if (item.id === product.id) {
          const newQuantity = product.quantity + quantity;
          return {...product, quantity: newQuantity}
        }else{
          return product
        }
      })
      setCart(newCart);
      setProductosAgregados(true);
    } else{
      const newProduct = {...item, quantity: quantity}
      setCart([...cart, newProduct]);
      setProductosAgregados(true);
    }
  }
  
  const removeProduct = (id) => setCart(cart.filter(prod => prod.id != id))

  const cleanCart = () => setCart([])

  const totalPrice = () => {

    return cart.reduce((acc, product) => acc += (product.price * product.quantity),0);
  }

  const totalProducts = () => {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
  }

  return (
    <CartContext.Provider value = {{
      cart,
      addCart,
      removeProduct,
      cleanCart,
      totalPrice,
      totalProducts,
      actualizarStock
    }}>
        {children}

    </CartContext.Provider>
  )
}

