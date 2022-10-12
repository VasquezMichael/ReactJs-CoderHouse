import  { createContext, useContext, useState } from 'react'


export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartContexProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  console.log(cart);
  
  const isInCart = (id) => cart.find(product => product.id === id);

  const addCart = (item, quantity) => {
    console.log(item);
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
    } else{
      const newProduct = {...item, quantity: quantity}
      setCart([...cart, newProduct])
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
      totalProducts

    }}>
        {children}

    </CartContext.Provider>
  )
}

