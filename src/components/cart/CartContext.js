/* eslint-disable import/prefer-default-export */
import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartList, setCartList] = useState([])

  return (
    <CartContext.Provider value={{ cartList, setCartList }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext)
}
